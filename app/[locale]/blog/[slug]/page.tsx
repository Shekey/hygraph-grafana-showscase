/**
 * Article Detail Page - Shows a single article by slug
 */

import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/utils/locale';
import { hygraphRequest } from '@/lib/hygraph/client';
import {
  GetArticleDocument,
  GetArticlesDocument,
  type GetArticleQuery,
  type GetArticleQueryVariables,
  type GetArticlesQuery,
} from '@/types/hygraph-generated';
import ArticleView from '@/components/pages/ArticleView';
import type { Article } from '@/types/hybike';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await hygraphRequest<GetArticleQuery>(
      GetArticleDocument,
      { slug } as GetArticleQueryVariables,
    );
    const article = data.article;
    if (!article) return { title: 'Article Not Found' };

    return {
      title: `${article.title} | HyBikes Journal`,
      description: article.summary,
    };
  } catch {
    return { title: 'Journal | HyBikes' };
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  let article: Article | null = null;
  let allArticles: Article[] = [];

  try {
    const [articleData, allArticlesData] = await Promise.all([
      hygraphRequest<GetArticleQuery>(
        GetArticleDocument,
        { slug } as GetArticleQueryVariables,
      ),
      hygraphRequest<GetArticlesQuery>(GetArticlesDocument, {}),
    ]);

    article = articleData.article as unknown as Article;
    allArticles = (allArticlesData.articles ?? []) as unknown as Article[];
  } catch (error) {
    console.error('Failed to fetch article:', error);
  }

  if (!article) {
    notFound();
  }

  return <ArticleView article={article} allArticles={allArticles} />;
}

export const revalidate = 300;
