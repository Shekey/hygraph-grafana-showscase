import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { GetPageQuery } from "@/types/hygraph-generated";
import type { Locale } from "@/lib/utils/locale";
import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";

type FeaturedArticleSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "FeaturedArticle" }
>;

interface FeaturedArticleProps {
  section: FeaturedArticleSection;
  locale: Locale;
  pageId: string;
}

export default function FeaturedArticle({
  section,
  locale,
  pageId,
}: FeaturedArticleProps) {
  const { blogPost, ctaLabel, imageRight } = section;

  if (!blogPost) return null;

  // ctaLabel lives on the section component
  const sectionChain = [createComponentChainLink("sections", section.id)];
  // blogPost fields are on the related Article entry — use blogPost.id directly, no chain
  const postId = blogPost.id;

  if (imageRight) {
    // Text LEFT (5 cols), image RIGHT (7 cols)
    return (
      <section className="border-b border-primary">
        <Link
          href={`/${locale}/blog/${blogPost.slug}`}
          className="grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  {...createPreviewAttributes({
                    entryId: postId,
                    fieldApiId: "category",
                  })}
                  className="bg-brand text-white px-3 py-1 uppercase tracking-[0.15em]"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  {blogPost.category}
                </span>
                <span
                  {...createPreviewAttributes({
                    entryId: postId,
                    fieldApiId: "publishedDate",
                  })}
                  className="uppercase tracking-[0.15em] text-muted"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  {blogPost.publishedDate}
                </span>
              </div>
              <h2
                {...createPreviewAttributes({
                  entryId: postId,
                  fieldApiId: "title",
                })}
                className="mb-6 group-hover:text-brand transition-colors"
              >
                {blogPost.title}
                <span className="text-brand">.</span>
              </h2>
              <p
                {...createPreviewAttributes({
                  entryId: postId,
                  fieldApiId: "summary",
                })}
                className="text-muted"
                style={{ lineHeight: 1.7 }}
              >
                {blogPost.summary}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3 text-brand uppercase tracking-[0.1em] group-hover:gap-4 transition-all self-start">
              <span
                {...createPreviewAttributes({
                  entryId: pageId,
                  fieldApiId: "ctaLabel",
                  componentChain: sectionChain,
                })}
                style={{ fontSize: "0.75rem", fontWeight: 700 }}
              >
                {ctaLabel || "Read article"}
              </span>
              <ArrowRight size={14} />
            </div>
          </div>
          <div
            {...createPreviewAttributes({
              entryId: postId,
              fieldApiId: "image",
            })}
            className="lg:col-span-7 overflow-hidden"
          >
            {blogPost.image?.url ? (
              <Image
                src={blogPost.image.url}
                alt={blogPost.title}
                width={blogPost.image.width || 1600}
                height={blogPost.image.height || 1000}
                className="w-full h-full object-cover min-h-[360px] lg:min-h-[480px] group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full min-h-[360px] lg:min-h-[480px] bg-[#E8E8E4]" />
            )}
          </div>
        </Link>
      </section>
    );
  }

  // Image LEFT (7 cols), text RIGHT (5 cols)
  return (
    <section className="border-b border-primary">
      <Link
        href={`/${locale}/blog/${blogPost.slug}`}
        className="grid grid-cols-1 lg:grid-cols-12 group"
      >
        <div
          {...createPreviewAttributes({ entryId: postId, fieldApiId: "image" })}
          className="lg:col-span-7 overflow-hidden border-b lg:border-b-0 lg:border-r border-primary"
        >
          {blogPost.image?.url ? (
            <Image
              src={blogPost.image.url}
              alt={blogPost.title}
              width={blogPost.image.width || 1600}
              height={blogPost.image.height || 1000}
              className="w-full h-full object-cover min-h-[360px] lg:min-h-[480px] group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <div className="w-full min-h-[360px] lg:min-h-[480px] bg-[#E8E8E4]" />
          )}
        </div>
        <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                {...createPreviewAttributes({
                  entryId: postId,
                  fieldApiId: "category",
                })}
                className="bg-brand text-white px-3 py-1 uppercase tracking-[0.15em]"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {blogPost.category}
              </span>
              <span
                {...createPreviewAttributes({
                  entryId: postId,
                  fieldApiId: "publishedDate",
                })}
                className="uppercase tracking-[0.15em] text-muted"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {blogPost.publishedDate}
              </span>
            </div>
            <h2
              {...createPreviewAttributes({
                entryId: postId,
                fieldApiId: "title",
              })}
              className="mb-6 group-hover:text-brand transition-colors"
            >
              {blogPost.title}
              <span className="text-brand">.</span>
            </h2>
            <p
              {...createPreviewAttributes({
                entryId: postId,
                fieldApiId: "summary",
              })}
              className="text-muted"
              style={{ lineHeight: 1.7 }}
            >
              {blogPost.summary}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3 text-brand uppercase tracking-[0.1em] group-hover:gap-4 transition-all self-start">
            <span
              {...createPreviewAttributes({
                entryId: pageId,
                fieldApiId: "ctaLabel",
                componentChain: sectionChain,
              })}
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              {ctaLabel || "Read article"}
            </span>
            <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </section>
  );
}
