# HyBike Frontend - Next.js with Hygraph CMS

A Next.js reference implementation built on Hygraph — demonstrating how structured, relational content powers real-world digital experiences. From modular page composition and content federation to audience personalization, localization, and live preview, every feature is driven from the CMS.

## Key features

✅ **Dynamic Theming** - Brand color from Hygraph drives entire site theme via CSS variables

✅ **Multi-locale** - 2 languages (en, de) with path-based routing

✅ **Live Preview** - Real-time content updates with Hygraph SDK

✅ **Content Federation** - Product data from BigCommerce/PIM

✅ **Type-Safe** - Strict TypeScript with GraphQL codegen

✅ **Server Components** - Fast rendering with Next.js

## Getting started

### Prerequisites

- Node.js 20.9+
- Access to Hygraph Showcase project
- [Environment Variables](#environment-variables)

### Installation

Install dependencies

```bash
npm install
```

Copy environment variables

```bash
cp .env.local.example .env.local
```

Edit .env.local with your Hygraph credentials

### Environment variables

| Env Variable                           | Description                         | Where to find it                                                                       |
| -------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` | Hygraph Content API URL             | Project Settings → API Access → Content API                                            |
| `HYGRAPH_PREVIEW_TOKEN`                | Token for fetching draft content    | Project Settings → API Access → Permanent Auth Tokens (create with "Read" permissions) |
| `HYGRAPH_PREVIEW_SECRET`               | Secret to validate preview requests | Any secure random string                                                               |
| `NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT`     | Force draft content in all requests | Set to `true` in development to skip publishing                                        |
| `NEXT_PUBLIC_SITE_URL`                 | Public URL of the site              | `http://localhost:3000` locally, your domain in production                             |

### Development

Start dev server:

```bash
npm run dev
```

Open http://localhost:3000

### Build & deploy

Type check:

```bash
npm run type-check
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project structure

```
hygraph-showcase/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Locale-specific routes
│   │   ├── layout.tsx            # Locale layout with Nav/Footer
│   │   ├── page.tsx              # Homepage
│   │   ├── [slug]/page.tsx       # Dynamic pages
│   │   ├── product/[slug]/       # Product detail pages
│   │   ├── blog/[slug]/          # Article/blog pages
│   │   └── careers/[slug]/       # Job listing pages
│   ├── api/                      # API routes
│   │   ├── preview/route.ts      # Enable preview mode
│   │   ├── exit-preview/route.ts # Disable preview mode
│   │   ├── products/route.ts     # Products API (BigCommerce)
│   │   └── catalog/products/     # Catalog products endpoint
│   ├── layout.tsx                # Root layout with theme injection ⭐
│   └── not-found.tsx             # 404 page
├── src/
│   ├── components/
│   │   ├── ui/                   # UI components (Button, Navigation, Footer, etc.)
│   │   ├── sections/             # Page sections (Hero, Features, etc.)
│   │   ├── pages/                # Page-level view components
│   │   └── providers/            # ThemeProvider, LivePreview wrapper
│   ├── graphql/
│   │   └── queries/              # GraphQL query files (.gql)
│   ├── lib/
│   │   ├── hygraph/
│   │   │   ├── client.ts         # GraphQL client
│   │   │   └── endpoint.ts       # Endpoint validation
│   │   ├── utils/
│   │   │   ├── theme.ts          # Theme utilities ⭐
│   │   │   ├── locale.ts         # Locale utilities
│   │   │   └── preview.ts        # Preview mode utilities
│   │   └── context/              # React context (Segment, SiteSettings)
│   ├── types/                    # TypeScript types
│   └── styles/
│       └── globals.css           # Tailwind + global styles
├── middleware.ts                 # Locale routing
├── next.config.ts                # Next.js config ⭐
└── codegen.yml                   # GraphQL Code Generator config
```

## Dynamic theme

### 1. Root layout fetches brand color

```typescript
// app/layout.tsx
export default async function RootLayout({ children }) {
  const data = await hygraphRequest<GetSiteSettingsQuery>(
    GetSiteSettingsDocument,
    { locale: "en" }
  );

  const settings = data.allSiteSettings?.[0];
  const brandColor = settings?.brandColor?.hex || "#FF4F00";

  // Generate CSS variables
  const themeVars = generateThemeVariables(brandColor);
  const themeCSS = themeVariablesToCSS(themeVars);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root { ${themeCSS} }` }} />
      </head>
      <body>
        <ThemeProvider>
          <LivePreview>{children}</LivePreview>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Result**: Change `brandColor` in Hygraph → Site Settings and entire site theme updates instantly (no rebuild needed)

### 2. Tailwind references CSS variables

Tailwind v4 uses CSS-based configuration via `@theme` in `src/styles/globals.css`:

```css
@theme {
  --color-brand: hsl(var(--brand-hsl));
  --color-brand-hover: hsl(var(--brand-hover-hsl));
  --color-brand-active: hsl(var(--brand-active-hsl));
  --color-brand-light: hsl(var(--brand-light-hsl));
  --color-brand-dark: hsl(var(--brand-dark-hsl));
}
```

### 3. Components use Tailwind classes

```typescript
// src/components/ui/Button.tsx
<button className="bg-brand hover:bg-brand-hover text-white">{label}</button>
```

**Result**: Update `SiteSettings.brandColor` in Hygraph → All buttons, links, and branded elements update to new color

## Multi-locale support

Supports 2 locales with fallback chain:

- **English (en)** - Primary locale
- **German (de)**

### URL structure

- `/` → Redirects to `/en` (middleware)
- `/en/home` → English homepage
- `/de/home` → German homepage

### Query pattern

All Hygraph queries use locale fallback:

```graphql
query GetPage($slug: String!, $locale: Locale!) {
  page(where: { slug: $slug }, locales: [$locale, en]) {
    # Falls back to English if translation missing
  }
}
```

## Audience segmentation

The `SegmentSwitcher` component allows toggling between audience segments (e.g., consumer vs. business). Segment data is fetched from Hygraph via `Segment.gql` and managed through `SegmentContext`.

## Live preview mode

Enable real-time content editing from Hygraph:

1. **In Hygraph**: Click "Preview" on any content entry
2. **Opens**: `http://localhost:3000/api/preview?secret=XXX&slug=home&locale=en`
3. **Sets**: Preview cookie with locale/slug data
4. **Result**: Content updates in real-time as you edit in Hygraph

## Content federation (BigCommerce)

Each product in Hygraph has an `externalProductId` field that maps to a product defined in BigCommerce. The site uses a mocked BigCommerce API backed by a local JSON file:

- Product content (name, images, specs, features) is managed in Hygraph
- Pricing, inventory, and variant data is fetched from the mock BigCommerce endpoint
- Mock product data lives in `app/catalog/products/products.json`
- The mock API is served via `app/catalog/products/route.ts`, which mirrors the BigCommerce REST API response shape

Replacing the mock with a real BigCommerce store only requires pointing the endpoint at the live BigCommerce API.

## Page sections

All pages use flexible section composition:

### Available sections

- **HeroSection** - Full-width banner with background image, headline, CTAs
- **FeatureGrid** - 2/3/4 column grid of features with icons
- **CTABlock** - Conversion-focused section with headline + buttons
- **ProductShowcase** - Product grid with federated data
- **ArticleList** - Blog/news article listing
- **FeaturedArticle** - Highlighted single article
- **EditorialSection** - Rich editorial content block
- **ContactSection** - Contact form/info section
- **JobList** - Career/job listings
- **StatsBar** - Key statistics display
- **Timeline** - Chronological content display
- **PageHeader** - Page title and intro block

### Section rendering

Pages fetch sections as union field:

```typescript
// app/[locale]/page.tsx
{
  data.page.sections.map((section) => {
    if (isHeroSection(section)) return <HeroSection {...section} />;
    if (isFeatureGrid(section)) return <FeatureGrid {...section} />;
    // ...
  });
}
```

Type-safe with custom type guards

## GraphQL queries

All queries in `src/graphql/queries/`:

- `SiteSettings.gql` - Global settings (brandColor, logo, social links)
- `Navigation.gql` - Site navigation (main nav, footer nav)
- `Page.gql` - Page content with sections
- `Products.gql` - Product listings
- `Product.gql` - Single product detail
- `Article.gql` - Blog article content
- `Job.gql` - Job/career listings
- `Segment.gql` - Audience segmentation data

### GraphQL code generation

Generate TypeScript types from schema:

```bash
npm run codegen
```

Outputs to `src/types/hygraph-generated.ts`

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Other platforms

Build output uses standalone mode:

```bash
npm run build
npm start
```

Requires Node.js 20.9+ runtime

## Troubleshooting

### Theme not updating

**Problem**: Changed `brandColor` in Hygraph but site theme unchanged

**Solutions**:

- In dev mode: Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)
- In production: Wait 5 minutes for cache revalidation
- In preview mode: Should update immediately

### Type errors after schema changes

**Problem**: TypeScript errors after updating Hygraph schema

**Solution**:

```bash
npm run codegen  # Regenerate types
npm run type-check  # Verify
```

### Preview mode not working

**Problem**: Preview link shows published content, not draft

**Solutions**:

- Verify `HYGRAPH_PREVIEW_SECRET` matches query param `?secret=XXX`
- Check preview cookie is set (DevTools → Application → Cookies)
- Ensure `HYGRAPH_PREVIEW_TOKEN` has read permissions

### Build errors

**Problem**: Build fails with GraphQL errors

**Solution**:

- Verify `.env.local` has correct `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT`
- Check Hygraph API is accessible
- Ensure all content is published (or use preview token)

## License

MIT

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Hygraph Docs](https://hygraph.com/docs)
- [Hygraph Live Preview SDK](https://hygraph.com/docs/guides/content/preview)
- [Tailwind CSS](https://tailwindcss.com)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
