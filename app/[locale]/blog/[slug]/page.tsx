/**
 * Article Detail Page - Shows a single article by slug
 */

import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { isValidLocale } from "@/lib/utils/locale";
import { hygraphRequest } from "@/lib/hygraph/client";
import { recordPageRequest } from "@/lib/otel-custom-metrics";
import {
  GetArticleDocument,
  GetArticlesDocument,
  type GetArticleQuery,
  type GetArticleQueryVariables,
  type GetArticlesQuery,
} from "@/types/hygraph-generated";
import ArticleView from "@/components/pages/ArticleView";
import type { Metadata } from "next";

type Article = NonNullable<GetArticleQuery["article"]>;

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ segment?: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  try {
    const data = await hygraphRequest<GetArticleQuery>(GetArticleDocument, {
      slug,
      locale,
    } as GetArticleQueryVariables);
    const article = data.article;
    if (!article) return { title: "Article Not Found" };

    return {
      title: `${article.title} | HyBikes Blog`,
      description: article.summary,
    };
  } catch {
    return { title: "Blog | HyBikes" };
  }
}

export default async function ArticlePage({
  params,
  searchParams,
}: ArticlePageProps) {
  const { locale, slug } = await params;
  const { segment: segmentIdFromUrl } = await searchParams;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t0 = performance.now();

  const cookieStore = await cookies();
  const segmentId =
    segmentIdFromUrl ?? cookieStore.get("hybike-segment")?.value ?? undefined;

  const [articleData, allArticlesData] = await Promise.all([
    hygraphRequest<GetArticleQuery>(GetArticleDocument, {
      slug,
      locale,
      segmentId,
    } as GetArticleQueryVariables),
    hygraphRequest<GetArticlesQuery>(GetArticlesDocument, { locale }),
  ]);

  recordPageRequest(`/[locale]/blog/[slug]`, Math.round(performance.now() - t0), 200);

  const rawArticle = articleData.article;
  if (!rawArticle) {
    notFound();
  }

  // Apply variant overrides for title/summary/content if segment matches
  const variant = rawArticle.variants?.[0] ?? null;
  const article: Article = {
    ...rawArticle,
    title: variant?.title ?? rawArticle.title,
    summary: variant?.summary ?? rawArticle.summary,
    content:
      variant?.content && variant.content.length > 0
        ? variant.content
        : rawArticle.content,
  };

  const allArticles = allArticlesData.articles ?? [];

  return (
    <ArticleView article={article} allArticles={allArticles} locale={locale} />
  );
}

export const revalidate = 300;
