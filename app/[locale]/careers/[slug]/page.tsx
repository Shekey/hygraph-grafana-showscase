/**
 * Job Detail Page - Shows a single job listing by slug
 */

import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/utils/locale';
import { hygraphRequest } from '@/lib/hygraph/client';
import {
  GetJobDocument,
  GetJobsDocument,
  type GetJobQuery,
  type GetJobQueryVariables,
  type GetJobsQuery,
} from '@/types/hygraph-generated';
import JobDetailView from '@/components/pages/JobDetailView';
import type { Job, JobListItem } from '@/types/hybike';
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

  let job: Job | null = null;
  let otherJobs: JobListItem[] = [];

  try {
    const [jobData, allJobsData] = await Promise.all([
      hygraphRequest<GetJobQuery>(
        GetJobDocument,
        { slug } as GetJobQueryVariables,
      ),
      hygraphRequest<GetJobsQuery>(GetJobsDocument, {}),
    ]);

    job = jobData.job ?? null;
    otherJobs = (allJobsData.jobs ?? []).filter((j) => j.slug !== slug);
  } catch (error) {
    console.error('Failed to fetch job:', error);
  }

  if (!job) {
    notFound();
  }

  return <JobDetailView job={job} otherJobs={otherJobs} />;
}

export const revalidate = 300;
