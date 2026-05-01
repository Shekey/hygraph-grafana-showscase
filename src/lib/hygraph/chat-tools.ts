/**
 * Hygraph tools for Gemini chat function calling
 * Enables the AI advisor to fetch live product, article, and job data
 */

import type {
  FunctionDeclarationsTool,
  FunctionDeclaration,
  FunctionDeclarationSchemaProperty,
} from "@google-cloud/vertexai";
import { SchemaType } from "@google-cloud/vertexai";
import { createHygraphClient } from "@/lib/hygraph/client";
import type {
  GetProductsQuery,
  GetProductBySlugQuery,
  GetArticlesQuery,
  GetJobsQuery,
  Locale,
} from "@/types/hygraph-generated";

const GET_PRODUCTS_QUERY = /* GraphQL */ `
  query GetProductsForChat($locale: Locale!) {
    products(locales: [$locale, en], stage: DRAFT, first: 20) {
      slug
      name
      tagline
      category {
        value
      }
      productFeatures
      featured
      specifications {
        motor
        battery
        range
        weight
        frame
        brakes
        suspension
        wheelSize
      }
      externalProduct {
        data {
          calculated_price
          sale_price
          inventory_level
          availability
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_SLUG_QUERY = /* GraphQL */ `
  query GetProductBySlugForChat($slug: String!, $locale: Locale!) {
    product(where: { slug: $slug }, locales: [$locale, en], stage: DRAFT) {
      slug
      name
      tagline
      description {
        text
      }
      category {
        value
      }
      productFeatures
      featured
      specifications {
        motor
        battery
        range
        weight
        frame
        brakes
        suspension
        wheelSize
        gears
        groupset
        wheels
      }
      externalProduct {
        data {
          calculated_price
          sale_price
          inventory_level
          availability
          variants {
            calculated_price
            option_values {
              label
              option_display_name
            }
          }
        }
      }
    }
  }
`;

const GET_ARTICLES_QUERY = /* GraphQL */ `
  query GetArticlesForChat($locale: Locale!) {
    articles(
      locales: [$locale, en]
      stage: DRAFT
      orderBy: publishedDate_DESC
      first: 50
    ) {
      slug
      title
      category
      publishedDate
      readTime
      summary
    }
  }
`;

const GET_JOBS_QUERY = /* GraphQL */ `
  query GetJobsForChat {
    jobs(stage: DRAFT, first: 20) {
      slug
      title
      department
      location
      jobType
      summary
    }
  }
`;

const declarations: FunctionDeclaration[] = [
  {
    name: "get_products",
    description:
      "Lists all HyBike e-bike products with name, slug, category, specs, pricing, and availability. Call this when the user asks about the product range, model comparisons, or what bikes are available.",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        locale: {
          type: SchemaType.STRING,
          description:
            'BCP-47 locale code. Use "en" by default, "de" for German.',
          enum: ["en", "de"],
        } satisfies FunctionDeclarationSchemaProperty,
      },
      required: ["locale"],
    },
  },
  {
    name: "get_product_by_slug",
    description:
      "Fetches full detail for a single HyBike product by its URL slug. Use after get_products to look up a specific model or when the user names a product and you already know its slug.",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        slug: {
          type: SchemaType.STRING,
          description: 'The product slug (e.g. "hybike-trail-pro").',
        } satisfies FunctionDeclarationSchemaProperty,
        locale: {
          type: SchemaType.STRING,
          description: 'BCP-47 locale code. Use "en" by default.',
          enum: ["en", "de"],
        } satisfies FunctionDeclarationSchemaProperty,
      },
      required: ["slug", "locale"],
    },
  },
  {
    name: "get_articles",
    description:
      "Lists HyBike blog articles with title, summary, category, and publish date. Call this when the user asks about news, tips, maintenance guides, or editorial content.",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        locale: {
          type: SchemaType.STRING,
          description: 'BCP-47 locale code. Use "en" by default.',
          enum: ["en", "de"],
        } satisfies FunctionDeclarationSchemaProperty,
      },
      required: ["locale"],
    },
  },
  {
    name: "get_jobs",
    description:
      "Lists all open job positions at HyBike including title, department, location, job type, and summary. Call when the user asks about careers, working at HyBike, or job openings.",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {},
      required: [],
    },
  },
];

export const HYGRAPH_TOOLS: FunctionDeclarationsTool[] = [
  { functionDeclarations: declarations },
];

type ProductsResult = { products: GetProductsQuery["products"] };
type ProductBySlugResult = { product: GetProductBySlugQuery["product"] };
type ArticlesResult = { articles: GetArticlesQuery["articles"] };
type JobsResult = { jobs: GetJobsQuery["jobs"] };

export type ToolResultPayload =
  | ProductsResult
  | ProductBySlugResult
  | ArticlesResult
  | JobsResult
  | { error: string };

export async function executeHygraphTool(
  name: string,
  args: Record<string, unknown>
): Promise<ToolResultPayload> {
  const client = createHygraphClient();
  const locale = (args.locale as Locale | undefined) ?? "en";

  switch (name) {
    case "get_products": {
      const data = await client.request<ProductsResult>(GET_PRODUCTS_QUERY, {
        locale,
      });
      return data;
    }
    case "get_product_by_slug": {
      const slug = args.slug as string;
      if (!slug) return { error: "slug is required" };
      const data = await client.request<ProductBySlugResult>(
        GET_PRODUCT_BY_SLUG_QUERY,
        { slug, locale }
      );
      return data;
    }
    case "get_articles": {
      const data = await client.request<ArticlesResult>(GET_ARTICLES_QUERY, {
        locale,
      });
      return data;
    }
    case "get_jobs": {
      const data = await client.request<JobsResult>(GET_JOBS_QUERY);
      return data;
    }
    default:
      return { error: `Unknown tool: ${name}` };
  }
}
