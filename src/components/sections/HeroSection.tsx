/**
 * Hero Section Component - Split layout (text left, image right)
 * hybikes design: big uppercase typography, orange accent, local image panel
 */

import type { GetPageQuery } from "@/types/hygraph-generated";
import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";
import Button from "@/components/ui/Button";

type HeroSectionType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "HeroSection" }
>;

interface HeroSectionProps {
  section: HeroSectionType;
  pageId: string;
}

export default function HeroSection({ section, pageId }: HeroSectionProps) {
  const mediaUrl = section.backgroundMedia?.url ?? null;
  const chain = [createComponentChainLink("sections", section.id)];

  if (mediaUrl) {
    return (
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Typography */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-primary">
            <div>
              {section.label && (
                <p
                  {...createPreviewAttributes({
                    entryId: pageId,
                    fieldApiId: "label",
                    componentChain: chain,
                  })}
                  className="uppercase tracking-[0.2em] text-muted mb-8"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {section.label}
                </p>
              )}
              <h1
                {...createPreviewAttributes({
                  entryId: pageId,
                  fieldApiId: "headline",
                  componentChain: chain,
                })}
                className="relative z-10"
              >
                {section.headline.replace(/\.$/, "")}
                <span className="text-brand">.</span>
              </h1>
            </div>
            <div className="mt-12">
              {section.subheadline && (
                <p
                  {...createPreviewAttributes({
                    entryId: pageId,
                    fieldApiId: "subheadline",
                    componentChain: chain,
                  })}
                  className="text-muted max-w-[320px] mb-8"
                  style={{ lineHeight: 1.6 }}
                >
                  {section.subheadline}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {section.primaryCTA && (
                  <Button
                    cta={section.primaryCTA}
                    entryId={pageId}
                    componentChain={[
                      ...chain,
                      createComponentChainLink(
                        "primaryCTA",
                        section.primaryCTA.id
                      ),
                    ]}
                    size="sm"
                  />
                )}
                {section.secondaryCTA && (
                  <Button
                    cta={section.secondaryCTA}
                    entryId={pageId}
                    componentChain={[
                      ...chain,
                      createComponentChainLink(
                        "secondaryCTA",
                        section.secondaryCTA.id
                      ),
                    ]}
                    size="sm"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            {...createPreviewAttributes({
              entryId: pageId,
              fieldApiId: "backgroundMedia",
              componentChain: chain,
            })}
            className="lg:col-span-5 relative w-full h-full lg:max-h-[calc(100vh-120px)]"
          >
            <img
              src={mediaUrl}
              alt={section.headline}
              className="object-cover w-full h-full"
            />
            {section.mediaText && (
              <div className="absolute bottom-0 left-0 bg-brand text-white px-6 py-3">
                <p
                  {...createPreviewAttributes({
                    entryId: pageId,
                    fieldApiId: "mediaText",
                    componentChain: chain,
                  })}
                  className="uppercase tracking-[0.15em]"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {section.mediaText}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // No image: full-width dark hero
  return (
    <section className="border-b border-primary bg-primary min-h-[60vh] flex items-center">
      <div className="p-8 md:p-16 lg:p-24 w-full">
        {section.label && (
          <p
            {...createPreviewAttributes({
              entryId: pageId,
              fieldApiId: "label",
              componentChain: chain,
            })}
            className="uppercase tracking-[0.2em] text-secondary/50 mb-6"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {section.label}
          </p>
        )}
        <h1
          {...createPreviewAttributes({
            entryId: pageId,
            fieldApiId: "headline",
            componentChain: chain,
          })}
          className="text-secondary mb-8 max-w-3xl"
        >
          {section.headline.replace(/\.$/, "")}
          <span className="text-brand">.</span>
        </h1>
        {section.subheadline && (
          <p
            {...createPreviewAttributes({
              entryId: pageId,
              fieldApiId: "subheadline",
              componentChain: chain,
            })}
            className="text-secondary/70 max-w-lg mb-10"
            style={{ lineHeight: 1.6 }}
          >
            {section.subheadline}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {section.primaryCTA && (
            <Button
              cta={section.primaryCTA}
              entryId={pageId}
              componentChain={[
                ...chain,
                createComponentChainLink("primaryCTA", section.primaryCTA.id),
              ]}
              size="sm"
            />
          )}
          {section.secondaryCTA && (
            <Button
              cta={section.secondaryCTA}
              entryId={pageId}
              componentChain={[
                ...chain,
                createComponentChainLink(
                  "secondaryCTA",
                  section.secondaryCTA.id
                ),
              ]}
              size="sm"
            />
          )}
        </div>
      </div>
    </section>
  );
}
