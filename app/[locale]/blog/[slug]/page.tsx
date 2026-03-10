/**
 * Article Detail Page - Shows a single article by slug
 */

import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { isValidLocale } from "@/lib/utils/locale";
import { hygraphRequest } from "@/lib/hygraph/client";
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
type ArticleListItem = GetArticlesQuery["articles"][number];

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ segment?: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await hygraphRequest<GetArticleQuery>(GetArticleDocument, {
      slug,
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

  const cookieStore = await cookies();
  const segmentId =
    segmentIdFromUrl ?? cookieStore.get("hybike-segment")?.value ?? undefined;

  let article: Article | null = null;
  let allArticles: ArticleListItem[] = [];

  try {
    const [articleData, allArticlesData] = await Promise.all([
      hygraphRequest<GetArticleQuery>(GetArticleDocument, {
        slug,
        segmentId,
      } as GetArticleQueryVariables),
      hygraphRequest<GetArticlesQuery>(GetArticlesDocument, {}),
    ]);

    const rawArticle = articleData.article;
    const variant = rawArticle?.variants?.[0] ?? null;
    // Apply variant overrides for title/summary/content if segment matches
    article = rawArticle
      ? {
          ...rawArticle,
          title: variant?.title ?? rawArticle.title,
          summary: variant?.summary ?? rawArticle.summary,
          content:
            variant?.content && variant.content.length > 0
              ? variant.content
              : rawArticle.content,
        }
      : null;
    allArticles = allArticlesData.articles ?? [];
  } catch (error) {
    console.error("Failed to fetch article:", error);
  }

  if (!article) {
    notFound();
  }

  return <ArticleView article={article} allArticles={allArticles} />;
}

export const revalidate = 300;
