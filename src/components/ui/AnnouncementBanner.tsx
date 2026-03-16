import { createPreviewAttributes } from "@hygraph/preview-sdk/core";

interface AnnouncementBannerProps {
  html: string;
  entryId: string;
}

export default function AnnouncementBanner({ html, entryId }: AnnouncementBannerProps) {
  return (
    <div className="w-full bg-brand text-white px-4 py-2 text-center [&_a]:underline [&_a]:hover:no-underline" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" }}>
      <div
        {...createPreviewAttributes({ entryId, fieldApiId: "announcement" })}
        data-hygraph-rich-text-format="html"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
