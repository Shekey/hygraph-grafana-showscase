import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GetPageQuery } from "@/types/hygraph-generated";
import type { Locale } from "@/lib/utils/locale";

type FeaturedArticleSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "FeaturedArticle" }
>;

interface FeaturedArticleProps {
  section: FeaturedArticleSection;
  locale: Locale;
}

export default function FeaturedArticle({ section, locale }: FeaturedArticleProps) {
  const { blogPost, ctaLabel, imageRight } = section;

  if (!blogPost) return null;

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
                  className="bg-accent text-white px-3 py-1 uppercase tracking-[0.15em]"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  {blogPost.category}
                </span>
                <span
                  className="uppercase tracking-[0.15em] text-muted"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  {blogPost.publishedDate}
                </span>
              </div>
              <h2 className="mb-6 group-hover:text-accent transition-colors">
                {blogPost.title}
                <span className="text-accent">.</span>
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                {blogPost.summary}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3 text-accent uppercase tracking-[0.1em] group-hover:gap-4 transition-all self-start">
              <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                {ctaLabel || "Read article"}
              </span>
              <ArrowRight size={14} />
            </div>
          </div>
          <div className="lg:col-span-7 overflow-hidden">
            {blogPost.image?.url ? (
              <img
                src={blogPost.image?.url}
                alt={blogPost.title}
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
        <div className="lg:col-span-7 overflow-hidden border-b lg:border-b-0 lg:border-r border-primary">
          {blogPost.image?.url ? (
            <img
              src={blogPost.image?.url}
              alt={blogPost.title}
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
                className="bg-accent text-white px-3 py-1 uppercase tracking-[0.15em]"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {blogPost.category}
              </span>
              <span
                className="uppercase tracking-[0.15em] text-muted"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {blogPost.publishedDate}
              </span>
            </div>
            <h2 className="mb-6 group-hover:text-accent transition-colors">
              {blogPost.title}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              {blogPost.summary}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3 text-accent uppercase tracking-[0.1em] group-hover:gap-4 transition-all self-start">
            <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>
              {ctaLabel || "Read article"}
            </span>
            <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </section>
  );
}
