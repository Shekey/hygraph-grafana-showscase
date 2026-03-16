"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type {
  GetArticleQuery,
  GetArticlesQuery,
} from "@/types/hygraph-generated";
import { createPreviewAttributes } from "@hygraph/preview-sdk/core";
import { RichText } from "@graphcms/rich-text-react-renderer";
import type { RichTextContent } from "@graphcms/rich-text-types";

type Article = NonNullable<GetArticleQuery["article"]>;
type ArticleListItem = GetArticlesQuery["articles"][number];
type ContentBlock = Article["content"][number];

interface ArticleViewProps {
  article: Article;
  allArticles: ArticleListItem[];
  locale: string;
}

function ContentBlockRenderer({
  block,
  locale,
  articleId,
}: {
  block: ContentBlock;
  locale: string;
  articleId: string;
}) {
  // Component chain links the parent entry to this component instance
  const componentChain = [{ fieldApiId: "content", instanceId: block.id }];

  switch (block.__typename) {
    case "ArticleParagraph":
      return (
        <div
          {...createPreviewAttributes({
            entryId: articleId,
            fieldApiId: "text",
            componentChain,
          })}
          className="text-muted"
          style={{ lineHeight: 1.85, fontSize: "1rem" }}
        >
          <RichText
            content={block.paragraphText.raw as unknown as RichTextContent}
            renderers={{
              h2: ({ children }) => (
                <h2 className="text-primary text-2xl leading-snug mt-12 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-primary text-xl leading-snug mt-10 mb-3">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-primary text-base font-bold leading-normal mt-8 mb-2">
                  {children}
                </h4>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 my-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 my-4">{children}</ol>
              ),
              li: ({ children }) => <li className="my-1">{children}</li>,
              a: ({ children, href, openInNewTab }) => (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : undefined}
                  rel={openInNewTab ? "noopener noreferrer" : undefined}
                  className="text-brand underline underline-offset-2 hover:opacity-80"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      );

    case "ArticleImageSection":
      return (
        <div className="my-8">
          {block.image?.url && (
            <div
              {...createPreviewAttributes({
                entryId: articleId,
                fieldApiId: "image",
                componentChain,
              })}
            >
              <Image
                src={block.image.url}
                alt={block.caption || ""}
                width={block.image.width || 800}
                height={block.image.height || 450}
                className="w-full object-cover"
              />
            </div>
          )}
          {block.caption && (
            <p
              {...createPreviewAttributes({
                entryId: articleId,
                fieldApiId: "caption",
                componentChain,
              })}
              className="text-muted mt-2 text-center"
              style={{ fontSize: "0.85rem" }}
            >
              {block.caption}
            </p>
          )}
          {block.imageSectionText?.html && (
            <div
              {...createPreviewAttributes({
                entryId: articleId,
                fieldApiId: "text",
                componentChain,
              })}
              className="text-muted mt-4"
              style={{ lineHeight: 1.85, fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: block.imageSectionText.html }}
            />
          )}
        </div>
      );

    case "ArticleProductCallout":
      return (
        <div className="my-8 border border-primary p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {block.product?.image?.url && (
              <Link
                {...createPreviewAttributes({
                  entryId: articleId,
                  fieldApiId: "product",
                  componentChain,
                })}
                href={`/${locale}/products/${block.product.slug}`}
                className="shrink-0"
              >
                <Image
                  src={block.product.image.url}
                  alt={block.product.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </Link>
            )}
            <div>
              <h3
                {...createPreviewAttributes({
                  entryId: articleId,
                  fieldApiId: "headline",
                  componentChain,
                })}
                className="text-xl font-bold"
              >
                {block.headline}
              </h3>
              {block.calloutText?.html && (
                <div
                  {...createPreviewAttributes({
                    entryId: articleId,
                    fieldApiId: "text",
                    componentChain,
                  })}
                  className="text-muted mt-2"
                  style={{ lineHeight: 1.7, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: block.calloutText.html }}
                />
              )}
              {block.product && (
                <Link
                  href={`/${locale}/products/${block.product.slug}`}
                  className="inline-block mt-4 text-brand hover:underline font-semibold"
                >
                  View {block.product.name} →
                </Link>
              )}
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ArticleView({
  article,
  allArticles,
  locale,
}: ArticleViewProps) {
  const index = allArticles.findIndex((a) => a.slug === article.slug);
  const prev = index > 0 ? allArticles[index - 1] : null;
  const next =
    index >= 0 && index < allArticles.length - 1
      ? allArticles[index + 1]
      : null;

  return (
    <div>
      {/* Back */}
      <div className="border-b border-primary">
        <div className="p-6 md:p-8 lg:px-16">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-muted uppercase tracking-widest hover:text-primary transition-colors"
            style={{ fontSize: "0.7rem", fontWeight: 700 }}
          >
            <ArrowLeft size={13} />
            Blog
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary">
            <div className="flex items-center gap-4 mb-6">
              <span
                {...createPreviewAttributes({
                  entryId: article.id,
                  fieldApiId: "category",
                })}
                className="bg-brand text-white px-3 py-1 uppercase tracking-[0.15em]"
                style={{ fontSize: "0.6rem", fontWeight: 700 }}
              >
                {article.category}
              </span>
            </div>
            <h1
              {...createPreviewAttributes({
                entryId: article.id,
                fieldApiId: "title",
              })}
            >
              {article.title}
              <span className="text-brand">.</span>
            </h1>
            <p
              {...createPreviewAttributes({
                entryId: article.id,
                fieldApiId: "summary",
              })}
              className="text-muted mt-8 max-w-[600px]"
              style={{ lineHeight: 1.7, fontSize: "1.1rem" }}
            >
              {article.summary}
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
              <p
                {...createPreviewAttributes({
                  entryId: article.id,
                  fieldApiId: "publishedDate",
                })}
                style={{ fontWeight: 600 }}
              >
                {article.publishedDate}
              </p>
            </div>
            {article.readTime && (
              <div>
                <p
                  className="uppercase tracking-[0.15em] text-muted mb-1"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  Read time
                </p>
                <p
                  {...createPreviewAttributes({
                    entryId: article.id,
                    fieldApiId: "readTime",
                  })}
                  style={{ fontWeight: 600 }}
                >
                  {article.readTime}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover */}
      {article.image?.url && (
        <section className="border-b border-primary">
          <div
            {...createPreviewAttributes({
              entryId: article.id,
              fieldApiId: "image",
            })}
          >
            <Image
              src={article.image.url}
              alt={article.title}
              width={article.image.width || 1200}
              height={article.image.height || 520}
              className="w-full object-cover max-h-[520px]"
              priority
            />
          </div>
        </section>
      )}

      {/* Article content */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            {...createPreviewAttributes({
              entryId: article.id,
              fieldApiId: "content",
            })}
            className="lg:col-span-8 lg:border-r border-primary px-8 md:px-12 lg:px-16 py-6 md:py-12"
          >
            {article.content.map((block) => (
              <ContentBlockRenderer
                key={block.id}
                block={block}
                locale={locale}
                articleId={article.id}
              />
            ))}
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
              {allArticles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 3)
                .map((other) => (
                  <Link
                    key={other.id}
                    href={`/${locale}/blog/${other.slug}`}
                    className="group block border border-primary hover:bg-primary hover:text-secondary transition-colors overflow-hidden"
                  >
                    {other.image?.url && (
                      <div
                        {...createPreviewAttributes({
                          entryId: other.id,
                          fieldApiId: "image",
                        })}
                      >
                        <Image
                          src={other.image.url}
                          alt={other.title}
                          width={other.image.width || 400}
                          height={120}
                          className="w-full h-[120px] object-cover group-hover:opacity-80 transition-opacity"
                        />
                      </div>
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
                  className="flex items-center gap-2 uppercase tracking-widest text-muted group-hover:text-secondary/50"
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
                  className="flex items-center gap-2 uppercase tracking-widest text-muted group-hover:text-secondary/50"
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
