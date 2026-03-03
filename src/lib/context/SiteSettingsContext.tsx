'use client';

import { createContext, useContext } from 'react';
import type { GetSiteSettingsQuery } from '@/types/hygraph-generated';

type SiteSettings = GetSiteSettingsQuery['allSiteSettings'][0] | null;

const SiteSettingsContext = createContext<SiteSettings>(null);

export function SiteSettingsProvider({
  children,
  siteSettings,
}: {
  children: React.ReactNode;
  siteSettings: SiteSettings;
}) {
  return (
    <SiteSettingsContext.Provider value={siteSettings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
