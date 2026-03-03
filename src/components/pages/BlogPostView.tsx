"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import type { Post } from "@/types/hybike";

interface BlogPostViewProps {
  post: Post;
  allPosts: Post[];
}

export default function BlogPostView({ post, allPosts }: BlogPostViewProps) {
  const params = useParams();
  const locale = (params.locale as string) || "en";

  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? allPosts[index - 1] : null;
  const next =
    index >= 0 && index < allPosts.length - 1 ? allPosts[index + 1] : null;

  return (
    <div>
      {/* Back */}
      <div className="border-b border-primary">
        <div className="p-6 md:p-8 lg:px-16">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-muted uppercase tracking-[0.1em] hover:text-primary transition-colors"
            style={{ fontSize: "0.7rem", fontWeight: 700 }}
          >
            <ArrowLeft size={13} />
            Journal
          </Link>
        </div>
      </div>

      {/* Cover */}
      {post.image?.url && (
        <section className="border-b border-primary">
          <img
            src={post.image?.url}
            alt={post.title}
            className="w-full object-cover max-h-[520px]"
          />
        </section>
      )}

      {/* Header */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="bg-accent text-white px-3 py-1 uppercase tracking-[0.15em]"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {post.category}
              </span>
            </div>
            <h1>
              {post.title}
              <span className="text-accent">.</span>
            </h1>
            <p
              className="text-muted mt-8 max-w-[600px]"
              style={{ lineHeight: 1.7, fontSize: "1.1rem" }}
            >
              {post.summary}
            </p>
          </div>
          <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col gap-4">
            <div>
              <p
                className="uppercase tracking-[0.15em] text-muted mb-1"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                Published
              </p>
              <p style={{ fontWeight: 600 }}>{post.publishedDate}</p>
            </div>
            {post.readTime && (
              <div>
                <p
                  className="uppercase tracking-[0.15em] text-muted mb-1"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  Read time
                </p>
                <p style={{ fontWeight: 600 }}>{post.readTime}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      {post.body?.html && (
        <section className="border-b border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:border-r border-primary">
              <div
                className="px-8 md:px-12 lg:px-16 py-6 md:py-12 text-muted [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:leading-snug [&_h3]:mt-10 [&_h3]:mb-3 [&_h4]:text-primary [&_h4]:text-base [&_h4]:font-bold [&_h4]:leading-normal [&_h4]:mt-8 [&_h4]:mb-2"
                style={{ lineHeight: 1.85, fontSize: "1rem" }}
                dangerouslySetInnerHTML={{ __html: post.body.html }}
              />
            </div>

            {/* Sidebar: other articles */}
            <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 border-t lg:border-t-0 border-primary">
              <p
                className="uppercase tracking-[0.2em] text-muted mb-6"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                More articles
              </p>
              <div className="space-y-4">
                {allPosts
                  .filter((p) => p.slug !== post.slug)
                  .map((other) => (
                    <Link
                      key={other.id}
                      href={`/${locale}/blog/${other.slug}`}
                      className="group block border border-primary hover:bg-primary hover:text-secondary transition-colors overflow-hidden"
                    >
                      {other.image?.url && (
                        <img
                          src={other.image?.url}
                          alt={other.title}
                          className="w-full h-[120px] object-cover group-hover:opacity-80 transition-opacity"
                        />
                      )}
                      <div className="p-4">
                        <span
                          className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50"
                          style={{ fontSize: "0.6rem", fontWeight: 700 }}
                        >
                          {other.category} &middot; {other.publishedDate}
                        </span>
                        <p
                          className="mt-1 group-hover:text-secondary"
                          style={{ fontWeight: 700, fontSize: "0.9rem" }}
                        >
                          {other.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prev / next navigation */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div
            className={`${
              next ? "border-b sm:border-b-0 sm:border-r border-primary" : ""
            }`}
          >
            {prev ? (
              <Link
                href={`/${locale}/blog/${prev.slug}`}
                className="flex flex-col gap-2 p-8 md:p-10 hover:bg-primary hover:text-secondary transition-colors group h-full"
              >
                <span
                  className="flex items-center gap-2 uppercase tracking-[0.1em] text-muted group-hover:text-secondary/50"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  <ArrowLeft size={12} />
                  Previous
                </span>
                <span style={{ fontWeight: 700, fontSize: "1rem" }}>
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="p-8 md:p-10" />
            )}
          </div>
          <div>
            {next ? (
              <Link
                href={`/${locale}/blog/${next.slug}`}
                className="flex flex-col items-end gap-2 p-8 md:p-10 hover:bg-primary hover:text-secondary transition-colors group h-full text-right"
              >
                <span
                  className="flex items-center gap-2 uppercase tracking-[0.1em] text-muted group-hover:text-secondary/50"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  Next
                  <ArrowRight size={12} />
                </span>
                <span style={{ fontWeight: 700, fontSize: "1rem" }}>
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="p-8 md:p-10" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
