interface AnnouncementBannerProps {
  html: string;
}

export default function AnnouncementBanner({ html }: AnnouncementBannerProps) {
  return (
    <div className="w-full bg-accent text-white px-4 py-2 text-center [&_a]:underline [&_a]:hover:no-underline" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
