/**
 * Job Detail Page - Shows a single job listing by slug
 */

import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/utils/locale';
import { hygraphRequest } from '@/lib/hygraph/client';
import { recordPageRequest } from '@/lib/otel-custom-metrics';
import {
  GetJobDocument,
  GetJobsDocument,
  type GetJobQuery,
  type GetJobQueryVariables,
  type GetJobsQuery,
} from '@/types/hygraph-generated';
import JobDetailView from '@/components/pages/JobDetailView';
import type { Metadata } from 'next';

interface JobPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await hygraphRequest<GetJobQuery>(
      GetJobDocument,
      { slug } as GetJobQueryVariables,
    );
    const job = data.job;
    if (!job) return { title: 'Position Not Found' };

    return {
      title: `${job.title} | HyBikes Careers`,
      description: job.summary,
    };
  } catch {
    return { title: 'Careers | HyBikes' };
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t0 = performance.now();

  const [jobData, allJobsData] = await Promise.all([
    hygraphRequest<GetJobQuery>(GetJobDocument, { slug } as GetJobQueryVariables),
    hygraphRequest<GetJobsQuery>(GetJobsDocument, {}),
  ]);

  recordPageRequest(`/[locale]/careers/[slug]`, Math.round(performance.now() - t0), 200);

  const job = jobData.job;
  if (!job) {
    notFound();
  }

  const otherJobs = (allJobsData.jobs ?? []).filter((j) => j.slug !== slug);

  return <JobDetailView job={job} otherJobs={otherJobs} />;
}

export const revalidate = 300;
