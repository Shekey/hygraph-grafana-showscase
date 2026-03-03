"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { useParams } from "next/navigation";
import { useSiteSettings } from "@/lib/context/SiteSettingsContext";
import type { Job } from "@/types/hybike";

interface JobDetailViewProps {
  job: Job;
  otherJobs: Job[];
}

export default function JobDetailView({ job, otherJobs }: JobDetailViewProps) {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const siteSettings = useSiteSettings();
  const contactEmail = siteSettings?.contactEmail;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-primary">
        <div className="p-6 md:p-8 lg:px-16">
          <Link
            href={`/${locale}/careers`}
            className="inline-flex items-center gap-2 text-muted uppercase tracking-[0.1em] hover:text-primary transition-colors"
            style={{ fontSize: "0.7rem", fontWeight: 700 }}
          >
            <ArrowLeft size={13} />
            All positions
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary">
            <p
              className="uppercase tracking-[0.2em] text-muted mb-6"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              {job.department}
            </p>
            <h1>
              {job.title}
              <span className="text-accent">.</span>
            </h1>
            <p
              className="text-muted mt-8 max-w-[560px]"
              style={{ lineHeight: 1.7 }}
            >
              {job.summary}
            </p>
          </div>

          {/* Meta */}
          <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p
                    className="uppercase tracking-[0.15em] text-muted mb-1"
                    style={{ fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    Location
                  </p>
                  <p style={{ fontWeight: 600 }}>{job.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p
                    className="uppercase tracking-[0.15em] text-muted mb-1"
                    style={{ fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    Type
                  </p>
                  <p style={{ fontWeight: 600 }}>{job.jobType}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p
                    className="uppercase tracking-[0.15em] text-muted mb-1"
                    style={{ fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    Department
                  </p>
                  <p style={{ fontWeight: 600 }}>{job.department}</p>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${contactEmail}?subject=Application — ${job.title}`}
              className="inline-flex items-center justify-center gap-3 bg-primary text-secondary px-8 py-5 uppercase tracking-[0.1em] hover:bg-accent transition-colors w-full"
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              Apply now
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-primary">
            {/* Description */}
            {job.description?.html && (
              <div className="px-8 md:px-12 lg:px-16 py-6 md:py-8">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-6"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  About the role
                </p>
                <div
                  className="text-muted prose max-w-none"
                  style={{ lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: job.description.html }}
                />
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="px-8 md:px-12 lg:px-16 py-6 md:py-8">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-6"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  What you&apos;ll do
                </p>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="text-accent shrink-0 mt-0.5"
                        style={{
                          fontWeight: 900,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.75rem",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted" style={{ lineHeight: 1.7 }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="p-8 md:p-12 lg:p-16">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-6"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  What we need
                </p>
                <ul className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <p className="text-muted" style={{ lineHeight: 1.7 }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 p-8 md:p-12 lg:p-16">
            {/* Nice to have */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <div className="mb-12">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-6"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  Nice to have
                </p>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="border border-primary p-4">
                      <p
                        className="text-muted"
                        style={{ lineHeight: 1.6, fontSize: "0.9rem" }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Other roles */}
            {otherJobs.length > 0 && (
              <div>
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-4"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  Other positions
                </p>
                <div className="space-y-2">
                  {otherJobs.map((other) => (
                    <Link
                      key={other.id}
                      href={`/${locale}/careers/${other.slug}`}
                      className="flex items-center justify-between p-4 border border-primary hover:bg-primary hover:text-secondary transition-colors group"
                    >
                      <div>
                        <p style={{ fontWeight: 600, fontSize: "0.85rem" }}>
                          {other.title}
                        </p>
                        <p
                          className="text-muted group-hover:text-secondary/50 uppercase tracking-[0.1em]"
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            marginTop: "2px",
                          }}
                        >
                          {other.department}
                        </p>
                      </div>
                      <ArrowRight size={13} className="text-accent shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-primary text-secondary">
        <div className="p-8 md:p-12 lg:p-20 text-center flex flex-col items-center">
          <p
            className="uppercase tracking-[0.2em] text-secondary/40 mb-6"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            Interested?
          </p>
          <h2 className="text-secondary mb-8">
            Apply for
            <br />
            this role<span className="text-accent">.</span>
          </h2>
          <a
            href={`mailto:careers@hybikes.com?subject=Application — ${job.title}`}
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors"
            style={{ fontSize: "0.75rem", fontWeight: 700 }}
          >
            Send application
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
