/**
 * Blog Post Detail Page - Shows a single article by slug
 */

import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/utils/locale';
import { hygraphRequest } from '@/lib/hygraph/client';
import {
  GetBlogPostDocument,
  GetBlogPostsDocument,
  type GetBlogPostQuery,
  type GetBlogPostQueryVariables,
  type GetBlogPostsQuery,
} from '@/types/hygraph-generated';
import BlogPostView from '@/components/pages/BlogPostView';
import type { Post } from '@/types/hybike';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await hygraphRequest<GetBlogPostQuery>(
      GetBlogPostDocument,
      { slug } as GetBlogPostQueryVariables,
    );
    const post = data.blogPost;
    if (!post) return { title: 'Post Not Found' };

    return {
      title: `${post.title} | HyBikes Journal`,
      description: post.summary,
    };
  } catch {
    return { title: 'Journal | HyBikes' };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  let post: Post | null = null;
  let allPosts: Post[] = [];

  try {
    const [postData, allPostsData] = await Promise.all([
      hygraphRequest<GetBlogPostQuery>(
        GetBlogPostDocument,
        { slug } as GetBlogPostQueryVariables,
      ),
      hygraphRequest<GetBlogPostsQuery>(GetBlogPostsDocument, {}),
    ]);

    post = postData.blogPost as unknown as Post;
    allPosts = (allPostsData.blogPosts ?? []) as unknown as Post[];
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
  }

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} allPosts={allPosts} />;
}

export const revalidate = 300;
