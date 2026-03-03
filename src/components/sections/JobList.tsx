"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import type { GetPageQuery } from "@/types/hygraph-generated";
import { useSiteSettings } from "@/lib/context/SiteSettingsContext";

type JobListSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "JobList" }
>;

interface JobListProps {
  section: JobListSection;
}

export default function JobList({ section }: JobListProps) {
  const jobs = section.jobs;
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const siteSettings = useSiteSettings();
  const contactEmail = siteSettings?.contactEmail;

  return (
    <div>
      {/* Job listings */}
      <section className="border-b border-primary">
        <div>
          {jobs.map((job, i) => (
            <Link
              key={job.id}
              href={`/${locale}/careers/${job.slug}`}
              className={`grid grid-cols-12 items-center group hover:bg-primary hover:text-secondary transition-colors ${
                i < jobs.length - 1 ? "border-b border-primary" : ""
              }`}
            >
              <div className="col-span-2 sm:col-span-1 p-6 md:p-8 border-r border-primary group-hover:border-secondary/20 self-stretch flex items-center">
                <span
                  className="text-accent"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    fontWeight: 900,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="col-span-10 sm:col-span-11 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    }}
                  >
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <span
                      className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50"
                      style={{ fontSize: "0.65rem", fontWeight: 700 }}
                    >
                      {job.department}
                    </span>
                    <span
                      className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50"
                      style={{ fontSize: "0.65rem", fontWeight: 700 }}
                    >
                      {job.location}
                    </span>
                    <span
                      className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50"
                      style={{ fontSize: "0.65rem", fontWeight: 700 }}
                    >
                      {job.jobType}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-accent uppercase tracking-[0.1em] shrink-0 group-hover:gap-3 transition-all">
                  <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                    View role
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="p-16 text-center">
            <p className="text-muted">No open positions at this time.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-primary text-secondary">
        <div className="p-8 md:p-12 lg:p-20 text-center flex flex-col items-center">
          <p
            className="uppercase tracking-[0.2em] text-secondary/40 mb-6"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            Don&apos;t see your role?
          </p>
          <h2 className="text-secondary mb-8">
            Reach out
            <br />
            anyway<span className="text-accent">.</span>
          </h2>
          <p
            className="text-secondary/60 mb-10 max-w-[400px]"
            style={{ lineHeight: 1.7 }}
          >
            We&apos;re always open to meeting exceptional people. Send us a note
            and tell us what you&apos;d build here.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors"
            style={{ fontSize: "0.75rem", fontWeight: 700 }}
          >
            {contactEmail}
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
