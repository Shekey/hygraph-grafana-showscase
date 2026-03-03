"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import type { GetPageQuery } from "@/types/hygraph-generated";

type BlogListSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "BlogList" }
>;

interface BlogListProps {
  section: BlogListSection;
}

export default function BlogList({ section }: BlogListProps) {
  const params = useParams();
  const locale = (params.locale as string) || "en";

  const { posts, blogListHeadline } = section;

  if (posts.length === 0) {
    return (
      <div className="p-16 text-center">
        <p className="text-muted">No articles yet.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="border-b border-primary">
        <div className="p-8 md:p-12 lg:px-16 border-b border-primary">
          <p
            className="uppercase tracking-[0.2em] text-muted"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {blogListHeadline || "More articles"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              className={`group flex flex-col ${i === 0 ? "md:border-r border-primary" : ""}`}
            >
              <div className="overflow-hidden border-b border-primary">
                {post.image?.url ? (
                  <img
                    src={post.image?.url}
                    alt={post.title}
                    className="w-full object-cover h-[260px] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-[260px] bg-[#E8E8E4]" />
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="bg-primary text-secondary px-3 py-1 uppercase tracking-[0.15em]"
                    style={{ fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="uppercase tracking-[0.15em] text-muted"
                    style={{ fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    {post.publishedDate}
                  </span>
                </div>
                <h3 className="mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                  <span className="text-accent">.</span>
                </h3>
                <p className="text-muted mb-6 flex-1" style={{ lineHeight: 1.7 }}>
                  {post.summary}
                </p>
                <div className="flex items-center gap-2 text-accent uppercase tracking-[0.1em] group-hover:gap-3 transition-all self-start">
                  <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>
                    Read article
                  </span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
