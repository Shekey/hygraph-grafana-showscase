import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  Hex: { input: string; output: string; }
  Json: { input: string; output: string; }
  Long: { input: number; output: number; }
  RGBAHue: { input: number; output: number; }
  RGBATransparency: { input: number; output: number; }
  RichTextAST: { input: string; output: string; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Articles with rich text body */
export type Article = Entity & Node & {
  __typename?: 'Article';
  body: RichText;
  category: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Article>;
  /** List of Article versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Article>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  publishedDate: Scalars['Date']['output'];
  readTime?: Maybe<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Articles with rich text body */
export type ArticleCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Articles with rich text body */
export type ArticleCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Articles with rich text body */
export type ArticleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Articles with rich text body */
export type ArticleHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Articles with rich text body */
export type ArticleImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Articles with rich text body */
export type ArticleLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Articles with rich text body */
export type ArticlePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Articles with rich text body */
export type ArticlePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Articles with rich text body */
export type ArticleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Articles with rich text body */
export type ArticleUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Articles with rich text body */
export type ArticleUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ArticleWhereUniqueInput;
};

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ArticleCreateInput = {
  body: Scalars['RichTextAST']['input'];
  category: Scalars['String']['input'];
  cmm8y2yzs0hd307ui5smd13ya?: InputMaybe<FeaturedArticleCreateManyInlineInput>;
  cmm8z85sg001u08vzfkqu2nyw?: InputMaybe<ArticleListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ArticleCreateLocalizationsInput>;
  publishedDate: Scalars['Date']['input'];
  readTime?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  /** summary input for default locale (en) */
  summary: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  summary: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleCreateLocalizationInput = {
  /** Localization input */
  data: ArticleCreateLocalizationDataInput;
  locale: Locale;
};

export type ArticleCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ArticleCreateLocalizationInput>>;
};

export type ArticleCreateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  /** Create and connect multiple existing Article documents */
  create?: InputMaybe<Array<ArticleCreateInput>>;
};

export type ArticleCreateOneInlineInput = {
  /** Connect one existing Article document */
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  /** Create and connect one Article document */
  create?: InputMaybe<ArticleCreateInput>;
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Article;
};

export type ArticleList = Entity & {
  __typename?: 'ArticleList';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ArticleList>;
  posts: Array<Article>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleListLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type ArticleListPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type ArticleListUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ArticleListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ArticleListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ArticleListConnection = {
  __typename?: 'ArticleListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ArticleListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ArticleListCreateInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ArticleListCreateLocalizationsInput>;
  posts?: InputMaybe<ArticleCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleListCreateLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ArticleListCreateLocalizationInput = {
  /** Localization input */
  data: ArticleListCreateLocalizationDataInput;
  locale: Locale;
};

export type ArticleListCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ArticleListCreateLocalizationInput>>;
};

export type ArticleListCreateManyInlineInput = {
  /** Create and connect multiple existing ArticleList documents */
  create?: InputMaybe<Array<ArticleListCreateInput>>;
};

export type ArticleListCreateOneInlineInput = {
  /** Create and connect one ArticleList document */
  create?: InputMaybe<ArticleListCreateInput>;
};

export type ArticleListCreateWithPositionInput = {
  /** Document to create */
  data: ArticleListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ArticleListEdge = {
  __typename?: 'ArticleListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ArticleList;
};

/** Identifies documents */
export type ArticleListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  posts_every?: InputMaybe<ArticleWhereInput>;
  posts_none?: InputMaybe<ArticleWhereInput>;
  posts_some?: InputMaybe<ArticleWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type ArticleListOrderByInput =
  | 'headline_ASC'
  | 'headline_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ArticleListParent = Page | PageVariant;

export type ArticleListParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type ArticleListParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type ArticleListParentCreateManyInlineInput = {
  /** Connect multiple existing ArticleListParent documents */
  connect?: InputMaybe<Array<ArticleListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ArticleListParent documents */
  create?: InputMaybe<Array<ArticleListParentCreateInput>>;
};

export type ArticleListParentCreateOneInlineInput = {
  /** Connect one existing ArticleListParent document */
  connect?: InputMaybe<ArticleListParentWhereUniqueInput>;
  /** Create and connect one ArticleListParent document */
  create?: InputMaybe<ArticleListParentCreateInput>;
};

export type ArticleListParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type ArticleListParentUpdateManyInlineInput = {
  /** Connect multiple existing ArticleListParent documents */
  connect?: InputMaybe<Array<ArticleListParentConnectInput>>;
  /** Create and connect multiple ArticleListParent documents */
  create?: InputMaybe<Array<ArticleListParentCreateInput>>;
  /** Delete multiple ArticleListParent documents */
  delete?: InputMaybe<Array<ArticleListParentWhereUniqueInput>>;
  /** Disconnect multiple ArticleListParent documents */
  disconnect?: InputMaybe<Array<ArticleListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ArticleListParent documents */
  set?: InputMaybe<Array<ArticleListParentWhereUniqueInput>>;
  /** Update multiple ArticleListParent documents */
  update?: InputMaybe<Array<ArticleListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ArticleListParent documents */
  upsert?: InputMaybe<Array<ArticleListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ArticleListParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type ArticleListParentUpdateOneInlineInput = {
  /** Connect existing ArticleListParent document */
  connect?: InputMaybe<ArticleListParentWhereUniqueInput>;
  /** Create and connect one ArticleListParent document */
  create?: InputMaybe<ArticleListParentCreateInput>;
  /** Delete currently connected ArticleListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ArticleListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ArticleListParent document */
  update?: InputMaybe<ArticleListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ArticleListParent document */
  upsert?: InputMaybe<ArticleListParentUpsertWithNestedWhereUniqueInput>;
};

export type ArticleListParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type ArticleListParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type ArticleListParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type ArticleListParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type ArticleListUpdateInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ArticleListUpdateLocalizationsInput>;
  posts?: InputMaybe<ArticleUpdateManyInlineInput>;
};

export type ArticleListUpdateLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleListUpdateLocalizationInput = {
  data: ArticleListUpdateLocalizationDataInput;
  locale: Locale;
};

export type ArticleListUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ArticleListCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ArticleListUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ArticleListUpsertLocalizationInput>>;
};

export type ArticleListUpdateManyInlineInput = {
  /** Create and connect multiple ArticleList component instances */
  create?: InputMaybe<Array<ArticleListCreateWithPositionInput>>;
  /** Delete multiple ArticleList documents */
  delete?: InputMaybe<Array<ArticleListWhereUniqueInput>>;
  /** Update multiple ArticleList component instances */
  update?: InputMaybe<Array<ArticleListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ArticleList component instances */
  upsert?: InputMaybe<Array<ArticleListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ArticleListUpdateManyInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ArticleListUpdateManyLocalizationsInput>;
};

export type ArticleListUpdateManyLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleListUpdateManyLocalizationInput = {
  data: ArticleListUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ArticleListUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ArticleListUpdateManyLocalizationInput>>;
};

export type ArticleListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ArticleListUpdateManyInput;
  /** Document search */
  where: ArticleListWhereInput;
};

export type ArticleListUpdateOneInlineInput = {
  /** Create and connect one ArticleList document */
  create?: InputMaybe<ArticleListCreateInput>;
  /** Delete currently connected ArticleList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ArticleList document */
  update?: InputMaybe<ArticleListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ArticleList document */
  upsert?: InputMaybe<ArticleListUpsertWithNestedWhereUniqueInput>;
};

export type ArticleListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ArticleListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ArticleListWhereUniqueInput;
};

export type ArticleListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ArticleListUpdateInput;
  /** Unique document search */
  where: ArticleListWhereUniqueInput;
};

export type ArticleListUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleListCreateInput;
  /** Update document if it exists */
  update: ArticleListUpdateInput;
};

export type ArticleListUpsertLocalizationInput = {
  create: ArticleListCreateLocalizationDataInput;
  locale: Locale;
  update: ArticleListUpdateLocalizationDataInput;
};

export type ArticleListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ArticleListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ArticleListWhereUniqueInput;
};

export type ArticleListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ArticleListUpsertInput;
  /** Unique document search */
  where: ArticleListWhereUniqueInput;
};

/** Identifies documents */
export type ArticleListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  posts_every?: InputMaybe<ArticleWhereInput>;
  posts_none?: InputMaybe<ArticleWhereInput>;
  posts_some?: InputMaybe<ArticleWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References ArticleList record uniquely */
export type ArticleListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  category_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ArticleWhereStageInput>;
  documentInStages_none?: InputMaybe<ArticleWhereStageInput>;
  documentInStages_some?: InputMaybe<ArticleWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  publishedDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  publishedDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  publishedDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  publishedDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  publishedDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  readTime?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readTime_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readTime_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readTime_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readTime_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readTime_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ArticleOrderByInput =
  | 'category_ASC'
  | 'category_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'publishedDate_ASC'
  | 'publishedDate_DESC'
  | 'readTime_ASC'
  | 'readTime_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'summary_ASC'
  | 'summary_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ArticleUpdateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  cmm8y2yzs0hd307ui5smd13ya?: InputMaybe<FeaturedArticleUpdateManyInlineInput>;
  cmm8z85sg001u08vzfkqu2nyw?: InputMaybe<ArticleListUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ArticleUpdateLocalizationsInput>;
  publishedDate?: InputMaybe<Scalars['Date']['input']>;
  readTime?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** summary input for default locale (en) */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleUpdateLocalizationDataInput = {
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleUpdateLocalizationInput = {
  data: ArticleUpdateLocalizationDataInput;
  locale: Locale;
};

export type ArticleUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ArticleCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ArticleUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ArticleUpsertLocalizationInput>>;
};

export type ArticleUpdateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: InputMaybe<Array<ArticleConnectInput>>;
  /** Create and connect multiple Article documents */
  create?: InputMaybe<Array<ArticleCreateInput>>;
  /** Delete multiple Article documents */
  delete?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  /** Disconnect multiple Article documents */
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Article documents */
  set?: InputMaybe<Array<ArticleWhereUniqueInput>>;
  /** Update multiple Article documents */
  update?: InputMaybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Article documents */
  upsert?: InputMaybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>;
};

export type ArticleUpdateManyInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ArticleUpdateManyLocalizationsInput>;
  publishedDate?: InputMaybe<Scalars['Date']['input']>;
  readTime?: InputMaybe<Scalars['String']['input']>;
  /** summary input for default locale (en) */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleUpdateManyLocalizationDataInput = {
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleUpdateManyLocalizationInput = {
  data: ArticleUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ArticleUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ArticleUpdateManyLocalizationInput>>;
};

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ArticleUpdateManyInput;
  /** Document search */
  where: ArticleWhereInput;
};

export type ArticleUpdateOneInlineInput = {
  /** Connect existing Article document */
  connect?: InputMaybe<ArticleWhereUniqueInput>;
  /** Create and connect one Article document */
  create?: InputMaybe<ArticleCreateInput>;
  /** Delete currently connected Article document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Article document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Article document */
  update?: InputMaybe<ArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Article document */
  upsert?: InputMaybe<ArticleUpsertWithNestedWhereUniqueInput>;
};

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ArticleUpdateInput;
  /** Unique document search */
  where: ArticleWhereUniqueInput;
};

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput;
  /** Update document if it exists */
  update: ArticleUpdateInput;
};

export type ArticleUpsertLocalizationInput = {
  create: ArticleCreateLocalizationDataInput;
  locale: Locale;
  update: ArticleUpdateLocalizationDataInput;
};

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ArticleUpsertInput;
  /** Unique document search */
  where: ArticleWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ArticleWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  category_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ArticleWhereStageInput>;
  documentInStages_none?: InputMaybe<ArticleWhereStageInput>;
  documentInStages_some?: InputMaybe<ArticleWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  publishedDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  publishedDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  publishedDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  publishedDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  publishedDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  readTime?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readTime_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readTime_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readTime_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readTime_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readTime_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  summary_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  summary_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  summary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  summary_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ArticleWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ArticleWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageArticle: Array<Article>;
  imageProduct: Array<Product>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageArticleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


/** Asset system model */
export type AssetImageProductArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ctaBlockBackgroundImage?: InputMaybe<CtaBlockCreateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  heroSectionBackgroundMedia?: InputMaybe<HeroSectionCreateManyInlineInput>;
  imageArticle?: InputMaybe<ArticleCreateManyInlineInput>;
  imageEditorialSection?: InputMaybe<EditorialSectionCreateManyInlineInput>;
  imageProduct?: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  seoOgImage?: InputMaybe<SeoCreateManyInlineInput>;
  siteSettingsDefaultMetaImage?: InputMaybe<SiteSettingsCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageArticle_every?: InputMaybe<ArticleWhereInput>;
  imageArticle_none?: InputMaybe<ArticleWhereInput>;
  imageArticle_some?: InputMaybe<ArticleWhereInput>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export type AssetOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  ctaBlockBackgroundImage?: InputMaybe<CtaBlockUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  heroSectionBackgroundMedia?: InputMaybe<HeroSectionUpdateManyInlineInput>;
  imageArticle?: InputMaybe<ArticleUpdateManyInlineInput>;
  imageEditorialSection?: InputMaybe<EditorialSectionUpdateManyInlineInput>;
  imageProduct?: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  seoOgImage?: InputMaybe<SeoUpdateManyInlineInput>;
  siteSettingsDefaultMetaImage?: InputMaybe<SiteSettingsUpdateManyInlineInput>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export type AssetUploadStatus =
  | 'ASSET_CREATE_PENDING'
  | 'ASSET_ERROR_UPLOAD'
  | 'ASSET_UPDATE_PENDING'
  | 'ASSET_UPLOAD_COMPLETE';

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageArticle_every?: InputMaybe<ArticleWhereInput>;
  imageArticle_none?: InputMaybe<ArticleWhereInput>;
  imageArticle_some?: InputMaybe<ArticleWhereInput>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Target audience segments for content personalization */
export type Audience =
  | 'COMMUTERS'
  | 'DEFAULT'
  | 'SENIORS'
  | 'SPORTS_ENTHUSIASTS'
  | 'WEEKEND_ADVENTURERS';

/** Background color variants for CTA blocks */
export type BackgroundColor =
  | 'DARK'
  | 'LIGHT'
  | 'PRIMARY'
  | 'SECONDARY';

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Pagination and response metadata */
export type BigCommerce_BigCommerceMeta = {
  __typename?: 'BigCommerce_BigCommerceMeta';
  /** Pagination info */
  pagination?: Maybe<BigCommerce_BigCommercePagination>;
};

export type BigCommerce_BigCommerceOptionValue = {
  __typename?: 'BigCommerce_BigCommerceOptionValue';
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  option_display_name: Scalars['String']['output'];
  option_id: Scalars['Int']['output'];
};

/** Pagination details */
export type BigCommerce_BigCommercePagination = {
  __typename?: 'BigCommerce_BigCommercePagination';
  /** Number of items in current response */
  count: Scalars['Int']['output'];
  /** Current page number */
  current_page: Scalars['Int']['output'];
  /** Items per page */
  per_page: Scalars['Int']['output'];
  /** Total number of items */
  total: Scalars['Int']['output'];
  /** Total pages */
  total_pages: Scalars['Int']['output'];
};

/**
 * BigCommerce Product from Catalog API v3
 * Represents a base product with variants (color/size combinations)
 */
export type BigCommerce_BigCommerceProduct = {
  __typename?: 'BigCommerce_BigCommerceProduct';
  /** Availability status */
  availability: Scalars['String']['output'];
  /** Brand ID */
  brand_id?: Maybe<Scalars['Int']['output']>;
  /** Calculated price (includes sales, discounts) */
  calculated_price: Scalars['Float']['output'];
  /** Category IDs this product belongs to */
  categories: Array<Scalars['Int']['output']>;
  /** HTML description */
  description?: Maybe<Scalars['String']['output']>;
  /** Product ID from BigCommerce */
  id: Scalars['Int']['output'];
  /** Inventory level (base product) */
  inventory_level: Scalars['Int']['output'];
  /** Inventory tracking mode */
  inventory_tracking: Scalars['String']['output'];
  /** Product name */
  name: Scalars['String']['output'];
  /** Base price in dollars */
  price: Scalars['Float']['output'];
  /** Sale price if on sale */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** Base product SKU (e.g., VEL-AER7-700) */
  sku: Scalars['String']['output'];
  /** Product type (physical, digital) */
  type: Scalars['String']['output'];
  /** Product variants (color/size combinations) */
  variants: Array<BigCommerce_BigCommerceVariant>;
  /** Weight in kg */
  weight: Scalars['Float']['output'];
};

/**
 * BigCommerce Single Product Response
 * Wrapper for single product fetch
 */
export type BigCommerce_BigCommerceSingleProductResponse = {
  __typename?: 'BigCommerce_BigCommerceSingleProductResponse';
  /** Product data */
  data: BigCommerce_BigCommerceProduct;
  /** Metadata */
  meta: BigCommerce_BigCommerceMeta;
};

/**
 * BigCommerce Product Variant
 * Represents a specific color/size combination (e.g., Red + Small)
 */
export type BigCommerce_BigCommerceVariant = {
  __typename?: 'BigCommerce_BigCommerceVariant';
  /** Calculated price for this variant */
  calculated_price: Scalars['Float']['output'];
  /** Calculated weight for this variant */
  calculated_weight: Scalars['Float']['output'];
  /** Variant ID */
  id: Scalars['Int']['output'];
  /** Inventory level for this specific variant */
  inventory_level: Scalars['Int']['output'];
  /** Option values (Color: Red, Size: Small) */
  option_values: Array<BigCommerce_BigCommerceOptionValue>;
  /** Variant-specific price (or null if inheriting from product) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Parent product ID */
  product_id: Scalars['Int']['output'];
  /** Full variant SKU (e.g., VEL-AER7-700-RE-SM) */
  sku: Scalars['String']['output'];
};

/** Reusable button/link configuration */
export type Button = Entity & {
  __typename?: 'Button';
  /** Target URL (relative path or absolute URL) */
  href: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Button/link text */
  label: Scalars['String']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Button>;
  /** Open link in new browser tab */
  openInNewTab: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Button visual style (maps to design system) */
  variant: ButtonVariant;
};


/** Reusable button/link configuration */
export type ButtonLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Reusable button/link configuration */
export type ButtonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ButtonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ButtonWhereUniqueInput;
};

/** A connection to a list of items. */
export type ButtonConnection = {
  __typename?: 'ButtonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ButtonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ButtonCreateInput = {
  /** href input for default locale (en) */
  href: Scalars['String']['input'];
  /** label input for default locale (en) */
  label: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ButtonCreateLocalizationsInput>;
  openInNewTab: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variant: ButtonVariant;
};

export type ButtonCreateLocalizationDataInput = {
  href: Scalars['String']['input'];
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ButtonCreateLocalizationInput = {
  /** Localization input */
  data: ButtonCreateLocalizationDataInput;
  locale: Locale;
};

export type ButtonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ButtonCreateLocalizationInput>>;
};

export type ButtonCreateManyInlineInput = {
  /** Create and connect multiple existing Button documents */
  create?: InputMaybe<Array<ButtonCreateInput>>;
};

export type ButtonCreateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
};

export type ButtonCreateWithPositionInput = {
  /** Document to create */
  data: ButtonCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ButtonEdge = {
  __typename?: 'ButtonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Button;
};

/** Identifies documents */
export type ButtonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  variant?: InputMaybe<ButtonVariant>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<Array<InputMaybe<ButtonVariant>>>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<ButtonVariant>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<Array<InputMaybe<ButtonVariant>>>;
};

export type ButtonOrderByInput =
  | 'href_ASC'
  | 'href_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'label_ASC'
  | 'label_DESC'
  | 'openInNewTab_ASC'
  | 'openInNewTab_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'variant_ASC'
  | 'variant_DESC';

export type ButtonParent = CtaBlock | HeroSection;

export type ButtonParentConnectInput = {
  CTABlock?: InputMaybe<CtaBlockConnectInput>;
  HeroSection?: InputMaybe<HeroSectionConnectInput>;
};

export type ButtonParentCreateInput = {
  CTABlock?: InputMaybe<CtaBlockCreateInput>;
  HeroSection?: InputMaybe<HeroSectionCreateInput>;
};

export type ButtonParentCreateManyInlineInput = {
  /** Create and connect multiple existing ButtonParent documents */
  create?: InputMaybe<Array<ButtonParentCreateInput>>;
};

export type ButtonParentCreateOneInlineInput = {
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>;
};

export type ButtonParentCreateWithPositionInput = {
  CTABlock?: InputMaybe<CtaBlockCreateWithPositionInput>;
  HeroSection?: InputMaybe<HeroSectionCreateWithPositionInput>;
};

export type ButtonParentUpdateInput = {
  CTABlock?: InputMaybe<CtaBlockUpdateInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateInput>;
};

export type ButtonParentUpdateManyInlineInput = {
  /** Create and connect multiple ButtonParent component instances */
  create?: InputMaybe<Array<ButtonParentCreateWithPositionInput>>;
  /** Delete multiple ButtonParent documents */
  delete?: InputMaybe<Array<ButtonParentWhereUniqueInput>>;
  /** Update multiple ButtonParent component instances */
  update?: InputMaybe<Array<ButtonParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ButtonParent component instances */
  upsert?: InputMaybe<Array<ButtonParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ButtonParentUpdateManyWithNestedWhereInput = {
  CTABlock?: InputMaybe<CtaBlockUpdateManyWithNestedWhereInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateManyWithNestedWhereInput>;
};

export type ButtonParentUpdateOneInlineInput = {
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>;
  /** Delete currently connected ButtonParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ButtonParent document */
  update?: InputMaybe<ButtonParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ButtonParent document */
  upsert?: InputMaybe<ButtonParentUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueAndPositionInput = {
  CTABlock?: InputMaybe<CtaBlockUpdateWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpdateWithNestedWhereUniqueInput = {
  CTABlock?: InputMaybe<CtaBlockUpdateWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueAndPositionInput = {
  CTABlock?: InputMaybe<CtaBlockUpsertWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ButtonParentUpsertWithNestedWhereUniqueInput = {
  CTABlock?: InputMaybe<CtaBlockUpsertWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
};

export type ButtonParentWhereInput = {
  CTABlock?: InputMaybe<CtaBlockWhereInput>;
  HeroSection?: InputMaybe<HeroSectionWhereInput>;
};

export type ButtonParentWhereUniqueInput = {
  CTABlock?: InputMaybe<CtaBlockWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionWhereUniqueInput>;
};

export type ButtonUpdateInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ButtonUpdateLocalizationsInput>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<ButtonVariant>;
};

export type ButtonUpdateLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateLocalizationInput = {
  data: ButtonUpdateLocalizationDataInput;
  locale: Locale;
};

export type ButtonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ButtonCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ButtonUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ButtonUpsertLocalizationInput>>;
};

export type ButtonUpdateManyInlineInput = {
  /** Create and connect multiple Button component instances */
  create?: InputMaybe<Array<ButtonCreateWithPositionInput>>;
  /** Delete multiple Button documents */
  delete?: InputMaybe<Array<ButtonWhereUniqueInput>>;
  /** Update multiple Button component instances */
  update?: InputMaybe<Array<ButtonUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Button component instances */
  upsert?: InputMaybe<Array<ButtonUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ButtonUpdateManyInput = {
  /** href input for default locale (en) */
  href?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ButtonUpdateManyLocalizationsInput>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<ButtonVariant>;
};

export type ButtonUpdateManyLocalizationDataInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ButtonUpdateManyLocalizationInput = {
  data: ButtonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ButtonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ButtonUpdateManyLocalizationInput>>;
};

export type ButtonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ButtonUpdateManyInput;
  /** Document search */
  where: ButtonWhereInput;
};

export type ButtonUpdateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>;
  /** Delete currently connected Button document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Button document */
  update?: InputMaybe<ButtonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Button document */
  upsert?: InputMaybe<ButtonUpsertWithNestedWhereUniqueInput>;
};

export type ButtonUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ButtonUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ButtonUpdateInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpsertInput = {
  /** Create document if it didn't exist */
  create: ButtonCreateInput;
  /** Update document if it exists */
  update: ButtonUpdateInput;
};

export type ButtonUpsertLocalizationInput = {
  create: ButtonCreateLocalizationDataInput;
  locale: Locale;
  update: ButtonUpdateLocalizationDataInput;
};

export type ButtonUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ButtonUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ButtonWhereUniqueInput;
};

export type ButtonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ButtonUpsertInput;
  /** Unique document search */
  where: ButtonWhereUniqueInput;
};

/** Button styling variants */
export type ButtonVariant =
  | 'GHOST'
  | 'OUTLINE'
  | 'PRIMARY'
  | 'SECONDARY'
  | 'TEXT';

/** Identifies documents */
export type ButtonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  href_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  href_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  variant?: InputMaybe<ButtonVariant>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<Array<InputMaybe<ButtonVariant>>>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<ButtonVariant>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<Array<InputMaybe<ButtonVariant>>>;
};

/** References Button record uniquely */
export type ButtonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Conversion-focused section with headline and buttons */
export type CtaBlock = Entity & {
  __typename?: 'CTABlock';
  /** Background color variant */
  backgroundColor: BackgroundColor;
  /** Background image for CTA block (optional) */
  backgroundImage?: Maybe<Asset>;
  /** Supporting text with rich formatting (optional) */
  description?: Maybe<RichText>;
  /** CTA headline - key conversion message */
  headline: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CtaBlock>;
  /** Primary call-to-action button */
  primaryButton: Button;
  /** Secondary call-to-action button (optional) */
  secondaryButton?: Maybe<Button>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Conversion-focused section with headline and buttons */
export type CtaBlockBackgroundImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Conversion-focused section with headline and buttons */
export type CtaBlockLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Conversion-focused section with headline and buttons */
export type CtaBlockPrimaryButtonArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Conversion-focused section with headline and buttons */
export type CtaBlockSecondaryButtonArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Conversion-focused section with headline and buttons */
export type CtaBlockUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type CtaBlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CtaBlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type CtaBlockConnection = {
  __typename?: 'CTABlockConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CtaBlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CtaBlockCreateInput = {
  backgroundColor: BackgroundColor;
  backgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** headline input for default locale (en) */
  headline: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CtaBlockCreateLocalizationsInput>;
  primaryButton: ButtonCreateOneInlineInput;
  secondaryButton?: InputMaybe<ButtonCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaBlockCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  headline: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaBlockCreateLocalizationInput = {
  /** Localization input */
  data: CtaBlockCreateLocalizationDataInput;
  locale: Locale;
};

export type CtaBlockCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CtaBlockCreateLocalizationInput>>;
};

export type CtaBlockCreateManyInlineInput = {
  /** Create and connect multiple existing CTABlock documents */
  create?: InputMaybe<Array<CtaBlockCreateInput>>;
};

export type CtaBlockCreateOneInlineInput = {
  /** Create and connect one CTABlock document */
  create?: InputMaybe<CtaBlockCreateInput>;
};

export type CtaBlockCreateWithPositionInput = {
  /** Document to create */
  data: CtaBlockCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CtaBlockEdge = {
  __typename?: 'CTABlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CtaBlock;
};

/** Identifies documents */
export type CtaBlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<BackgroundColor>;
  /** All values that are contained in given list. */
  backgroundColor_in?: InputMaybe<Array<InputMaybe<BackgroundColor>>>;
  /** Any other value that exists and is not equal to the given value. */
  backgroundColor_not?: InputMaybe<BackgroundColor>;
  /** All values that are not contained in given list. */
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<BackgroundColor>>>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primaryButton?: InputMaybe<ButtonWhereInput>;
  secondaryButton?: InputMaybe<ButtonWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type CtaBlockOrderByInput =
  | 'backgroundColor_ASC'
  | 'backgroundColor_DESC'
  | 'headline_ASC'
  | 'headline_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type CtaBlockParent = Page | PageVariant;

export type CtaBlockParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type CtaBlockParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type CtaBlockParentCreateManyInlineInput = {
  /** Connect multiple existing CTABlockParent documents */
  connect?: InputMaybe<Array<CtaBlockParentWhereUniqueInput>>;
  /** Create and connect multiple existing CTABlockParent documents */
  create?: InputMaybe<Array<CtaBlockParentCreateInput>>;
};

export type CtaBlockParentCreateOneInlineInput = {
  /** Connect one existing CTABlockParent document */
  connect?: InputMaybe<CtaBlockParentWhereUniqueInput>;
  /** Create and connect one CTABlockParent document */
  create?: InputMaybe<CtaBlockParentCreateInput>;
};

export type CtaBlockParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type CtaBlockParentUpdateManyInlineInput = {
  /** Connect multiple existing CTABlockParent documents */
  connect?: InputMaybe<Array<CtaBlockParentConnectInput>>;
  /** Create and connect multiple CTABlockParent documents */
  create?: InputMaybe<Array<CtaBlockParentCreateInput>>;
  /** Delete multiple CTABlockParent documents */
  delete?: InputMaybe<Array<CtaBlockParentWhereUniqueInput>>;
  /** Disconnect multiple CTABlockParent documents */
  disconnect?: InputMaybe<Array<CtaBlockParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CTABlockParent documents */
  set?: InputMaybe<Array<CtaBlockParentWhereUniqueInput>>;
  /** Update multiple CTABlockParent documents */
  update?: InputMaybe<Array<CtaBlockParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CTABlockParent documents */
  upsert?: InputMaybe<Array<CtaBlockParentUpsertWithNestedWhereUniqueInput>>;
};

export type CtaBlockParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type CtaBlockParentUpdateOneInlineInput = {
  /** Connect existing CTABlockParent document */
  connect?: InputMaybe<CtaBlockParentWhereUniqueInput>;
  /** Create and connect one CTABlockParent document */
  create?: InputMaybe<CtaBlockParentCreateInput>;
  /** Delete currently connected CTABlockParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CTABlockParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CTABlockParent document */
  update?: InputMaybe<CtaBlockParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CTABlockParent document */
  upsert?: InputMaybe<CtaBlockParentUpsertWithNestedWhereUniqueInput>;
};

export type CtaBlockParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type CtaBlockParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type CtaBlockParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type CtaBlockParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type CtaBlockUpdateInput = {
  backgroundColor?: InputMaybe<BackgroundColor>;
  backgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CtaBlockUpdateLocalizationsInput>;
  primaryButton?: InputMaybe<ButtonUpdateOneInlineInput>;
  secondaryButton?: InputMaybe<ButtonUpdateOneInlineInput>;
};

export type CtaBlockUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBlockUpdateLocalizationInput = {
  data: CtaBlockUpdateLocalizationDataInput;
  locale: Locale;
};

export type CtaBlockUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CtaBlockCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CtaBlockUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CtaBlockUpsertLocalizationInput>>;
};

export type CtaBlockUpdateManyInlineInput = {
  /** Create and connect multiple CTABlock component instances */
  create?: InputMaybe<Array<CtaBlockCreateWithPositionInput>>;
  /** Delete multiple CTABlock documents */
  delete?: InputMaybe<Array<CtaBlockWhereUniqueInput>>;
  /** Update multiple CTABlock component instances */
  update?: InputMaybe<Array<CtaBlockUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CTABlock component instances */
  upsert?: InputMaybe<Array<CtaBlockUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaBlockUpdateManyInput = {
  backgroundColor?: InputMaybe<BackgroundColor>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CtaBlockUpdateManyLocalizationsInput>;
};

export type CtaBlockUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBlockUpdateManyLocalizationInput = {
  data: CtaBlockUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CtaBlockUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CtaBlockUpdateManyLocalizationInput>>;
};

export type CtaBlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CtaBlockUpdateManyInput;
  /** Document search */
  where: CtaBlockWhereInput;
};

export type CtaBlockUpdateOneInlineInput = {
  /** Create and connect one CTABlock document */
  create?: InputMaybe<CtaBlockCreateInput>;
  /** Delete currently connected CTABlock document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CTABlock document */
  update?: InputMaybe<CtaBlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CTABlock document */
  upsert?: InputMaybe<CtaBlockUpsertWithNestedWhereUniqueInput>;
};

export type CtaBlockUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CtaBlockUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaBlockWhereUniqueInput;
};

export type CtaBlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CtaBlockUpdateInput;
  /** Unique document search */
  where: CtaBlockWhereUniqueInput;
};

export type CtaBlockUpsertInput = {
  /** Create document if it didn't exist */
  create: CtaBlockCreateInput;
  /** Update document if it exists */
  update: CtaBlockUpdateInput;
};

export type CtaBlockUpsertLocalizationInput = {
  create: CtaBlockCreateLocalizationDataInput;
  locale: Locale;
  update: CtaBlockUpdateLocalizationDataInput;
};

export type CtaBlockUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CtaBlockUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaBlockWhereUniqueInput;
};

export type CtaBlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CtaBlockUpsertInput;
  /** Unique document search */
  where: CtaBlockWhereUniqueInput;
};

/** Identifies documents */
export type CtaBlockWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<BackgroundColor>;
  /** All values that are contained in given list. */
  backgroundColor_in?: InputMaybe<Array<InputMaybe<BackgroundColor>>>;
  /** Any other value that exists and is not equal to the given value. */
  backgroundColor_not?: InputMaybe<BackgroundColor>;
  /** All values that are not contained in given list. */
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<BackgroundColor>>>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primaryButton?: InputMaybe<ButtonWhereInput>;
  secondaryButton?: InputMaybe<ButtonWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References CTABlock record uniquely */
export type CtaBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contact form with office locations and localized form labels */
export type ContactSection = Entity & {
  __typename?: 'ContactSection';
  emailLabel?: Maybe<Scalars['String']['output']>;
  emailPlaceholder?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ContactSection>;
  messageLabel?: Maybe<Scalars['String']['output']>;
  messagePlaceholder?: Maybe<Scalars['String']['output']>;
  nameLabel?: Maybe<Scalars['String']['output']>;
  namePlaceholder?: Maybe<Scalars['String']['output']>;
  offices: Array<Office>;
  /** System stage field */
  stage: Stage;
  submitLabel?: Maybe<Scalars['String']['output']>;
  successBody?: Maybe<Scalars['String']['output']>;
  successHeadline?: Maybe<Scalars['String']['output']>;
  topicLabel?: Maybe<Scalars['String']['output']>;
  topicPlaceholder?: Maybe<Scalars['String']['output']>;
  topics: Array<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Contact form with office locations and localized form labels */
export type ContactSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Contact form with office locations and localized form labels */
export type ContactSectionOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OfficeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OfficeWhereInput>;
};


/** Contact form with office locations and localized form labels */
export type ContactSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ContactSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactSectionConnection = {
  __typename?: 'ContactSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactSectionCreateInput = {
  /** emailLabel input for default locale (en) */
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  /** emailPlaceholder input for default locale (en) */
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ContactSectionCreateLocalizationsInput>;
  /** messageLabel input for default locale (en) */
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  /** messagePlaceholder input for default locale (en) */
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** nameLabel input for default locale (en) */
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  /** namePlaceholder input for default locale (en) */
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  offices: OfficeCreateManyInlineInput;
  /** submitLabel input for default locale (en) */
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  /** successBody input for default locale (en) */
  successBody?: InputMaybe<Scalars['String']['input']>;
  /** successHeadline input for default locale (en) */
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  /** topicLabel input for default locale (en) */
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  /** topicPlaceholder input for default locale (en) */
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** topics input for default locale (en) */
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactSectionCreateLocalizationDataInput = {
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  successBody?: InputMaybe<Scalars['String']['input']>;
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactSectionCreateLocalizationInput = {
  /** Localization input */
  data: ContactSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ContactSectionCreateLocalizationInput>>;
};

export type ContactSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ContactSection documents */
  create?: InputMaybe<Array<ContactSectionCreateInput>>;
};

export type ContactSectionCreateOneInlineInput = {
  /** Create and connect one ContactSection document */
  create?: InputMaybe<ContactSectionCreateInput>;
};

export type ContactSectionCreateWithPositionInput = {
  /** Document to create */
  data: ContactSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactSectionEdge = {
  __typename?: 'ContactSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContactSection;
};

/** Identifies documents */
export type ContactSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  offices_every?: InputMaybe<OfficeWhereInput>;
  offices_none?: InputMaybe<OfficeWhereInput>;
  offices_some?: InputMaybe<OfficeWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type ContactSectionOrderByInput =
  | 'emailLabel_ASC'
  | 'emailLabel_DESC'
  | 'emailPlaceholder_ASC'
  | 'emailPlaceholder_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'messageLabel_ASC'
  | 'messageLabel_DESC'
  | 'messagePlaceholder_ASC'
  | 'messagePlaceholder_DESC'
  | 'nameLabel_ASC'
  | 'nameLabel_DESC'
  | 'namePlaceholder_ASC'
  | 'namePlaceholder_DESC'
  | 'submitLabel_ASC'
  | 'submitLabel_DESC'
  | 'successBody_ASC'
  | 'successBody_DESC'
  | 'successHeadline_ASC'
  | 'successHeadline_DESC'
  | 'topicLabel_ASC'
  | 'topicLabel_DESC'
  | 'topicPlaceholder_ASC'
  | 'topicPlaceholder_DESC'
  | 'topics_ASC'
  | 'topics_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ContactSectionParent = Page | PageVariant;

export type ContactSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type ContactSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type ContactSectionParentCreateManyInlineInput = {
  /** Connect multiple existing ContactSectionParent documents */
  connect?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactSectionParent documents */
  create?: InputMaybe<Array<ContactSectionParentCreateInput>>;
};

export type ContactSectionParentCreateOneInlineInput = {
  /** Connect one existing ContactSectionParent document */
  connect?: InputMaybe<ContactSectionParentWhereUniqueInput>;
  /** Create and connect one ContactSectionParent document */
  create?: InputMaybe<ContactSectionParentCreateInput>;
};

export type ContactSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type ContactSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactSectionParent documents */
  connect?: InputMaybe<Array<ContactSectionParentConnectInput>>;
  /** Create and connect multiple ContactSectionParent documents */
  create?: InputMaybe<Array<ContactSectionParentCreateInput>>;
  /** Delete multiple ContactSectionParent documents */
  delete?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Disconnect multiple ContactSectionParent documents */
  disconnect?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactSectionParent documents */
  set?: InputMaybe<Array<ContactSectionParentWhereUniqueInput>>;
  /** Update multiple ContactSectionParent documents */
  update?: InputMaybe<Array<ContactSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactSectionParent documents */
  upsert?: InputMaybe<Array<ContactSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type ContactSectionParentUpdateOneInlineInput = {
  /** Connect existing ContactSectionParent document */
  connect?: InputMaybe<ContactSectionParentWhereUniqueInput>;
  /** Create and connect one ContactSectionParent document */
  create?: InputMaybe<ContactSectionParentCreateInput>;
  /** Delete currently connected ContactSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ContactSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactSectionParent document */
  update?: InputMaybe<ContactSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactSectionParent document */
  upsert?: InputMaybe<ContactSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type ContactSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type ContactSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type ContactSectionUpdateInput = {
  /** emailLabel input for default locale (en) */
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  /** emailPlaceholder input for default locale (en) */
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ContactSectionUpdateLocalizationsInput>;
  /** messageLabel input for default locale (en) */
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  /** messagePlaceholder input for default locale (en) */
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** nameLabel input for default locale (en) */
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  /** namePlaceholder input for default locale (en) */
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  offices?: InputMaybe<OfficeUpdateManyInlineInput>;
  /** submitLabel input for default locale (en) */
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  /** successBody input for default locale (en) */
  successBody?: InputMaybe<Scalars['String']['input']>;
  /** successHeadline input for default locale (en) */
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  /** topicLabel input for default locale (en) */
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  /** topicPlaceholder input for default locale (en) */
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** topics input for default locale (en) */
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactSectionUpdateLocalizationDataInput = {
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  successBody?: InputMaybe<Scalars['String']['input']>;
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactSectionUpdateLocalizationInput = {
  data: ContactSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ContactSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ContactSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ContactSectionUpsertLocalizationInput>>;
};

export type ContactSectionUpdateManyInlineInput = {
  /** Create and connect multiple ContactSection component instances */
  create?: InputMaybe<Array<ContactSectionCreateWithPositionInput>>;
  /** Delete multiple ContactSection documents */
  delete?: InputMaybe<Array<ContactSectionWhereUniqueInput>>;
  /** Update multiple ContactSection component instances */
  update?: InputMaybe<Array<ContactSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactSection component instances */
  upsert?: InputMaybe<Array<ContactSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactSectionUpdateManyInput = {
  /** emailLabel input for default locale (en) */
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  /** emailPlaceholder input for default locale (en) */
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ContactSectionUpdateManyLocalizationsInput>;
  /** messageLabel input for default locale (en) */
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  /** messagePlaceholder input for default locale (en) */
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** nameLabel input for default locale (en) */
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  /** namePlaceholder input for default locale (en) */
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** submitLabel input for default locale (en) */
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  /** successBody input for default locale (en) */
  successBody?: InputMaybe<Scalars['String']['input']>;
  /** successHeadline input for default locale (en) */
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  /** topicLabel input for default locale (en) */
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  /** topicPlaceholder input for default locale (en) */
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** topics input for default locale (en) */
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactSectionUpdateManyLocalizationDataInput = {
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  successBody?: InputMaybe<Scalars['String']['input']>;
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ContactSectionUpdateManyLocalizationInput = {
  data: ContactSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ContactSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ContactSectionUpdateManyLocalizationInput>>;
};

export type ContactSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactSectionUpdateManyInput;
  /** Document search */
  where: ContactSectionWhereInput;
};

export type ContactSectionUpdateOneInlineInput = {
  /** Create and connect one ContactSection document */
  create?: InputMaybe<ContactSectionCreateInput>;
  /** Delete currently connected ContactSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactSection document */
  update?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactSection document */
  upsert?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueInput>;
};

export type ContactSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactSectionUpdateInput;
  /** Unique document search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactSectionCreateInput;
  /** Update document if it exists */
  update: ContactSectionUpdateInput;
};

export type ContactSectionUpsertLocalizationInput = {
  create: ContactSectionCreateLocalizationDataInput;
  locale: Locale;
  update: ContactSectionUpdateLocalizationDataInput;
};

export type ContactSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactSectionWhereUniqueInput;
};

export type ContactSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactSectionUpsertInput;
  /** Unique document search */
  where: ContactSectionWhereUniqueInput;
};

/** Identifies documents */
export type ContactSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  emailLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  emailPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailPlaceholder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailPlaceholder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailPlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailPlaceholder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailPlaceholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailPlaceholder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailPlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailPlaceholder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailPlaceholder_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  messageLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  messageLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  messageLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  messageLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  messageLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  messageLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  messageLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  messageLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  messageLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  messageLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  messagePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  messagePlaceholder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  messagePlaceholder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  messagePlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  messagePlaceholder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  messagePlaceholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  messagePlaceholder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  messagePlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  messagePlaceholder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  messagePlaceholder_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  nameLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  nameLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  nameLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  nameLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  nameLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  nameLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  nameLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  nameLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  nameLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  namePlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  namePlaceholder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  namePlaceholder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  namePlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  namePlaceholder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  namePlaceholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  namePlaceholder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  namePlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  namePlaceholder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  namePlaceholder_starts_with?: InputMaybe<Scalars['String']['input']>;
  offices_every?: InputMaybe<OfficeWhereInput>;
  offices_none?: InputMaybe<OfficeWhereInput>;
  offices_some?: InputMaybe<OfficeWhereInput>;
  submitLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  submitLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  submitLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  submitLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  submitLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  submitLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  submitLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  submitLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  submitLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  submitLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  successBody?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  successBody_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  successBody_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  successBody_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  successBody_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  successBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  successBody_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  successBody_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  successBody_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  successBody_starts_with?: InputMaybe<Scalars['String']['input']>;
  successHeadline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  successHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  successHeadline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  successHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  successHeadline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  successHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  successHeadline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  successHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  successHeadline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  successHeadline_starts_with?: InputMaybe<Scalars['String']['input']>;
  topicLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topicLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topicLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topicLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topicLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topicLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topicLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topicLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topicLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topicLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  topicPlaceholder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topicPlaceholder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topicPlaceholder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topicPlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topicPlaceholder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topicPlaceholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topicPlaceholder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topicPlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topicPlaceholder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topicPlaceholder_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  topics_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  topics_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  topics_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  topics_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References ContactSection record uniquely */
export type ContactSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Layout options for product/feature grids */
export type DisplayLayout =
  | 'GRID_2COL'
  | 'GRID_3COL'
  | 'GRID_4COL';

export type DocumentFileTypes =
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  | 'autoImage'
  | 'avif'
  | 'bmp'
  | 'gif'
  | 'heic'
  | 'jpg'
  | 'png'
  | 'svg'
  | 'tiff'
  | 'webp';

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** Split-layout editorial section: image + text + optional spec grid */
export type EditorialSection = Entity & {
  __typename?: 'EditorialSection';
  body?: Maybe<RichText>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaLabel?: Maybe<Scalars['String']['output']>;
  eyebrow?: Maybe<Scalars['String']['output']>;
  /** Only show testimonials where targetAudience matches current audience */
  filterByAudience: Scalars['Boolean']['output'];
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  imageRight?: Maybe<Scalars['Boolean']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<EditorialSection>;
  /** System stage field */
  stage: Stage;
  stats: Array<Stat>;
  /** Section title (optional) */
  title?: Maybe<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Split-layout editorial section: image + text + optional spec grid */
export type EditorialSectionImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Split-layout editorial section: image + text + optional spec grid */
export type EditorialSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Split-layout editorial section: image + text + optional spec grid */
export type EditorialSectionStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatWhereInput>;
};


/** Split-layout editorial section: image + text + optional spec grid */
export type EditorialSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type EditorialSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EditorialSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type EditorialSectionConnection = {
  __typename?: 'EditorialSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EditorialSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EditorialSectionCreateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  ctaHref?: InputMaybe<Scalars['String']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  filterByAudience: Scalars['Boolean']['input'];
  headline?: InputMaybe<Scalars['String']['input']>;
  image: AssetCreateOneInlineInput;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<EditorialSectionCreateLocalizationsInput>;
  stats?: InputMaybe<StatCreateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditorialSectionCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditorialSectionCreateLocalizationInput = {
  /** Localization input */
  data: EditorialSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type EditorialSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<EditorialSectionCreateLocalizationInput>>;
};

export type EditorialSectionCreateManyInlineInput = {
  /** Create and connect multiple existing EditorialSection documents */
  create?: InputMaybe<Array<EditorialSectionCreateInput>>;
};

export type EditorialSectionCreateOneInlineInput = {
  /** Create and connect one EditorialSection document */
  create?: InputMaybe<EditorialSectionCreateInput>;
};

export type EditorialSectionCreateWithPositionInput = {
  /** Document to create */
  data: EditorialSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EditorialSectionEdge = {
  __typename?: 'EditorialSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EditorialSection;
};

/** Identifies documents */
export type EditorialSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  ctaHref?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaHref_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaHref_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaHref_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaHref_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaHref_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaHref_starts_with?: InputMaybe<Scalars['String']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  eyebrow_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  eyebrow_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  eyebrow_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  eyebrow_starts_with?: InputMaybe<Scalars['String']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  filterByAudience_not?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  imageRight_not?: InputMaybe<Scalars['Boolean']['input']>;
  stats_every?: InputMaybe<StatWhereInput>;
  stats_none?: InputMaybe<StatWhereInput>;
  stats_some?: InputMaybe<StatWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type EditorialSectionOrderByInput =
  | 'ctaHref_ASC'
  | 'ctaHref_DESC'
  | 'ctaLabel_ASC'
  | 'ctaLabel_DESC'
  | 'eyebrow_ASC'
  | 'eyebrow_DESC'
  | 'filterByAudience_ASC'
  | 'filterByAudience_DESC'
  | 'headline_ASC'
  | 'headline_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'imageRight_ASC'
  | 'imageRight_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type EditorialSectionParent = Page | PageVariant;

export type EditorialSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type EditorialSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type EditorialSectionParentCreateManyInlineInput = {
  /** Connect multiple existing EditorialSectionParent documents */
  connect?: InputMaybe<Array<EditorialSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing EditorialSectionParent documents */
  create?: InputMaybe<Array<EditorialSectionParentCreateInput>>;
};

export type EditorialSectionParentCreateOneInlineInput = {
  /** Connect one existing EditorialSectionParent document */
  connect?: InputMaybe<EditorialSectionParentWhereUniqueInput>;
  /** Create and connect one EditorialSectionParent document */
  create?: InputMaybe<EditorialSectionParentCreateInput>;
};

export type EditorialSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type EditorialSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing EditorialSectionParent documents */
  connect?: InputMaybe<Array<EditorialSectionParentConnectInput>>;
  /** Create and connect multiple EditorialSectionParent documents */
  create?: InputMaybe<Array<EditorialSectionParentCreateInput>>;
  /** Delete multiple EditorialSectionParent documents */
  delete?: InputMaybe<Array<EditorialSectionParentWhereUniqueInput>>;
  /** Disconnect multiple EditorialSectionParent documents */
  disconnect?: InputMaybe<Array<EditorialSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EditorialSectionParent documents */
  set?: InputMaybe<Array<EditorialSectionParentWhereUniqueInput>>;
  /** Update multiple EditorialSectionParent documents */
  update?: InputMaybe<Array<EditorialSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EditorialSectionParent documents */
  upsert?: InputMaybe<Array<EditorialSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type EditorialSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type EditorialSectionParentUpdateOneInlineInput = {
  /** Connect existing EditorialSectionParent document */
  connect?: InputMaybe<EditorialSectionParentWhereUniqueInput>;
  /** Create and connect one EditorialSectionParent document */
  create?: InputMaybe<EditorialSectionParentCreateInput>;
  /** Delete currently connected EditorialSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected EditorialSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialSectionParent document */
  update?: InputMaybe<EditorialSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialSectionParent document */
  upsert?: InputMaybe<EditorialSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type EditorialSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type EditorialSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type EditorialSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type EditorialSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type EditorialSectionUpdateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  ctaHref?: InputMaybe<Scalars['String']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<EditorialSectionUpdateLocalizationsInput>;
  stats?: InputMaybe<StatUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialSectionUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialSectionUpdateLocalizationInput = {
  data: EditorialSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type EditorialSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<EditorialSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<EditorialSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<EditorialSectionUpsertLocalizationInput>>;
};

export type EditorialSectionUpdateManyInlineInput = {
  /** Create and connect multiple EditorialSection component instances */
  create?: InputMaybe<Array<EditorialSectionCreateWithPositionInput>>;
  /** Delete multiple EditorialSection documents */
  delete?: InputMaybe<Array<EditorialSectionWhereUniqueInput>>;
  /** Update multiple EditorialSection component instances */
  update?: InputMaybe<Array<EditorialSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EditorialSection component instances */
  upsert?: InputMaybe<Array<EditorialSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EditorialSectionUpdateManyInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  ctaHref?: InputMaybe<Scalars['String']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<EditorialSectionUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialSectionUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialSectionUpdateManyLocalizationInput = {
  data: EditorialSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type EditorialSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<EditorialSectionUpdateManyLocalizationInput>>;
};

export type EditorialSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EditorialSectionUpdateManyInput;
  /** Document search */
  where: EditorialSectionWhereInput;
};

export type EditorialSectionUpdateOneInlineInput = {
  /** Create and connect one EditorialSection document */
  create?: InputMaybe<EditorialSectionCreateInput>;
  /** Delete currently connected EditorialSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialSection document */
  update?: InputMaybe<EditorialSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialSection document */
  upsert?: InputMaybe<EditorialSectionUpsertWithNestedWhereUniqueInput>;
};

export type EditorialSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EditorialSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialSectionWhereUniqueInput;
};

export type EditorialSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EditorialSectionUpdateInput;
  /** Unique document search */
  where: EditorialSectionWhereUniqueInput;
};

export type EditorialSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: EditorialSectionCreateInput;
  /** Update document if it exists */
  update: EditorialSectionUpdateInput;
};

export type EditorialSectionUpsertLocalizationInput = {
  create: EditorialSectionCreateLocalizationDataInput;
  locale: Locale;
  update: EditorialSectionUpdateLocalizationDataInput;
};

export type EditorialSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EditorialSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialSectionWhereUniqueInput;
};

export type EditorialSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EditorialSectionUpsertInput;
  /** Unique document search */
  where: EditorialSectionWhereUniqueInput;
};

/** Identifies documents */
export type EditorialSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  ctaHref?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaHref_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaHref_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaHref_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaHref_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaHref_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaHref_starts_with?: InputMaybe<Scalars['String']['input']>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  eyebrow_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  eyebrow_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  eyebrow_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  eyebrow_starts_with?: InputMaybe<Scalars['String']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  filterByAudience_not?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  imageRight_not?: InputMaybe<Scalars['Boolean']['input']>;
  stats_every?: InputMaybe<StatWhereInput>;
  stats_none?: InputMaybe<StatWhereInput>;
  stats_some?: InputMaybe<StatWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References EditorialSection record uniquely */
export type EditorialSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export type EntityTypeName =
  /** Articles with rich text body */
  | 'Article'
  | 'ArticleList'
  /** Asset system model */
  | 'Asset'
  /** Reusable button/link configuration */
  | 'Button'
  /** Conversion-focused section with headline and buttons */
  | 'CTABlock'
  /** Contact form with office locations and localized form labels */
  | 'ContactSection'
  /** Split-layout editorial section: image + text + optional spec grid */
  | 'EditorialSection'
  /** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
  | 'Feature'
  /** Grid display of product features */
  | 'FeatureGrid'
  /** Split-layout feature article section */
  | 'FeaturedArticle'
  /** Hero banner with headline, media, and CTAs */
  | 'HeroSection'
  /** Job listings for the Careers page */
  | 'Job'
  | 'JobList'
  /** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
  | 'Navigation'
  /** Individual navigation link (nestable for dropdown menus) */
  | 'NavigationItem'
  /** Office location with contact details */
  | 'Office'
  /** Top-level page container with flexible section composition */
  | 'Page'
  | 'PageHeader'
  /** Top-level page container with flexible section composition */
  | 'PageVariant'
  /** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
  | 'Product'
  /** Displays products with live PIM data - demonstrates Content Federation */
  | 'ProductShowcase'
  /** Structured technical specifications for products */
  | 'ProductSpecification'
  /** Reusable SEO fields for search engine optimization */
  | 'SEO'
  /** Scheduled Operation system model */
  | 'ScheduledOperation'
  /** Scheduled Release system model */
  | 'ScheduledRelease'
  /** Standalone label + headline block used as a section divider */
  | 'SectionHeader'
  /** Segment system model */
  | 'Segment'
  /** Global site configuration (singleton) */
  | 'SiteSettings'
  /** Social media link configuration */
  | 'SocialLink'
  /** Individual statistic for trust indicators (e.g., "10,000+ Happy Riders") */
  | 'Stat'
  /** Trust indicator bar with statistics (e.g., "10,000+ Riders | 4.8★ Rating") */
  | 'StatsBar'
  /** Vertical list of year/event rows for history sections */
  | 'Timeline'
  /** A single year + event row in a Timeline section */
  | 'TimelineEntry'
  /** User system model */
  | 'User';

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type Feature = Entity & Node & {
  __typename?: 'Feature';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Feature description (supports rich text formatting: bold, italic, lists, links) */
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Feature>;
  /** List of Feature versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Feature>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Feature name */
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeaturePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeaturePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Reusable product feature (e.g., "Carbon Frame", "Weather Protection") */
export type FeatureUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FeatureConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeatureWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeatureEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeatureCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description: Scalars['RichTextAST']['input'];
  featureGrids?: InputMaybe<FeatureGridCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FeatureCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureCreateLocalizationInput = {
  /** Localization input */
  data: FeatureCreateLocalizationDataInput;
  locale: Locale;
};

export type FeatureCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FeatureCreateLocalizationInput>>;
};

export type FeatureCreateManyInlineInput = {
  /** Connect multiple existing Feature documents */
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Create and connect multiple existing Feature documents */
  create?: InputMaybe<Array<FeatureCreateInput>>;
};

export type FeatureCreateOneInlineInput = {
  /** Connect one existing Feature document */
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  /** Create and connect one Feature document */
  create?: InputMaybe<FeatureCreateInput>;
};

/** An edge in a connection. */
export type FeatureEdge = {
  __typename?: 'FeatureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Feature;
};

/** Grid display of product features */
export type FeatureGrid = Entity & {
  __typename?: 'FeatureGrid';
  /** Select features to highlight. Use variants to show different features per audience. */
  features: Array<Feature>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Grid layout (2, 3, or 4 columns) */
  layout: DisplayLayout;
  /** When enabled, features with matching audienceRelevance appear first */
  sortByAudienceRelevance: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Grid display of product features */
export type FeatureGridFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureWhereInput>;
};

export type FeatureGridConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeatureGridWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeatureGridConnection = {
  __typename?: 'FeatureGridConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeatureGridEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeatureGridCreateInput = {
  features?: InputMaybe<FeatureCreateManyInlineInput>;
  layout: DisplayLayout;
  sortByAudienceRelevance: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureGridCreateManyInlineInput = {
  /** Create and connect multiple existing FeatureGrid documents */
  create?: InputMaybe<Array<FeatureGridCreateInput>>;
};

export type FeatureGridCreateOneInlineInput = {
  /** Create and connect one FeatureGrid document */
  create?: InputMaybe<FeatureGridCreateInput>;
};

export type FeatureGridCreateWithPositionInput = {
  /** Document to create */
  data: FeatureGridCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeatureGridEdge = {
  __typename?: 'FeatureGridEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeatureGrid;
};

/** Identifies documents */
export type FeatureGridManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  features_every?: InputMaybe<FeatureWhereInput>;
  features_none?: InputMaybe<FeatureWhereInput>;
  features_some?: InputMaybe<FeatureWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<DisplayLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  sortByAudienceRelevance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  sortByAudienceRelevance_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type FeatureGridOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'layout_ASC'
  | 'layout_DESC'
  | 'sortByAudienceRelevance_ASC'
  | 'sortByAudienceRelevance_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type FeatureGridParent = Page | PageVariant;

export type FeatureGridParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type FeatureGridParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type FeatureGridParentCreateManyInlineInput = {
  /** Connect multiple existing FeatureGridParent documents */
  connect?: InputMaybe<Array<FeatureGridParentWhereUniqueInput>>;
  /** Create and connect multiple existing FeatureGridParent documents */
  create?: InputMaybe<Array<FeatureGridParentCreateInput>>;
};

export type FeatureGridParentCreateOneInlineInput = {
  /** Connect one existing FeatureGridParent document */
  connect?: InputMaybe<FeatureGridParentWhereUniqueInput>;
  /** Create and connect one FeatureGridParent document */
  create?: InputMaybe<FeatureGridParentCreateInput>;
};

export type FeatureGridParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type FeatureGridParentUpdateManyInlineInput = {
  /** Connect multiple existing FeatureGridParent documents */
  connect?: InputMaybe<Array<FeatureGridParentConnectInput>>;
  /** Create and connect multiple FeatureGridParent documents */
  create?: InputMaybe<Array<FeatureGridParentCreateInput>>;
  /** Delete multiple FeatureGridParent documents */
  delete?: InputMaybe<Array<FeatureGridParentWhereUniqueInput>>;
  /** Disconnect multiple FeatureGridParent documents */
  disconnect?: InputMaybe<Array<FeatureGridParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FeatureGridParent documents */
  set?: InputMaybe<Array<FeatureGridParentWhereUniqueInput>>;
  /** Update multiple FeatureGridParent documents */
  update?: InputMaybe<Array<FeatureGridParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FeatureGridParent documents */
  upsert?: InputMaybe<Array<FeatureGridParentUpsertWithNestedWhereUniqueInput>>;
};

export type FeatureGridParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type FeatureGridParentUpdateOneInlineInput = {
  /** Connect existing FeatureGridParent document */
  connect?: InputMaybe<FeatureGridParentWhereUniqueInput>;
  /** Create and connect one FeatureGridParent document */
  create?: InputMaybe<FeatureGridParentCreateInput>;
  /** Delete currently connected FeatureGridParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FeatureGridParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeatureGridParent document */
  update?: InputMaybe<FeatureGridParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeatureGridParent document */
  upsert?: InputMaybe<FeatureGridParentUpsertWithNestedWhereUniqueInput>;
};

export type FeatureGridParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type FeatureGridParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type FeatureGridParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type FeatureGridParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type FeatureGridUpdateInput = {
  features?: InputMaybe<FeatureUpdateManyInlineInput>;
  layout?: InputMaybe<DisplayLayout>;
  sortByAudienceRelevance?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeatureGridUpdateManyInlineInput = {
  /** Create and connect multiple FeatureGrid component instances */
  create?: InputMaybe<Array<FeatureGridCreateWithPositionInput>>;
  /** Delete multiple FeatureGrid documents */
  delete?: InputMaybe<Array<FeatureGridWhereUniqueInput>>;
  /** Update multiple FeatureGrid component instances */
  update?: InputMaybe<Array<FeatureGridUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeatureGrid component instances */
  upsert?: InputMaybe<Array<FeatureGridUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeatureGridUpdateManyInput = {
  layout?: InputMaybe<DisplayLayout>;
  sortByAudienceRelevance?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeatureGridUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeatureGridUpdateManyInput;
  /** Document search */
  where: FeatureGridWhereInput;
};

export type FeatureGridUpdateOneInlineInput = {
  /** Create and connect one FeatureGrid document */
  create?: InputMaybe<FeatureGridCreateInput>;
  /** Delete currently connected FeatureGrid document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeatureGrid document */
  update?: InputMaybe<FeatureGridUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeatureGrid document */
  upsert?: InputMaybe<FeatureGridUpsertWithNestedWhereUniqueInput>;
};

export type FeatureGridUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FeatureGridUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeatureGridWhereUniqueInput;
};

export type FeatureGridUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeatureGridUpdateInput;
  /** Unique document search */
  where: FeatureGridWhereUniqueInput;
};

export type FeatureGridUpsertInput = {
  /** Create document if it didn't exist */
  create: FeatureGridCreateInput;
  /** Update document if it exists */
  update: FeatureGridUpdateInput;
};

export type FeatureGridUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FeatureGridUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeatureGridWhereUniqueInput;
};

export type FeatureGridUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeatureGridUpsertInput;
  /** Unique document search */
  where: FeatureGridWhereUniqueInput;
};

/** Identifies documents */
export type FeatureGridWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureGridWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  features_every?: InputMaybe<FeatureWhereInput>;
  features_none?: InputMaybe<FeatureWhereInput>;
  features_some?: InputMaybe<FeatureWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<DisplayLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  sortByAudienceRelevance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  sortByAudienceRelevance_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References FeatureGrid record uniquely */
export type FeatureGridWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type FeatureManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_none?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_some?: InputMaybe<FeatureWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type FeatureOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type FeatureUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  featureGrids?: InputMaybe<FeatureGridUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<FeatureUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateLocalizationInput = {
  data: FeatureUpdateLocalizationDataInput;
  locale: Locale;
};

export type FeatureUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FeatureCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FeatureUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertLocalizationInput>>;
};

export type FeatureUpdateManyInlineInput = {
  /** Connect multiple existing Feature documents */
  connect?: InputMaybe<Array<FeatureConnectInput>>;
  /** Create and connect multiple Feature documents */
  create?: InputMaybe<Array<FeatureCreateInput>>;
  /** Delete multiple Feature documents */
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Disconnect multiple Feature documents */
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Feature documents */
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  /** Update multiple Feature documents */
  update?: InputMaybe<Array<FeatureUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Feature documents */
  upsert?: InputMaybe<Array<FeatureUpsertWithNestedWhereUniqueInput>>;
};

export type FeatureUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FeatureUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureUpdateManyLocalizationInput = {
  data: FeatureUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FeatureUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FeatureUpdateManyLocalizationInput>>;
};

export type FeatureUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeatureUpdateManyInput;
  /** Document search */
  where: FeatureWhereInput;
};

export type FeatureUpdateOneInlineInput = {
  /** Connect existing Feature document */
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  /** Create and connect one Feature document */
  create?: InputMaybe<FeatureCreateInput>;
  /** Delete currently connected Feature document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Feature document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Feature document */
  update?: InputMaybe<FeatureUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Feature document */
  upsert?: InputMaybe<FeatureUpsertWithNestedWhereUniqueInput>;
};

export type FeatureUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeatureUpdateInput;
  /** Unique document search */
  where: FeatureWhereUniqueInput;
};

export type FeatureUpsertInput = {
  /** Create document if it didn't exist */
  create: FeatureCreateInput;
  /** Update document if it exists */
  update: FeatureUpdateInput;
};

export type FeatureUpsertLocalizationInput = {
  create: FeatureCreateLocalizationDataInput;
  locale: Locale;
  update: FeatureUpdateLocalizationDataInput;
};

export type FeatureUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeatureUpsertInput;
  /** Unique document search */
  where: FeatureWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FeatureWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FeatureWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_none?: InputMaybe<FeatureWhereStageInput>;
  documentInStages_some?: InputMaybe<FeatureWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FeatureWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeatureWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FeatureWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Feature record uniquely */
export type FeatureWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Split-layout feature article section */
export type FeaturedArticle = Entity & {
  __typename?: 'FeaturedArticle';
  blogPost?: Maybe<Article>;
  ctaLabel?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageRight?: Maybe<Scalars['Boolean']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<FeaturedArticle>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Split-layout feature article section */
export type FeaturedArticleBlogPostArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Split-layout feature article section */
export type FeaturedArticleLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Split-layout feature article section */
export type FeaturedArticleUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type FeaturedArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeaturedArticleWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeaturedArticleConnection = {
  __typename?: 'FeaturedArticleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeaturedArticleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeaturedArticleCreateInput = {
  blogPost?: InputMaybe<ArticleCreateOneInlineInput>;
  /** ctaLabel input for default locale (en) */
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FeaturedArticleCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedArticleCreateLocalizationDataInput = {
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedArticleCreateLocalizationInput = {
  /** Localization input */
  data: FeaturedArticleCreateLocalizationDataInput;
  locale: Locale;
};

export type FeaturedArticleCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FeaturedArticleCreateLocalizationInput>>;
};

export type FeaturedArticleCreateManyInlineInput = {
  /** Create and connect multiple existing FeaturedArticle documents */
  create?: InputMaybe<Array<FeaturedArticleCreateInput>>;
};

export type FeaturedArticleCreateOneInlineInput = {
  /** Create and connect one FeaturedArticle document */
  create?: InputMaybe<FeaturedArticleCreateInput>;
};

export type FeaturedArticleCreateWithPositionInput = {
  /** Document to create */
  data: FeaturedArticleCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeaturedArticleEdge = {
  __typename?: 'FeaturedArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeaturedArticle;
};

/** Identifies documents */
export type FeaturedArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPost?: InputMaybe<ArticleWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  imageRight_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type FeaturedArticleOrderByInput =
  | 'ctaLabel_ASC'
  | 'ctaLabel_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'imageRight_ASC'
  | 'imageRight_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type FeaturedArticleParent = Page | PageVariant;

export type FeaturedArticleParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type FeaturedArticleParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type FeaturedArticleParentCreateManyInlineInput = {
  /** Connect multiple existing FeaturedArticleParent documents */
  connect?: InputMaybe<Array<FeaturedArticleParentWhereUniqueInput>>;
  /** Create and connect multiple existing FeaturedArticleParent documents */
  create?: InputMaybe<Array<FeaturedArticleParentCreateInput>>;
};

export type FeaturedArticleParentCreateOneInlineInput = {
  /** Connect one existing FeaturedArticleParent document */
  connect?: InputMaybe<FeaturedArticleParentWhereUniqueInput>;
  /** Create and connect one FeaturedArticleParent document */
  create?: InputMaybe<FeaturedArticleParentCreateInput>;
};

export type FeaturedArticleParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type FeaturedArticleParentUpdateManyInlineInput = {
  /** Connect multiple existing FeaturedArticleParent documents */
  connect?: InputMaybe<Array<FeaturedArticleParentConnectInput>>;
  /** Create and connect multiple FeaturedArticleParent documents */
  create?: InputMaybe<Array<FeaturedArticleParentCreateInput>>;
  /** Delete multiple FeaturedArticleParent documents */
  delete?: InputMaybe<Array<FeaturedArticleParentWhereUniqueInput>>;
  /** Disconnect multiple FeaturedArticleParent documents */
  disconnect?: InputMaybe<Array<FeaturedArticleParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FeaturedArticleParent documents */
  set?: InputMaybe<Array<FeaturedArticleParentWhereUniqueInput>>;
  /** Update multiple FeaturedArticleParent documents */
  update?: InputMaybe<Array<FeaturedArticleParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FeaturedArticleParent documents */
  upsert?: InputMaybe<Array<FeaturedArticleParentUpsertWithNestedWhereUniqueInput>>;
};

export type FeaturedArticleParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type FeaturedArticleParentUpdateOneInlineInput = {
  /** Connect existing FeaturedArticleParent document */
  connect?: InputMaybe<FeaturedArticleParentWhereUniqueInput>;
  /** Create and connect one FeaturedArticleParent document */
  create?: InputMaybe<FeaturedArticleParentCreateInput>;
  /** Delete currently connected FeaturedArticleParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FeaturedArticleParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedArticleParent document */
  update?: InputMaybe<FeaturedArticleParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedArticleParent document */
  upsert?: InputMaybe<FeaturedArticleParentUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedArticleParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type FeaturedArticleParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedArticleParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type FeaturedArticleParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type FeaturedArticleUpdateInput = {
  blogPost?: InputMaybe<ArticleUpdateOneInlineInput>;
  /** ctaLabel input for default locale (en) */
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<FeaturedArticleUpdateLocalizationsInput>;
};

export type FeaturedArticleUpdateLocalizationDataInput = {
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedArticleUpdateLocalizationInput = {
  data: FeaturedArticleUpdateLocalizationDataInput;
  locale: Locale;
};

export type FeaturedArticleUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FeaturedArticleCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FeaturedArticleUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FeaturedArticleUpsertLocalizationInput>>;
};

export type FeaturedArticleUpdateManyInlineInput = {
  /** Create and connect multiple FeaturedArticle component instances */
  create?: InputMaybe<Array<FeaturedArticleCreateWithPositionInput>>;
  /** Delete multiple FeaturedArticle documents */
  delete?: InputMaybe<Array<FeaturedArticleWhereUniqueInput>>;
  /** Update multiple FeaturedArticle component instances */
  update?: InputMaybe<Array<FeaturedArticleUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeaturedArticle component instances */
  upsert?: InputMaybe<Array<FeaturedArticleUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeaturedArticleUpdateManyInput = {
  /** ctaLabel input for default locale (en) */
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FeaturedArticleUpdateManyLocalizationsInput>;
};

export type FeaturedArticleUpdateManyLocalizationDataInput = {
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedArticleUpdateManyLocalizationInput = {
  data: FeaturedArticleUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FeaturedArticleUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FeaturedArticleUpdateManyLocalizationInput>>;
};

export type FeaturedArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeaturedArticleUpdateManyInput;
  /** Document search */
  where: FeaturedArticleWhereInput;
};

export type FeaturedArticleUpdateOneInlineInput = {
  /** Create and connect one FeaturedArticle document */
  create?: InputMaybe<FeaturedArticleCreateInput>;
  /** Delete currently connected FeaturedArticle document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedArticle document */
  update?: InputMaybe<FeaturedArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedArticle document */
  upsert?: InputMaybe<FeaturedArticleUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedArticleUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FeaturedArticleUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedArticleWhereUniqueInput;
};

export type FeaturedArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeaturedArticleUpdateInput;
  /** Unique document search */
  where: FeaturedArticleWhereUniqueInput;
};

export type FeaturedArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: FeaturedArticleCreateInput;
  /** Update document if it exists */
  update: FeaturedArticleUpdateInput;
};

export type FeaturedArticleUpsertLocalizationInput = {
  create: FeaturedArticleCreateLocalizationDataInput;
  locale: Locale;
  update: FeaturedArticleUpdateLocalizationDataInput;
};

export type FeaturedArticleUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FeaturedArticleUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedArticleWhereUniqueInput;
};

export type FeaturedArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeaturedArticleUpsertInput;
  /** Unique document search */
  where: FeaturedArticleWhereUniqueInput;
};

/** Identifies documents */
export type FeaturedArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  blogPost?: InputMaybe<ArticleWhereInput>;
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageRight?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  imageRight_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References FeaturedArticle record uniquely */
export type FeaturedArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Hero banner with headline, media, and CTAs */
export type HeroSection = Entity & {
  __typename?: 'HeroSection';
  /** Background image or video (recommended: 1920x1080px, <500KB) */
  backgroundMedia?: Maybe<Asset>;
  /** Main headline - key personalization field */
  headline: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Label above the headline */
  label?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<HeroSection>;
  /** Small label displayed over the media image (e.g. 'New 2026 Collection') */
  mediaText?: Maybe<Scalars['String']['output']>;
  /** Primary call-to-action button */
  primaryCTA?: Maybe<Button>;
  /** Secondary call-to-action button (optional) */
  secondaryCTA?: Maybe<Button>;
  /** System stage field */
  stage: Stage;
  /** Supporting headline (optional) */
  subheadline?: Maybe<Scalars['String']['output']>;
  /** Text alignment within hero section */
  textAlignment: TextAlignment;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Hero banner with headline, media, and CTAs */
export type HeroSectionBackgroundMediaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Hero banner with headline, media, and CTAs */
export type HeroSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Hero banner with headline, media, and CTAs */
export type HeroSectionPrimaryCtaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Hero banner with headline, media, and CTAs */
export type HeroSectionSecondaryCtaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Hero banner with headline, media, and CTAs */
export type HeroSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type HeroSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroSectionConnection = {
  __typename?: 'HeroSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroSectionCreateInput = {
  backgroundMedia?: InputMaybe<AssetCreateOneInlineInput>;
  /** headline input for default locale (en) */
  headline: Scalars['String']['input'];
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HeroSectionCreateLocalizationsInput>;
  /** mediaText input for default locale (en) */
  mediaText?: InputMaybe<Scalars['String']['input']>;
  primaryCTA?: InputMaybe<ButtonCreateOneInlineInput>;
  secondaryCTA?: InputMaybe<ButtonCreateOneInlineInput>;
  /** subheadline input for default locale (en) */
  subheadline?: InputMaybe<Scalars['String']['input']>;
  textAlignment: TextAlignment;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeroSectionCreateLocalizationDataInput = {
  headline: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  mediaText?: InputMaybe<Scalars['String']['input']>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeroSectionCreateLocalizationInput = {
  /** Localization input */
  data: HeroSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HeroSectionCreateLocalizationInput>>;
};

export type HeroSectionCreateManyInlineInput = {
  /** Create and connect multiple existing HeroSection documents */
  create?: InputMaybe<Array<HeroSectionCreateInput>>;
};

export type HeroSectionCreateOneInlineInput = {
  /** Create and connect one HeroSection document */
  create?: InputMaybe<HeroSectionCreateInput>;
};

export type HeroSectionCreateWithPositionInput = {
  /** Document to create */
  data: HeroSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroSectionEdge = {
  __typename?: 'HeroSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HeroSection;
};

/** Identifies documents */
export type HeroSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundMedia?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  primaryCTA?: InputMaybe<ButtonWhereInput>;
  secondaryCTA?: InputMaybe<ButtonWhereInput>;
  textAlignment?: InputMaybe<TextAlignment>;
  /** All values that are contained in given list. */
  textAlignment_in?: InputMaybe<Array<InputMaybe<TextAlignment>>>;
  /** Any other value that exists and is not equal to the given value. */
  textAlignment_not?: InputMaybe<TextAlignment>;
  /** All values that are not contained in given list. */
  textAlignment_not_in?: InputMaybe<Array<InputMaybe<TextAlignment>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type HeroSectionOrderByInput =
  | 'headline_ASC'
  | 'headline_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'label_ASC'
  | 'label_DESC'
  | 'mediaText_ASC'
  | 'mediaText_DESC'
  | 'subheadline_ASC'
  | 'subheadline_DESC'
  | 'textAlignment_ASC'
  | 'textAlignment_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type HeroSectionParent = Page | PageVariant;

export type HeroSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type HeroSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type HeroSectionParentCreateManyInlineInput = {
  /** Connect multiple existing HeroSectionParent documents */
  connect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroSectionParent documents */
  create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
};

export type HeroSectionParentCreateOneInlineInput = {
  /** Connect one existing HeroSectionParent document */
  connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
  /** Create and connect one HeroSectionParent document */
  create?: InputMaybe<HeroSectionParentCreateInput>;
};

export type HeroSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type HeroSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroSectionParent documents */
  connect?: InputMaybe<Array<HeroSectionParentConnectInput>>;
  /** Create and connect multiple HeroSectionParent documents */
  create?: InputMaybe<Array<HeroSectionParentCreateInput>>;
  /** Delete multiple HeroSectionParent documents */
  delete?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Disconnect multiple HeroSectionParent documents */
  disconnect?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroSectionParent documents */
  set?: InputMaybe<Array<HeroSectionParentWhereUniqueInput>>;
  /** Update multiple HeroSectionParent documents */
  update?: InputMaybe<Array<HeroSectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroSectionParent documents */
  upsert?: InputMaybe<Array<HeroSectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type HeroSectionParentUpdateOneInlineInput = {
  /** Connect existing HeroSectionParent document */
  connect?: InputMaybe<HeroSectionParentWhereUniqueInput>;
  /** Create and connect one HeroSectionParent document */
  create?: InputMaybe<HeroSectionParentCreateInput>;
  /** Delete currently connected HeroSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroSectionParent document */
  update?: InputMaybe<HeroSectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroSectionParent document */
  upsert?: InputMaybe<HeroSectionParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type HeroSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type HeroSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type HeroSectionUpdateInput = {
  backgroundMedia?: InputMaybe<AssetUpdateOneInlineInput>;
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<HeroSectionUpdateLocalizationsInput>;
  /** mediaText input for default locale (en) */
  mediaText?: InputMaybe<Scalars['String']['input']>;
  primaryCTA?: InputMaybe<ButtonUpdateOneInlineInput>;
  secondaryCTA?: InputMaybe<ButtonUpdateOneInlineInput>;
  /** subheadline input for default locale (en) */
  subheadline?: InputMaybe<Scalars['String']['input']>;
  textAlignment?: InputMaybe<TextAlignment>;
};

export type HeroSectionUpdateLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  mediaText?: InputMaybe<Scalars['String']['input']>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionUpdateLocalizationInput = {
  data: HeroSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HeroSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HeroSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HeroSectionUpsertLocalizationInput>>;
};

export type HeroSectionUpdateManyInlineInput = {
  /** Create and connect multiple HeroSection component instances */
  create?: InputMaybe<Array<HeroSectionCreateWithPositionInput>>;
  /** Delete multiple HeroSection documents */
  delete?: InputMaybe<Array<HeroSectionWhereUniqueInput>>;
  /** Update multiple HeroSection component instances */
  update?: InputMaybe<Array<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HeroSection component instances */
  upsert?: InputMaybe<Array<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroSectionUpdateManyInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HeroSectionUpdateManyLocalizationsInput>;
  /** mediaText input for default locale (en) */
  mediaText?: InputMaybe<Scalars['String']['input']>;
  /** subheadline input for default locale (en) */
  subheadline?: InputMaybe<Scalars['String']['input']>;
  textAlignment?: InputMaybe<TextAlignment>;
};

export type HeroSectionUpdateManyLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  mediaText?: InputMaybe<Scalars['String']['input']>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionUpdateManyLocalizationInput = {
  data: HeroSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HeroSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HeroSectionUpdateManyLocalizationInput>>;
};

export type HeroSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroSectionUpdateManyInput;
  /** Document search */
  where: HeroSectionWhereInput;
};

export type HeroSectionUpdateOneInlineInput = {
  /** Create and connect one HeroSection document */
  create?: InputMaybe<HeroSectionCreateInput>;
  /** Delete currently connected HeroSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroSection document */
  update?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroSection document */
  upsert?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
};

export type HeroSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroSectionUpdateInput;
  /** Unique document search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroSectionCreateInput;
  /** Update document if it exists */
  update: HeroSectionUpdateInput;
};

export type HeroSectionUpsertLocalizationInput = {
  create: HeroSectionCreateLocalizationDataInput;
  locale: Locale;
  update: HeroSectionUpdateLocalizationDataInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroSectionWhereUniqueInput;
};

export type HeroSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroSectionUpsertInput;
  /** Unique document search */
  where: HeroSectionWhereUniqueInput;
};

/** Identifies documents */
export type HeroSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundMedia?: InputMaybe<AssetWhereInput>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  mediaText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mediaText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mediaText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mediaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mediaText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mediaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mediaText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mediaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mediaText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mediaText_starts_with?: InputMaybe<Scalars['String']['input']>;
  primaryCTA?: InputMaybe<ButtonWhereInput>;
  secondaryCTA?: InputMaybe<ButtonWhereInput>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subheadline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subheadline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subheadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subheadline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subheadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subheadline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subheadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subheadline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subheadline_starts_with?: InputMaybe<Scalars['String']['input']>;
  textAlignment?: InputMaybe<TextAlignment>;
  /** All values that are contained in given list. */
  textAlignment_in?: InputMaybe<Array<InputMaybe<TextAlignment>>>;
  /** Any other value that exists and is not equal to the given value. */
  textAlignment_not?: InputMaybe<TextAlignment>;
  /** All values that are not contained in given list. */
  textAlignment_not_in?: InputMaybe<Array<InputMaybe<TextAlignment>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References HeroSection record uniquely */
export type HeroSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export type ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale';

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

/** Job listings for the Careers page */
export type Job = Entity & Node & {
  __typename?: 'Job';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  department: Scalars['String']['output'];
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Job>;
  /** List of Job versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  jobType: Scalars['String']['output'];
  location: Scalars['String']['output'];
  niceToHave: Array<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  requirements: Array<Scalars['String']['output']>;
  responsibilities: Array<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Job listings for the Careers page */
export type JobCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Job listings for the Careers page */
export type JobDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Job listings for the Careers page */
export type JobHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Job listings for the Careers page */
export type JobPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Job listings for the Careers page */
export type JobScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Job listings for the Careers page */
export type JobUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type JobConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: JobWhereUniqueInput;
};

/** A connection to a list of items. */
export type JobConnection = {
  __typename?: 'JobConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<JobEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type JobCreateInput = {
  cmm983n3b013j08vz0aa24k0z?: InputMaybe<JobListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  department: Scalars['String']['input'];
  description: Scalars['RichTextAST']['input'];
  jobType: Scalars['String']['input'];
  location: Scalars['String']['input'];
  niceToHave?: InputMaybe<Array<Scalars['String']['input']>>;
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  responsibilities?: InputMaybe<Array<Scalars['String']['input']>>;
  slug: Scalars['String']['input'];
  summary: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JobCreateManyInlineInput = {
  /** Connect multiple existing Job documents */
  connect?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Create and connect multiple existing Job documents */
  create?: InputMaybe<Array<JobCreateInput>>;
};

export type JobCreateOneInlineInput = {
  /** Connect one existing Job document */
  connect?: InputMaybe<JobWhereUniqueInput>;
  /** Create and connect one Job document */
  create?: InputMaybe<JobCreateInput>;
};

/** An edge in a connection. */
export type JobEdge = {
  __typename?: 'JobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Job;
};

export type JobList = Entity & {
  __typename?: 'JobList';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  jobs: Array<Job>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type JobListJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobWhereInput>;
};

export type JobListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: JobListWhereUniqueInput;
};

/** A connection to a list of items. */
export type JobListConnection = {
  __typename?: 'JobListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<JobListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type JobListCreateInput = {
  jobs?: InputMaybe<JobCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JobListCreateManyInlineInput = {
  /** Create and connect multiple existing JobList documents */
  create?: InputMaybe<Array<JobListCreateInput>>;
};

export type JobListCreateOneInlineInput = {
  /** Create and connect one JobList document */
  create?: InputMaybe<JobListCreateInput>;
};

export type JobListCreateWithPositionInput = {
  /** Document to create */
  data: JobListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type JobListEdge = {
  __typename?: 'JobListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: JobList;
};

/** Identifies documents */
export type JobListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type JobListOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type JobListParent = Page | PageVariant;

export type JobListParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type JobListParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type JobListParentCreateManyInlineInput = {
  /** Connect multiple existing JobListParent documents */
  connect?: InputMaybe<Array<JobListParentWhereUniqueInput>>;
  /** Create and connect multiple existing JobListParent documents */
  create?: InputMaybe<Array<JobListParentCreateInput>>;
};

export type JobListParentCreateOneInlineInput = {
  /** Connect one existing JobListParent document */
  connect?: InputMaybe<JobListParentWhereUniqueInput>;
  /** Create and connect one JobListParent document */
  create?: InputMaybe<JobListParentCreateInput>;
};

export type JobListParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type JobListParentUpdateManyInlineInput = {
  /** Connect multiple existing JobListParent documents */
  connect?: InputMaybe<Array<JobListParentConnectInput>>;
  /** Create and connect multiple JobListParent documents */
  create?: InputMaybe<Array<JobListParentCreateInput>>;
  /** Delete multiple JobListParent documents */
  delete?: InputMaybe<Array<JobListParentWhereUniqueInput>>;
  /** Disconnect multiple JobListParent documents */
  disconnect?: InputMaybe<Array<JobListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing JobListParent documents */
  set?: InputMaybe<Array<JobListParentWhereUniqueInput>>;
  /** Update multiple JobListParent documents */
  update?: InputMaybe<Array<JobListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple JobListParent documents */
  upsert?: InputMaybe<Array<JobListParentUpsertWithNestedWhereUniqueInput>>;
};

export type JobListParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type JobListParentUpdateOneInlineInput = {
  /** Connect existing JobListParent document */
  connect?: InputMaybe<JobListParentWhereUniqueInput>;
  /** Create and connect one JobListParent document */
  create?: InputMaybe<JobListParentCreateInput>;
  /** Delete currently connected JobListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected JobListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single JobListParent document */
  update?: InputMaybe<JobListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobListParent document */
  upsert?: InputMaybe<JobListParentUpsertWithNestedWhereUniqueInput>;
};

export type JobListParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type JobListParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type JobListParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type JobListParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type JobListUpdateInput = {
  jobs?: InputMaybe<JobUpdateManyInlineInput>;
};

export type JobListUpdateManyInlineInput = {
  /** Create and connect multiple JobList component instances */
  create?: InputMaybe<Array<JobListCreateWithPositionInput>>;
  /** Delete multiple JobList documents */
  delete?: InputMaybe<Array<JobListWhereUniqueInput>>;
  /** Update multiple JobList component instances */
  update?: InputMaybe<Array<JobListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple JobList component instances */
  upsert?: InputMaybe<Array<JobListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type JobListUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type JobListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: JobListUpdateManyInput;
  /** Document search */
  where: JobListWhereInput;
};

export type JobListUpdateOneInlineInput = {
  /** Create and connect one JobList document */
  create?: InputMaybe<JobListCreateInput>;
  /** Delete currently connected JobList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single JobList document */
  update?: InputMaybe<JobListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobList document */
  upsert?: InputMaybe<JobListUpsertWithNestedWhereUniqueInput>;
};

export type JobListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<JobListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: JobListWhereUniqueInput;
};

export type JobListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: JobListUpdateInput;
  /** Unique document search */
  where: JobListWhereUniqueInput;
};

export type JobListUpsertInput = {
  /** Create document if it didn't exist */
  create: JobListCreateInput;
  /** Update document if it exists */
  update: JobListUpdateInput;
};

export type JobListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<JobListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: JobListWhereUniqueInput;
};

export type JobListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: JobListUpsertInput;
  /** Unique document search */
  where: JobListWhereUniqueInput;
};

/** Identifies documents */
export type JobListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References JobList record uniquely */
export type JobListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type JobManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  department?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  department_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  department_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  department_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  department_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  department_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  department_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  department_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  department_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  department_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<JobWhereStageInput>;
  documentInStages_none?: InputMaybe<JobWhereStageInput>;
  documentInStages_some?: InputMaybe<JobWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jobType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jobType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jobType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jobType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jobType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jobType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jobType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jobType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jobType_starts_with?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  niceToHave?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  niceToHave_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  niceToHave_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  niceToHave_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  niceToHave_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  requirements_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  requirements_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  requirements_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  requirements_not?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  responsibilities?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  responsibilities_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  responsibilities_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  responsibilities_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  responsibilities_not?: InputMaybe<Array<Scalars['String']['input']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  summary_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  summary_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  summary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  summary_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type JobOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'department_ASC'
  | 'department_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'jobType_ASC'
  | 'jobType_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'niceToHave_ASC'
  | 'niceToHave_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'requirements_ASC'
  | 'requirements_DESC'
  | 'responsibilities_ASC'
  | 'responsibilities_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'summary_ASC'
  | 'summary_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type JobUpdateInput = {
  cmm983n3b013j08vz0aa24k0z?: InputMaybe<JobListUpdateManyInlineInput>;
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  jobType?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  niceToHave?: InputMaybe<Array<Scalars['String']['input']>>;
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  responsibilities?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobUpdateManyInlineInput = {
  /** Connect multiple existing Job documents */
  connect?: InputMaybe<Array<JobConnectInput>>;
  /** Create and connect multiple Job documents */
  create?: InputMaybe<Array<JobCreateInput>>;
  /** Delete multiple Job documents */
  delete?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Disconnect multiple Job documents */
  disconnect?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Job documents */
  set?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Update multiple Job documents */
  update?: InputMaybe<Array<JobUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Job documents */
  upsert?: InputMaybe<Array<JobUpsertWithNestedWhereUniqueInput>>;
};

export type JobUpdateManyInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  jobType?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  niceToHave?: InputMaybe<Array<Scalars['String']['input']>>;
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  responsibilities?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: JobUpdateManyInput;
  /** Document search */
  where: JobWhereInput;
};

export type JobUpdateOneInlineInput = {
  /** Connect existing Job document */
  connect?: InputMaybe<JobWhereUniqueInput>;
  /** Create and connect one Job document */
  create?: InputMaybe<JobCreateInput>;
  /** Delete currently connected Job document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Job document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Job document */
  update?: InputMaybe<JobUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Job document */
  upsert?: InputMaybe<JobUpsertWithNestedWhereUniqueInput>;
};

export type JobUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: JobUpdateInput;
  /** Unique document search */
  where: JobWhereUniqueInput;
};

export type JobUpsertInput = {
  /** Create document if it didn't exist */
  create: JobCreateInput;
  /** Update document if it exists */
  update: JobUpdateInput;
};

export type JobUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: JobUpsertInput;
  /** Unique document search */
  where: JobWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type JobWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type JobWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  department?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  department_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  department_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  department_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  department_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  department_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  department_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  department_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  department_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  department_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<JobWhereStageInput>;
  documentInStages_none?: InputMaybe<JobWhereStageInput>;
  documentInStages_some?: InputMaybe<JobWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jobType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jobType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jobType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jobType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jobType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jobType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jobType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jobType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jobType_starts_with?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  niceToHave?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  niceToHave_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  niceToHave_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  niceToHave_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  niceToHave_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  requirements_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  requirements_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  requirements_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  requirements_not?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  responsibilities?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  responsibilities_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  responsibilities_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  responsibilities_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  responsibilities_not?: InputMaybe<Array<Scalars['String']['input']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  summary_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  summary_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  summary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  summary_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type JobWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<JobWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Job record uniquely */
export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Locale system enumeration */
export type Locale =
  /** German locale for German-speaking markets */
  | 'de'
  /** System locale */
  | 'en';

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one article */
  createArticle?: Maybe<Article>;
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one feature */
  createFeature?: Maybe<Feature>;
  /** Create one job */
  createJob?: Maybe<Job>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one segment */
  createSegment?: Maybe<Segment>;
  /** Create one siteSettings */
  createSiteSettings?: Maybe<SiteSettings>;
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one feature from _all_ existing stages. Returns deleted document. */
  deleteFeature?: Maybe<Feature>;
  /** Delete one job from _all_ existing stages. Returns deleted document. */
  deleteJob?: Maybe<Job>;
  /**
   * Delete many SiteSettings documents
   * @deprecated Please use the new paginated many mutation (deleteManyAllSiteSettingsConnection)
   */
  deleteManyAllSiteSettings: BatchPayload;
  /** Delete many SiteSettings documents, return deleted documents */
  deleteManyAllSiteSettingsConnection: SiteSettingsConnection;
  /**
   * Delete many Article documents
   * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
   */
  deleteManyArticles: BatchPayload;
  /** Delete many Article documents, return deleted documents */
  deleteManyArticlesConnection: ArticleConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Feature documents
   * @deprecated Please use the new paginated many mutation (deleteManyFeaturesConnection)
   */
  deleteManyFeatures: BatchPayload;
  /** Delete many Feature documents, return deleted documents */
  deleteManyFeaturesConnection: FeatureConnection;
  /**
   * Delete many Job documents
   * @deprecated Please use the new paginated many mutation (deleteManyJobsConnection)
   */
  deleteManyJobs: BatchPayload;
  /** Delete many Job documents, return deleted documents */
  deleteManyJobsConnection: JobConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Segment documents
   * @deprecated Please use the new paginated many mutation (deleteManySegmentsConnection)
   */
  deleteManySegments: BatchPayload;
  /** Delete many Segment documents, return deleted documents */
  deleteManySegmentsConnection: SegmentConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one segment from _all_ existing stages. Returns deleted document. */
  deleteSegment?: Maybe<Segment>;
  /** Delete one siteSettings from _all_ existing stages. Returns deleted document. */
  deleteSiteSettings?: Maybe<SiteSettings>;
  /** Publish one article */
  publishArticle?: Maybe<Article>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one feature */
  publishFeature?: Maybe<Feature>;
  /** Publish one job */
  publishJob?: Maybe<Job>;
  /**
   * Publish many SiteSettings documents
   * @deprecated Please use the new paginated many mutation (publishManyAllSiteSettingsConnection)
   */
  publishManyAllSiteSettings: BatchPayload;
  /** Publish many SiteSettings documents */
  publishManyAllSiteSettingsConnection: SiteSettingsConnection;
  /**
   * Publish many Article documents
   * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
   */
  publishManyArticles: BatchPayload;
  /** Publish many Article documents */
  publishManyArticlesConnection: ArticleConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Feature documents
   * @deprecated Please use the new paginated many mutation (publishManyFeaturesConnection)
   */
  publishManyFeatures: BatchPayload;
  /** Publish many Feature documents */
  publishManyFeaturesConnection: FeatureConnection;
  /**
   * Publish many Job documents
   * @deprecated Please use the new paginated many mutation (publishManyJobsConnection)
   */
  publishManyJobs: BatchPayload;
  /** Publish many Job documents */
  publishManyJobsConnection: JobConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /** Publish many PageVariant documents */
  publishManyPageVariantsConnection: PageVariantConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Segment documents
   * @deprecated Please use the new paginated many mutation (publishManySegmentsConnection)
   */
  publishManySegments: BatchPayload;
  /** Publish many Segment documents */
  publishManySegmentsConnection: SegmentConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one pageVariant */
  publishPageVariant?: Maybe<PageVariant>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one segment */
  publishSegment?: Maybe<Segment>;
  /** Publish one siteSettings */
  publishSiteSettings?: Maybe<SiteSettings>;
  /** Schedule to publish one article */
  schedulePublishArticle?: Maybe<Article>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one feature */
  schedulePublishFeature?: Maybe<Feature>;
  /** Schedule to publish one job */
  schedulePublishJob?: Maybe<Job>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one pageVariant */
  schedulePublishPageVariant?: Maybe<PageVariant>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one segment */
  schedulePublishSegment?: Maybe<Segment>;
  /** Schedule to publish one siteSettings */
  schedulePublishSiteSettings?: Maybe<SiteSettings>;
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishArticle?: Maybe<Article>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one feature from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFeature?: Maybe<Feature>;
  /** Unpublish one job from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishJob?: Maybe<Job>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one pageVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPageVariant?: Maybe<PageVariant>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one segment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSegment?: Maybe<Segment>;
  /** Unpublish one siteSettings from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSiteSettings?: Maybe<SiteSettings>;
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one feature from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFeature?: Maybe<Feature>;
  /** Unpublish one job from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishJob?: Maybe<Job>;
  /**
   * Unpublish many SiteSettings documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAllSiteSettingsConnection)
   */
  unpublishManyAllSiteSettings: BatchPayload;
  /** Find many SiteSettings documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAllSiteSettingsConnection: SiteSettingsConnection;
  /**
   * Unpublish many Article documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
   */
  unpublishManyArticles: BatchPayload;
  /** Find many Article documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArticlesConnection: ArticleConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Feature documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFeaturesConnection)
   */
  unpublishManyFeatures: BatchPayload;
  /** Find many Feature documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFeaturesConnection: FeatureConnection;
  /**
   * Unpublish many Job documents
   * @deprecated Please use the new paginated many mutation (unpublishManyJobsConnection)
   */
  unpublishManyJobs: BatchPayload;
  /** Find many Job documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyJobsConnection: JobConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /** Find many PageVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPageVariantsConnection: PageVariantConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Segment documents
   * @deprecated Please use the new paginated many mutation (unpublishManySegmentsConnection)
   */
  unpublishManySegments: BatchPayload;
  /** Find many Segment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySegmentsConnection: SegmentConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one pageVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPageVariant?: Maybe<PageVariant>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one segment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSegment?: Maybe<Segment>;
  /** Unpublish one siteSettings from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSiteSettings?: Maybe<SiteSettings>;
  /** Update one article */
  updateArticle?: Maybe<Article>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one feature */
  updateFeature?: Maybe<Feature>;
  /** Update one job */
  updateJob?: Maybe<Job>;
  /**
   * Update many allSiteSettings
   * @deprecated Please use the new paginated many mutation (updateManyAllSiteSettingsConnection)
   */
  updateManyAllSiteSettings: BatchPayload;
  /** Update many SiteSettings documents */
  updateManyAllSiteSettingsConnection: SiteSettingsConnection;
  /**
   * Update many articles
   * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
   */
  updateManyArticles: BatchPayload;
  /** Update many Article documents */
  updateManyArticlesConnection: ArticleConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many features
   * @deprecated Please use the new paginated many mutation (updateManyFeaturesConnection)
   */
  updateManyFeatures: BatchPayload;
  /** Update many Feature documents */
  updateManyFeaturesConnection: FeatureConnection;
  /**
   * Update many jobs
   * @deprecated Please use the new paginated many mutation (updateManyJobsConnection)
   */
  updateManyJobs: BatchPayload;
  /** Update many Job documents */
  updateManyJobsConnection: JobConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many segments
   * @deprecated Please use the new paginated many mutation (updateManySegmentsConnection)
   */
  updateManySegments: BatchPayload;
  /** Update many Segment documents */
  updateManySegmentsConnection: SegmentConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one segment */
  updateSegment?: Maybe<Segment>;
  /** Update one siteSettings */
  updateSiteSettings?: Maybe<SiteSettings>;
  /** Upsert one article */
  upsertArticle?: Maybe<Article>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one feature */
  upsertFeature?: Maybe<Feature>;
  /** Upsert one job */
  upsertJob?: Maybe<Job>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one segment */
  upsertSegment?: Maybe<Segment>;
  /** Upsert one siteSettings */
  upsertSiteSettings?: Maybe<SiteSettings>;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateFeatureArgs = {
  data: FeatureCreateInput;
};


export type MutationCreateJobArgs = {
  data: JobCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSegmentArgs = {
  data: SegmentCreateInput;
};


export type MutationCreateSiteSettingsArgs = {
  data: SiteSettingsCreateInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type MutationDeleteJobArgs = {
  where: JobWhereUniqueInput;
};


export type MutationDeleteManyAllSiteSettingsArgs = {
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationDeleteManyAllSiteSettingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationDeleteManyArticlesArgs = {
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationDeleteManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyFeaturesArgs = {
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationDeleteManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationDeleteManyJobsArgs = {
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationDeleteManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManySegmentsArgs = {
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationDeleteManySegmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSegmentArgs = {
  where: SegmentWhereUniqueInput;
};


export type MutationDeleteSiteSettingsArgs = {
  where: SiteSettingsWhereUniqueInput;
};


export type MutationPublishArticleArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: ArticleWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishFeatureArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: FeatureWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishJobArgs = {
  to?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationPublishManyAllSiteSettingsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAllSiteSettingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyArticlesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ArticleManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ArticleManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFeaturesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeatureManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeatureManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyJobsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationPublishManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPageVariantsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageVariantManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyProductsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManySegmentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationPublishManySegmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPageVariantArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PageVariantWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishSegmentArgs = {
  to?: Array<Stage>;
  where: SegmentWhereUniqueInput;
};


export type MutationPublishSiteSettingsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: SiteSettingsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishArticleArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ArticleWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishFeatureArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FeatureWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishJobArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageVariantArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageVariantWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishSegmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SegmentWhereUniqueInput;
};


export type MutationSchedulePublishSiteSettingsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SiteSettingsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationScheduleUnpublishArticleArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ArticleWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishFeatureArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FeatureWhereUniqueInput;
};


export type MutationScheduleUnpublishJobArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: JobWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPageVariantArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageVariantWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishSegmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SegmentWhereUniqueInput;
};


export type MutationScheduleUnpublishSiteSettingsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: SiteSettingsWhereUniqueInput;
};


export type MutationUnpublishArticleArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ArticleWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishFeatureArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FeatureWhereUniqueInput;
};


export type MutationUnpublishJobArgs = {
  from?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationUnpublishManyAllSiteSettingsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationUnpublishManyAllSiteSettingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationUnpublishManyArticlesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationUnpublishManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyFeaturesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUnpublishManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUnpublishManyJobsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUnpublishManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPageVariantsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageVariantManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManySegmentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationUnpublishManySegmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPageVariantArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageVariantWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishSegmentArgs = {
  from?: Array<Stage>;
  where: SegmentWhereUniqueInput;
};


export type MutationUnpublishSiteSettingsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: SiteSettingsWhereUniqueInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateFeatureArgs = {
  data: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpdateJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpdateManyAllSiteSettingsArgs = {
  data: SiteSettingsUpdateManyInput;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationUpdateManyAllSiteSettingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SiteSettingsUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteSettingsManyWhereInput>;
};


export type MutationUpdateManyArticlesArgs = {
  data: ArticleUpdateManyInput;
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationUpdateManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ArticleUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyFeaturesArgs = {
  data: FeatureUpdateManyInput;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUpdateManyFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FeatureUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureManyWhereInput>;
};


export type MutationUpdateManyJobsArgs = {
  data: JobUpdateManyInput;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUpdateManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: JobUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManySegmentsArgs = {
  data: SegmentUpdateManyInput;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationUpdateManySegmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SegmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SegmentManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSegmentArgs = {
  data: SegmentUpdateInput;
  where: SegmentWhereUniqueInput;
};


export type MutationUpdateSiteSettingsArgs = {
  data: SiteSettingsUpdateInput;
  where: SiteSettingsWhereUniqueInput;
};


export type MutationUpsertArticleArgs = {
  upsert: ArticleUpsertInput;
  where: ArticleWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertFeatureArgs = {
  upsert: FeatureUpsertInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpsertJobArgs = {
  upsert: JobUpsertInput;
  where: JobWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertSegmentArgs = {
  upsert: SegmentUpsertInput;
  where: SegmentWhereUniqueInput;
};


export type MutationUpsertSiteSettingsArgs = {
  upsert: SiteSettingsUpsertInput;
  where: SiteSettingsWhereUniqueInput;
};

/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Navigation identifier (e.g., "main-nav", "footer-nav") */
  identifier: Scalars['String']['output'];
  /** Navigation items (can be nested for dropdown menus) */
  items: Array<NavigationItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Site navigation structure (e.g., main-nav, footer-nav, mobile-nav) */
export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  identifier: Scalars['String']['input'];
  items: NavigationItemCreateManyInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NavigationCreateLocalizationsInput>;
  siteSettingsFooter?: InputMaybe<SiteSettingsCreateManyInlineInput>;
  siteSettingsMain?: InputMaybe<SiteSettingsCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateLocalizationInput = {
  /** Localization input */
  data: NavigationCreateLocalizationDataInput;
  locale: Locale;
};

export type NavigationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NavigationCreateLocalizationInput>>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Individual navigation link (nestable for dropdown menus) */
export type NavigationItem = Entity & {
  __typename?: 'NavigationItem';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Link text */
  label: Scalars['String']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<NavigationItem>;
  /** Link to a page (required if linkType=PAGE) */
  pageLink?: Maybe<Page>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Individual navigation link (nestable for dropdown menus) */
export type NavigationItemLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Individual navigation link (nestable for dropdown menus) */
export type NavigationItemPageLinkArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Individual navigation link (nestable for dropdown menus) */
export type NavigationItemUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type NavigationItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationItemCreateInput = {
  /** label input for default locale (en) */
  label: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NavigationItemCreateLocalizationsInput>;
  pageLink?: InputMaybe<PageCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationItemCreateLocalizationDataInput = {
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationItemCreateLocalizationInput = {
  /** Localization input */
  data: NavigationItemCreateLocalizationDataInput;
  locale: Locale;
};

export type NavigationItemCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NavigationItemCreateLocalizationInput>>;
};

export type NavigationItemCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationItem documents */
  create?: InputMaybe<Array<NavigationItemCreateInput>>;
};

export type NavigationItemCreateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
};

export type NavigationItemCreateWithPositionInput = {
  /** Document to create */
  data: NavigationItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavigationItemEdge = {
  __typename?: 'NavigationItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NavigationItem;
};

/** Identifies documents */
export type NavigationItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageLink?: InputMaybe<PageWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NavigationItemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'label_ASC'
  | 'label_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type NavigationItemParent = Navigation;

export type NavigationItemParentConnectInput = {
  Navigation?: InputMaybe<NavigationConnectInput>;
};

export type NavigationItemParentCreateInput = {
  Navigation?: InputMaybe<NavigationCreateInput>;
};

export type NavigationItemParentCreateManyInlineInput = {
  /** Connect multiple existing NavigationItemParent documents */
  connect?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing NavigationItemParent documents */
  create?: InputMaybe<Array<NavigationItemParentCreateInput>>;
};

export type NavigationItemParentCreateOneInlineInput = {
  /** Connect one existing NavigationItemParent document */
  connect?: InputMaybe<NavigationItemParentWhereUniqueInput>;
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>;
};

export type NavigationItemParentUpdateInput = {
  Navigation?: InputMaybe<NavigationUpdateInput>;
};

export type NavigationItemParentUpdateManyInlineInput = {
  /** Connect multiple existing NavigationItemParent documents */
  connect?: InputMaybe<Array<NavigationItemParentConnectInput>>;
  /** Create and connect multiple NavigationItemParent documents */
  create?: InputMaybe<Array<NavigationItemParentCreateInput>>;
  /** Delete multiple NavigationItemParent documents */
  delete?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Disconnect multiple NavigationItemParent documents */
  disconnect?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavigationItemParent documents */
  set?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Update multiple NavigationItemParent documents */
  update?: InputMaybe<Array<NavigationItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavigationItemParent documents */
  upsert?: InputMaybe<Array<NavigationItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationItemParentUpdateManyWithNestedWhereInput = {
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type NavigationItemParentUpdateOneInlineInput = {
  /** Connect existing NavigationItemParent document */
  connect?: InputMaybe<NavigationItemParentWhereUniqueInput>;
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>;
  /** Delete currently connected NavigationItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NavigationItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationItemParent document */
  update?: InputMaybe<NavigationItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationItemParent document */
  upsert?: InputMaybe<NavigationItemParentUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemParentUpdateWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type NavigationItemParentUpsertWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemParentWhereInput = {
  Navigation?: InputMaybe<NavigationWhereInput>;
};

export type NavigationItemParentWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
};

export type NavigationItemUpdateInput = {
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NavigationItemUpdateLocalizationsInput>;
  pageLink?: InputMaybe<PageUpdateOneInlineInput>;
};

export type NavigationItemUpdateLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationItemUpdateLocalizationInput = {
  data: NavigationItemUpdateLocalizationDataInput;
  locale: Locale;
};

export type NavigationItemUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NavigationItemCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NavigationItemUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NavigationItemUpsertLocalizationInput>>;
};

export type NavigationItemUpdateManyInlineInput = {
  /** Create and connect multiple NavigationItem component instances */
  create?: InputMaybe<Array<NavigationItemCreateWithPositionInput>>;
  /** Delete multiple NavigationItem documents */
  delete?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Update multiple NavigationItem component instances */
  update?: InputMaybe<Array<NavigationItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavigationItem component instances */
  upsert?: InputMaybe<Array<NavigationItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationItemUpdateManyInput = {
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NavigationItemUpdateManyLocalizationsInput>;
};

export type NavigationItemUpdateManyLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationItemUpdateManyLocalizationInput = {
  data: NavigationItemUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NavigationItemUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NavigationItemUpdateManyLocalizationInput>>;
};

export type NavigationItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationItemUpdateManyInput;
  /** Document search */
  where: NavigationItemWhereInput;
};

export type NavigationItemUpdateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
  /** Delete currently connected NavigationItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationItem document */
  update?: InputMaybe<NavigationItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationItem document */
  upsert?: InputMaybe<NavigationItemUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavigationItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationItemUpdateInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationItemCreateInput;
  /** Update document if it exists */
  update: NavigationItemUpdateInput;
};

export type NavigationItemUpsertLocalizationInput = {
  create: NavigationItemCreateLocalizationDataInput;
  locale: Locale;
  update: NavigationItemUpdateLocalizationDataInput;
};

export type NavigationItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavigationItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationItemUpsertInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

/** Identifies documents */
export type NavigationItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageLink?: InputMaybe<PageWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References NavigationItem record uniquely */
export type NavigationItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  identifier_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']['input']>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type NavigationOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'identifier_ASC'
  | 'identifier_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type NavigationUpdateInput = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<NavigationUpdateLocalizationsInput>;
  siteSettingsFooter?: InputMaybe<SiteSettingsUpdateManyInlineInput>;
  siteSettingsMain?: InputMaybe<SiteSettingsUpdateManyInlineInput>;
};

export type NavigationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NavigationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  identifier_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']['input']>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Office location with contact details */
export type Office = Entity & {
  __typename?: 'Office';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OfficeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OfficeWhereUniqueInput;
};

/** A connection to a list of items. */
export type OfficeConnection = {
  __typename?: 'OfficeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OfficeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OfficeCreateInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OfficeCreateManyInlineInput = {
  /** Create and connect multiple existing Office documents */
  create?: InputMaybe<Array<OfficeCreateInput>>;
};

export type OfficeCreateOneInlineInput = {
  /** Create and connect one Office document */
  create?: InputMaybe<OfficeCreateInput>;
};

export type OfficeCreateWithPositionInput = {
  /** Document to create */
  data: OfficeCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type OfficeEdge = {
  __typename?: 'OfficeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Office;
};

/** Identifies documents */
export type OfficeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OfficeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OfficeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OfficeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type OfficeOrderByInput =
  | 'address_ASC'
  | 'address_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type OfficeParent = ContactSection;

export type OfficeParentConnectInput = {
  ContactSection?: InputMaybe<ContactSectionConnectInput>;
};

export type OfficeParentCreateInput = {
  ContactSection?: InputMaybe<ContactSectionCreateInput>;
};

export type OfficeParentCreateManyInlineInput = {
  /** Create and connect multiple existing OfficeParent documents */
  create?: InputMaybe<Array<OfficeParentCreateInput>>;
};

export type OfficeParentCreateOneInlineInput = {
  /** Create and connect one OfficeParent document */
  create?: InputMaybe<OfficeParentCreateInput>;
};

export type OfficeParentCreateWithPositionInput = {
  ContactSection?: InputMaybe<ContactSectionCreateWithPositionInput>;
};

export type OfficeParentUpdateInput = {
  ContactSection?: InputMaybe<ContactSectionUpdateInput>;
};

export type OfficeParentUpdateManyInlineInput = {
  /** Create and connect multiple OfficeParent component instances */
  create?: InputMaybe<Array<OfficeParentCreateWithPositionInput>>;
  /** Delete multiple OfficeParent documents */
  delete?: InputMaybe<Array<OfficeParentWhereUniqueInput>>;
  /** Update multiple OfficeParent component instances */
  update?: InputMaybe<Array<OfficeParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple OfficeParent component instances */
  upsert?: InputMaybe<Array<OfficeParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type OfficeParentUpdateManyWithNestedWhereInput = {
  ContactSection?: InputMaybe<ContactSectionUpdateManyWithNestedWhereInput>;
};

export type OfficeParentUpdateOneInlineInput = {
  /** Create and connect one OfficeParent document */
  create?: InputMaybe<OfficeParentCreateInput>;
  /** Delete currently connected OfficeParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single OfficeParent document */
  update?: InputMaybe<OfficeParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OfficeParent document */
  upsert?: InputMaybe<OfficeParentUpsertWithNestedWhereUniqueInput>;
};

export type OfficeParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type OfficeParentUpdateWithNestedWhereUniqueInput = {
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueInput>;
};

export type OfficeParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type OfficeParentUpsertWithNestedWhereUniqueInput = {
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueInput>;
};

export type OfficeParentWhereInput = {
  ContactSection?: InputMaybe<ContactSectionWhereInput>;
};

export type OfficeParentWhereUniqueInput = {
  ContactSection?: InputMaybe<ContactSectionWhereUniqueInput>;
};

export type OfficeUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type OfficeUpdateManyInlineInput = {
  /** Create and connect multiple Office component instances */
  create?: InputMaybe<Array<OfficeCreateWithPositionInput>>;
  /** Delete multiple Office documents */
  delete?: InputMaybe<Array<OfficeWhereUniqueInput>>;
  /** Update multiple Office component instances */
  update?: InputMaybe<Array<OfficeUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Office component instances */
  upsert?: InputMaybe<Array<OfficeUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type OfficeUpdateManyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type OfficeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OfficeUpdateManyInput;
  /** Document search */
  where: OfficeWhereInput;
};

export type OfficeUpdateOneInlineInput = {
  /** Create and connect one Office document */
  create?: InputMaybe<OfficeCreateInput>;
  /** Delete currently connected Office document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Office document */
  update?: InputMaybe<OfficeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Office document */
  upsert?: InputMaybe<OfficeUpsertWithNestedWhereUniqueInput>;
};

export type OfficeUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<OfficeUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OfficeWhereUniqueInput;
};

export type OfficeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OfficeUpdateInput;
  /** Unique document search */
  where: OfficeWhereUniqueInput;
};

export type OfficeUpsertInput = {
  /** Create document if it didn't exist */
  create: OfficeCreateInput;
  /** Update document if it exists */
  update: OfficeUpdateInput;
};

export type OfficeUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<OfficeUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OfficeWhereUniqueInput;
};

export type OfficeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OfficeUpsertInput;
  /** Unique document search */
  where: OfficeWhereUniqueInput;
};

/** Identifies documents */
export type OfficeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OfficeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OfficeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OfficeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Office record uniquely */
export type OfficeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Top-level page container with flexible section composition */
export type Page = Entity & Node & {
  __typename?: 'Page';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Drag-and-drop page sections. Add, remove, and reorder as needed. Use variants to show different sections per audience. */
  sections: Array<PagesectionsUnion>;
  /** SEO metadata for this page */
  seo?: Maybe<Seo>;
  /** URL slug for this page. Must be globally unique (not localized). */
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** Internal page title for content management (not displayed on site) */
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /**
   *
   *           This field links the variant model to the main model. It is used to fetch the variants of a model.
   *
   */
  variants: Array<PageVariant>;
};


/** Top-level page container with flexible section composition */
export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Top-level page container with flexible section composition */
export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Top-level page container with flexible section composition */
export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Top-level page container with flexible section composition */
export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Top-level page container with flexible section composition */
export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Top-level page container with flexible section composition */
export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Top-level page container with flexible section composition */
export type PageSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Top-level page container with flexible section composition */
export type PageSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Top-level page container with flexible section composition */
export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageVariantOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageVariantWhereInput>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  navigationItems?: InputMaybe<NavigationItemCreateManyInlineInput>;
  sections?: InputMaybe<PagesectionsUnionCreateManyInlineInput>;
  seo?: InputMaybe<SeoCreateOneInlineInput>;
  slug: Scalars['String']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variants?: InputMaybe<PageVariantCreateManyInlineInput>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

export type PageHeader = Entity & {
  __typename?: 'PageHeader';
  eyebrow?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PageHeader>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageHeaderLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PageHeaderUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageHeaderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageHeaderWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageHeaderConnection = {
  __typename?: 'PageHeaderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageHeaderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageHeaderCreateInput = {
  /** eyebrow input for default locale (en) */
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageHeaderCreateLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageHeaderCreateLocalizationDataInput = {
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageHeaderCreateLocalizationInput = {
  /** Localization input */
  data: PageHeaderCreateLocalizationDataInput;
  locale: Locale;
};

export type PageHeaderCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageHeaderCreateLocalizationInput>>;
};

export type PageHeaderCreateManyInlineInput = {
  /** Create and connect multiple existing PageHeader documents */
  create?: InputMaybe<Array<PageHeaderCreateInput>>;
};

export type PageHeaderCreateOneInlineInput = {
  /** Create and connect one PageHeader document */
  create?: InputMaybe<PageHeaderCreateInput>;
};

export type PageHeaderCreateWithPositionInput = {
  /** Document to create */
  data: PageHeaderCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageHeaderEdge = {
  __typename?: 'PageHeaderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageHeader;
};

/** Identifies documents */
export type PageHeaderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type PageHeaderOrderByInput =
  | 'eyebrow_ASC'
  | 'eyebrow_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'subtitle_ASC'
  | 'subtitle_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type PageHeaderParent = Page | PageVariant;

export type PageHeaderParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type PageHeaderParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type PageHeaderParentCreateManyInlineInput = {
  /** Connect multiple existing PageHeaderParent documents */
  connect?: InputMaybe<Array<PageHeaderParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageHeaderParent documents */
  create?: InputMaybe<Array<PageHeaderParentCreateInput>>;
};

export type PageHeaderParentCreateOneInlineInput = {
  /** Connect one existing PageHeaderParent document */
  connect?: InputMaybe<PageHeaderParentWhereUniqueInput>;
  /** Create and connect one PageHeaderParent document */
  create?: InputMaybe<PageHeaderParentCreateInput>;
};

export type PageHeaderParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type PageHeaderParentUpdateManyInlineInput = {
  /** Connect multiple existing PageHeaderParent documents */
  connect?: InputMaybe<Array<PageHeaderParentConnectInput>>;
  /** Create and connect multiple PageHeaderParent documents */
  create?: InputMaybe<Array<PageHeaderParentCreateInput>>;
  /** Delete multiple PageHeaderParent documents */
  delete?: InputMaybe<Array<PageHeaderParentWhereUniqueInput>>;
  /** Disconnect multiple PageHeaderParent documents */
  disconnect?: InputMaybe<Array<PageHeaderParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageHeaderParent documents */
  set?: InputMaybe<Array<PageHeaderParentWhereUniqueInput>>;
  /** Update multiple PageHeaderParent documents */
  update?: InputMaybe<Array<PageHeaderParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageHeaderParent documents */
  upsert?: InputMaybe<Array<PageHeaderParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageHeaderParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type PageHeaderParentUpdateOneInlineInput = {
  /** Connect existing PageHeaderParent document */
  connect?: InputMaybe<PageHeaderParentWhereUniqueInput>;
  /** Create and connect one PageHeaderParent document */
  create?: InputMaybe<PageHeaderParentCreateInput>;
  /** Delete currently connected PageHeaderParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageHeaderParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageHeaderParent document */
  update?: InputMaybe<PageHeaderParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageHeaderParent document */
  upsert?: InputMaybe<PageHeaderParentUpsertWithNestedWhereUniqueInput>;
};

export type PageHeaderParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type PageHeaderParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type PageHeaderParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type PageHeaderParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type PageHeaderUpdateInput = {
  /** eyebrow input for default locale (en) */
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageHeaderUpdateLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeaderUpdateLocalizationDataInput = {
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeaderUpdateLocalizationInput = {
  data: PageHeaderUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageHeaderUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageHeaderCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageHeaderUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageHeaderUpsertLocalizationInput>>;
};

export type PageHeaderUpdateManyInlineInput = {
  /** Create and connect multiple PageHeader component instances */
  create?: InputMaybe<Array<PageHeaderCreateWithPositionInput>>;
  /** Delete multiple PageHeader documents */
  delete?: InputMaybe<Array<PageHeaderWhereUniqueInput>>;
  /** Update multiple PageHeader component instances */
  update?: InputMaybe<Array<PageHeaderUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageHeader component instances */
  upsert?: InputMaybe<Array<PageHeaderUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageHeaderUpdateManyInput = {
  /** eyebrow input for default locale (en) */
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageHeaderUpdateManyLocalizationsInput>;
  /** subtitle input for default locale (en) */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeaderUpdateManyLocalizationDataInput = {
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeaderUpdateManyLocalizationInput = {
  data: PageHeaderUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageHeaderUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageHeaderUpdateManyLocalizationInput>>;
};

export type PageHeaderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageHeaderUpdateManyInput;
  /** Document search */
  where: PageHeaderWhereInput;
};

export type PageHeaderUpdateOneInlineInput = {
  /** Create and connect one PageHeader document */
  create?: InputMaybe<PageHeaderCreateInput>;
  /** Delete currently connected PageHeader document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageHeader document */
  update?: InputMaybe<PageHeaderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageHeader document */
  upsert?: InputMaybe<PageHeaderUpsertWithNestedWhereUniqueInput>;
};

export type PageHeaderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageHeaderUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageHeaderWhereUniqueInput;
};

export type PageHeaderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageHeaderUpdateInput;
  /** Unique document search */
  where: PageHeaderWhereUniqueInput;
};

export type PageHeaderUpsertInput = {
  /** Create document if it didn't exist */
  create: PageHeaderCreateInput;
  /** Update document if it exists */
  update: PageHeaderUpdateInput;
};

export type PageHeaderUpsertLocalizationInput = {
  create: PageHeaderCreateLocalizationDataInput;
  locale: Locale;
  update: PageHeaderUpdateLocalizationDataInput;
};

export type PageHeaderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageHeaderUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageHeaderWhereUniqueInput;
};

export type PageHeaderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageHeaderUpsertInput;
  /** Unique document search */
  where: PageHeaderWhereUniqueInput;
};

/** Identifies documents */
export type PageHeaderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageHeaderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  eyebrow_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  eyebrow_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  eyebrow_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  eyebrow_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References PageHeader record uniquely */
export type PageHeaderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PagesectionsUnionWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variants_every?: InputMaybe<PageVariantWhereInput>;
  variants_none?: InputMaybe<PageVariantWhereInput>;
  variants_some?: InputMaybe<PageVariantWhereInput>;
};

export type PageOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type PageUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  navigationItems?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  sections?: InputMaybe<PagesectionsUnionUpdateManyInlineInput>;
  seo?: InputMaybe<SeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<PageVariantUpdateManyInlineInput>;
};

export type PageUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Top-level page container with flexible section composition */
export type PageVariant = Entity & Node & {
  __typename?: 'PageVariant';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PageVariant>;
  /** List of PageVariant versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Drag-and-drop page sections. Add, remove, and reorder as needed. Use variants to show different sections per audience. */
  sections: Array<PagesectionsUnion>;
  /**
   *
   *           This field links the variant model to the segment model. It is used to fetch the segments of a variant.
   *
   */
  segments: Array<Segment>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Top-level page container with flexible section composition */
export type PageVariantCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageVariantDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Top-level page container with flexible section composition */
export type PageVariantHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Top-level page container with flexible section composition */
export type PageVariantPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Top-level page container with flexible section composition */
export type PageVariantScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Top-level page container with flexible section composition */
export type PageVariantSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Top-level page container with flexible section composition */
export type PageVariantSegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SegmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SegmentWhereInput>;
};


/** Top-level page container with flexible section composition */
export type PageVariantUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageVariantConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageVariantConnection = {
  __typename?: 'PageVariantConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageVariantCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageVariantCreateLocalizationsInput>;
  main?: InputMaybe<PageCreateOneInlineInput>;
  sections?: InputMaybe<PagesectionsUnionCreateManyInlineInput>;
  segments?: InputMaybe<SegmentCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVariantCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVariantCreateLocalizationInput = {
  /** Localization input */
  data: PageVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type PageVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageVariantCreateLocalizationInput>>;
};

export type PageVariantCreateManyInlineInput = {
  /** Create and connect multiple existing PageVariant documents */
  create?: InputMaybe<Array<PageVariantCreateInput>>;
};

export type PageVariantCreateOneInlineInput = {
  /** Create and connect one PageVariant document */
  create?: InputMaybe<PageVariantCreateInput>;
};

/** An edge in a connection. */
export type PageVariantEdge = {
  __typename?: 'PageVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageVariant;
};

/** Identifies documents */
export type PageVariantManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageVariantWhereStageInput>;
  documentInStages_none?: InputMaybe<PageVariantWhereStageInput>;
  documentInStages_some?: InputMaybe<PageVariantWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PagesectionsUnionWhereInput>;
  segments_every?: InputMaybe<SegmentWhereInput>;
  segments_none?: InputMaybe<SegmentWhereInput>;
  segments_some?: InputMaybe<SegmentWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type PageVariantOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type PageVariantUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<PageVariantUpdateLocalizationsInput>;
  main?: InputMaybe<PageUpdateOneInlineInput>;
  sections?: InputMaybe<PagesectionsUnionUpdateManyInlineInput>;
  segments?: InputMaybe<SegmentUpdateManyInlineInput>;
};

export type PageVariantUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageVariantCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type PageVariantUpdateManyInlineInput = {
  /** Create and connect multiple PageVariant documents */
  create?: InputMaybe<Array<PageVariantCreateInput>>;
  /** Delete multiple PageVariant documents */
  delete?: InputMaybe<Array<PageVariantWhereUniqueInput>>;
  /** Update multiple PageVariant documents */
  update?: InputMaybe<Array<PageVariantUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageVariant documents */
  upsert?: InputMaybe<Array<PageVariantUpsertWithNestedWhereUniqueInput>>;
};

export type PageVariantUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type PageVariantUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageVariantUpdateManyInput;
  /** Document search */
  where: PageVariantWhereInput;
};

export type PageVariantUpdateOneInlineInput = {
  /** Create and connect one PageVariant document */
  create?: InputMaybe<PageVariantCreateInput>;
  /** Delete currently connected PageVariant document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageVariant document */
  update?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageVariant document */
  upsert?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type PageVariantUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageVariantUpdateInput;
  /** Unique document search */
  where: PageVariantWhereUniqueInput;
};

export type PageVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: PageVariantCreateInput;
  /** Update document if it exists */
  update: PageVariantUpdateInput;
};

export type PageVariantUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageVariantUpsertInput;
  /** Unique document search */
  where: PageVariantWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageVariantWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageVariantWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageVariantWhereStageInput>;
  documentInStages_none?: InputMaybe<PageVariantWhereStageInput>;
  documentInStages_some?: InputMaybe<PageVariantWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PagesectionsUnionWhereInput>;
  segments_every?: InputMaybe<SegmentWhereInput>;
  segments_none?: InputMaybe<SegmentWhereInput>;
  segments_some?: InputMaybe<SegmentWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageVariantWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageVariantWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageVariantWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageVariantWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageVariantWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PageVariant record uniquely */
export type PageVariantWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  sections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sections_some?: InputMaybe<PagesectionsUnionWhereInput>;
  seo?: InputMaybe<SeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variants_every?: InputMaybe<PageVariantWhereInput>;
  variants_none?: InputMaybe<PageVariantWhereInput>;
  variants_some?: InputMaybe<PageVariantWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagesectionsUnion = ArticleList | CtaBlock | ContactSection | EditorialSection | FeatureGrid | FeaturedArticle | HeroSection | JobList | PageHeader | ProductShowcase | SectionHeader | StatsBar | Timeline;

export type PagesectionsUnionConnectInput = {
  ArticleList?: InputMaybe<ArticleListConnectInput>;
  CTABlock?: InputMaybe<CtaBlockConnectInput>;
  ContactSection?: InputMaybe<ContactSectionConnectInput>;
  EditorialSection?: InputMaybe<EditorialSectionConnectInput>;
  FeatureGrid?: InputMaybe<FeatureGridConnectInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleConnectInput>;
  HeroSection?: InputMaybe<HeroSectionConnectInput>;
  JobList?: InputMaybe<JobListConnectInput>;
  PageHeader?: InputMaybe<PageHeaderConnectInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseConnectInput>;
  SectionHeader?: InputMaybe<SectionHeaderConnectInput>;
  StatsBar?: InputMaybe<StatsBarConnectInput>;
  Timeline?: InputMaybe<TimelineConnectInput>;
};

export type PagesectionsUnionCreateInput = {
  ArticleList?: InputMaybe<ArticleListCreateInput>;
  CTABlock?: InputMaybe<CtaBlockCreateInput>;
  ContactSection?: InputMaybe<ContactSectionCreateInput>;
  EditorialSection?: InputMaybe<EditorialSectionCreateInput>;
  FeatureGrid?: InputMaybe<FeatureGridCreateInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleCreateInput>;
  HeroSection?: InputMaybe<HeroSectionCreateInput>;
  JobList?: InputMaybe<JobListCreateInput>;
  PageHeader?: InputMaybe<PageHeaderCreateInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseCreateInput>;
  SectionHeader?: InputMaybe<SectionHeaderCreateInput>;
  StatsBar?: InputMaybe<StatsBarCreateInput>;
  Timeline?: InputMaybe<TimelineCreateInput>;
};

export type PagesectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagesectionsUnion documents */
  create?: InputMaybe<Array<PagesectionsUnionCreateInput>>;
};

export type PagesectionsUnionCreateOneInlineInput = {
  /** Create and connect one PagesectionsUnion document */
  create?: InputMaybe<PagesectionsUnionCreateInput>;
};

export type PagesectionsUnionCreateWithPositionInput = {
  ArticleList?: InputMaybe<ArticleListCreateWithPositionInput>;
  CTABlock?: InputMaybe<CtaBlockCreateWithPositionInput>;
  ContactSection?: InputMaybe<ContactSectionCreateWithPositionInput>;
  EditorialSection?: InputMaybe<EditorialSectionCreateWithPositionInput>;
  FeatureGrid?: InputMaybe<FeatureGridCreateWithPositionInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleCreateWithPositionInput>;
  HeroSection?: InputMaybe<HeroSectionCreateWithPositionInput>;
  JobList?: InputMaybe<JobListCreateWithPositionInput>;
  PageHeader?: InputMaybe<PageHeaderCreateWithPositionInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseCreateWithPositionInput>;
  SectionHeader?: InputMaybe<SectionHeaderCreateWithPositionInput>;
  StatsBar?: InputMaybe<StatsBarCreateWithPositionInput>;
  Timeline?: InputMaybe<TimelineCreateWithPositionInput>;
};

export type PagesectionsUnionUpdateInput = {
  ArticleList?: InputMaybe<ArticleListUpdateInput>;
  CTABlock?: InputMaybe<CtaBlockUpdateInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpdateInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpdateInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpdateInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateInput>;
  JobList?: InputMaybe<JobListUpdateInput>;
  PageHeader?: InputMaybe<PageHeaderUpdateInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpdateInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpdateInput>;
  StatsBar?: InputMaybe<StatsBarUpdateInput>;
  Timeline?: InputMaybe<TimelineUpdateInput>;
};

export type PagesectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagesectionsUnion component instances */
  create?: InputMaybe<Array<PagesectionsUnionCreateWithPositionInput>>;
  /** Delete multiple PagesectionsUnion documents */
  delete?: InputMaybe<Array<PagesectionsUnionWhereUniqueInput>>;
  /** Update multiple PagesectionsUnion component instances */
  update?: InputMaybe<Array<PagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagesectionsUnion component instances */
  upsert?: InputMaybe<Array<PagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagesectionsUnionUpdateManyWithNestedWhereInput = {
  ArticleList?: InputMaybe<ArticleListUpdateManyWithNestedWhereInput>;
  CTABlock?: InputMaybe<CtaBlockUpdateManyWithNestedWhereInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateManyWithNestedWhereInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpdateManyWithNestedWhereInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpdateManyWithNestedWhereInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpdateManyWithNestedWhereInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateManyWithNestedWhereInput>;
  JobList?: InputMaybe<JobListUpdateManyWithNestedWhereInput>;
  PageHeader?: InputMaybe<PageHeaderUpdateManyWithNestedWhereInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpdateManyWithNestedWhereInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpdateManyWithNestedWhereInput>;
  StatsBar?: InputMaybe<StatsBarUpdateManyWithNestedWhereInput>;
  Timeline?: InputMaybe<TimelineUpdateManyWithNestedWhereInput>;
};

export type PagesectionsUnionUpdateOneInlineInput = {
  /** Create and connect one PagesectionsUnion document */
  create?: InputMaybe<PagesectionsUnionCreateInput>;
  /** Delete currently connected PagesectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagesectionsUnion document */
  update?: InputMaybe<PagesectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagesectionsUnion document */
  upsert?: InputMaybe<PagesectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ArticleList?: InputMaybe<ArticleListUpdateWithNestedWhereUniqueAndPositionInput>;
  CTABlock?: InputMaybe<CtaBlockUpdateWithNestedWhereUniqueAndPositionInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpdateWithNestedWhereUniqueAndPositionInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpdateWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  JobList?: InputMaybe<JobListUpdateWithNestedWhereUniqueAndPositionInput>;
  PageHeader?: InputMaybe<PageHeaderUpdateWithNestedWhereUniqueAndPositionInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpdateWithNestedWhereUniqueAndPositionInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpdateWithNestedWhereUniqueAndPositionInput>;
  StatsBar?: InputMaybe<StatsBarUpdateWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagesectionsUnionUpdateWithNestedWhereUniqueInput = {
  ArticleList?: InputMaybe<ArticleListUpdateWithNestedWhereUniqueInput>;
  CTABlock?: InputMaybe<CtaBlockUpdateWithNestedWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionUpdateWithNestedWhereUniqueInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpdateWithNestedWhereUniqueInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpdateWithNestedWhereUniqueInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpdateWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpdateWithNestedWhereUniqueInput>;
  JobList?: InputMaybe<JobListUpdateWithNestedWhereUniqueInput>;
  PageHeader?: InputMaybe<PageHeaderUpdateWithNestedWhereUniqueInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpdateWithNestedWhereUniqueInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpdateWithNestedWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarUpdateWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ArticleList?: InputMaybe<ArticleListUpsertWithNestedWhereUniqueAndPositionInput>;
  CTABlock?: InputMaybe<CtaBlockUpsertWithNestedWhereUniqueAndPositionInput>;
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpsertWithNestedWhereUniqueAndPositionInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpsertWithNestedWhereUniqueAndPositionInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  JobList?: InputMaybe<JobListUpsertWithNestedWhereUniqueAndPositionInput>;
  PageHeader?: InputMaybe<PageHeaderUpsertWithNestedWhereUniqueAndPositionInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpsertWithNestedWhereUniqueAndPositionInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpsertWithNestedWhereUniqueAndPositionInput>;
  StatsBar?: InputMaybe<StatsBarUpsertWithNestedWhereUniqueAndPositionInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagesectionsUnionUpsertWithNestedWhereUniqueInput = {
  ArticleList?: InputMaybe<ArticleListUpsertWithNestedWhereUniqueInput>;
  CTABlock?: InputMaybe<CtaBlockUpsertWithNestedWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionUpsertWithNestedWhereUniqueInput>;
  EditorialSection?: InputMaybe<EditorialSectionUpsertWithNestedWhereUniqueInput>;
  FeatureGrid?: InputMaybe<FeatureGridUpsertWithNestedWhereUniqueInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleUpsertWithNestedWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionUpsertWithNestedWhereUniqueInput>;
  JobList?: InputMaybe<JobListUpsertWithNestedWhereUniqueInput>;
  PageHeader?: InputMaybe<PageHeaderUpsertWithNestedWhereUniqueInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseUpsertWithNestedWhereUniqueInput>;
  SectionHeader?: InputMaybe<SectionHeaderUpsertWithNestedWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarUpsertWithNestedWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type PagesectionsUnionWhereInput = {
  ArticleList?: InputMaybe<ArticleListWhereInput>;
  CTABlock?: InputMaybe<CtaBlockWhereInput>;
  ContactSection?: InputMaybe<ContactSectionWhereInput>;
  EditorialSection?: InputMaybe<EditorialSectionWhereInput>;
  FeatureGrid?: InputMaybe<FeatureGridWhereInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleWhereInput>;
  HeroSection?: InputMaybe<HeroSectionWhereInput>;
  JobList?: InputMaybe<JobListWhereInput>;
  PageHeader?: InputMaybe<PageHeaderWhereInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseWhereInput>;
  SectionHeader?: InputMaybe<SectionHeaderWhereInput>;
  StatsBar?: InputMaybe<StatsBarWhereInput>;
  Timeline?: InputMaybe<TimelineWhereInput>;
};

export type PagesectionsUnionWhereUniqueInput = {
  ArticleList?: InputMaybe<ArticleListWhereUniqueInput>;
  CTABlock?: InputMaybe<CtaBlockWhereUniqueInput>;
  ContactSection?: InputMaybe<ContactSectionWhereUniqueInput>;
  EditorialSection?: InputMaybe<EditorialSectionWhereUniqueInput>;
  FeatureGrid?: InputMaybe<FeatureGridWhereUniqueInput>;
  FeaturedArticle?: InputMaybe<FeaturedArticleWhereUniqueInput>;
  HeroSection?: InputMaybe<HeroSectionWhereUniqueInput>;
  JobList?: InputMaybe<JobListWhereUniqueInput>;
  PageHeader?: InputMaybe<PageHeaderWhereUniqueInput>;
  ProductShowcase?: InputMaybe<ProductShowcaseWhereUniqueInput>;
  SectionHeader?: InputMaybe<SectionHeaderWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarWhereUniqueInput>;
  Timeline?: InputMaybe<TimelineWhereUniqueInput>;
};

/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type Product = Entity & Node & {
  __typename?: 'Product';
  /** Base product identifier from BigCommerce/CommerceTools (e.g., "ATH-NVA-700") */
  baseProductId: Scalars['String']['output'];
  /** Product category from native Hygraph taxonomy */
  category: TaxonomyNode;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Full product description with formatting, lists, links */
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** Live product data from BigCommerce including price, inventory, variants (cached 5 min) */
  externalProduct?: Maybe<BigCommerce_BigCommerceSingleProductResponse>;
  /** BigCommerce product ID used to fetch live data via Remote Source */
  externalProductId?: Maybe<Scalars['Int']['output']>;
  featured: Scalars['Boolean']['output'];
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  /** Product name for marketing and display */
  name: Scalars['String']['output'];
  productFeatures: Array<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** URL slug for product detail page */
  slug: Scalars['String']['output'];
  /** Technical specifications (weight, motor, battery, range, frame, brakes, gears, suspension, wheel size) */
  specifications?: Maybe<ProductSpecification>;
  /** System stage field */
  stage: Stage;
  tagline?: Maybe<Scalars['String']['output']>;
  /** Which audience segments find this product relevant (used for filtering in ProductShowcase) */
  targetAudiences: Array<Audience>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductSpecificationsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Individual product with marketing content in Hygraph and live pricing/stock from BigCommerce/CommerceTools */
export type ProductUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  baseProductId: Scalars['String']['input'];
  category: TaxonomyNodeInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description: Scalars['RichTextAST']['input'];
  externalProductId?: InputMaybe<Scalars['Int']['input']>;
  featured: Scalars['Boolean']['input'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String']['input'];
  productFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  productShowcases?: InputMaybe<ProductShowcaseCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  specifications?: InputMaybe<ProductSpecificationCreateOneInlineInput>;
  /** tagline input for default locale (en) */
  tagline?: InputMaybe<Scalars['String']['input']>;
  targetAudiences?: InputMaybe<Array<Audience>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  name: Scalars['String']['input'];
  tagline?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  baseProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  baseProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  baseProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  baseProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  baseProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  baseProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  baseProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  baseProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  baseProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  baseProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<TaxonomyNodeWhereInput>;
  /** Matches if the field value is a descendant of the provided taxonomy nodes */
  category_descendants_of?: InputMaybe<Array<TaxonomyNodeWhereInput>>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<TaxonomyNodeWhereInput>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<TaxonomyNodeWhereInput>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<TaxonomyNodeWhereInput>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  externalProductId?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  externalProductId_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  externalProductId_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  externalProductId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  externalProductId_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  externalProductId_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  externalProductId_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  externalProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  productFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  productFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  productFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  productFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  productFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<ProductSpecificationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetAudiences?: InputMaybe<Array<Audience>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetAudiences_contains_all?: InputMaybe<Array<Audience>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetAudiences_contains_none?: InputMaybe<Array<Audience>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetAudiences_contains_some?: InputMaybe<Array<Audience>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetAudiences_not?: InputMaybe<Array<Audience>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ProductOrderByInput =
  | 'baseProductId_ASC'
  | 'baseProductId_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'externalProductId_ASC'
  | 'externalProductId_DESC'
  | 'featured_ASC'
  | 'featured_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'productFeatures_ASC'
  | 'productFeatures_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'tagline_ASC'
  | 'tagline_DESC'
  | 'targetAudiences_ASC'
  | 'targetAudiences_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

/** Displays products with live PIM data - demonstrates Content Federation */
export type ProductShowcase = Entity & {
  __typename?: 'ProductShowcase';
  displayFilters?: Maybe<Scalars['Boolean']['output']>;
  /** When enabled, only show products where targetAudiences includes current audience */
  filterByAudience: Scalars['Boolean']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  layout: DisplayLayout;
  products: Array<Product>;
  /** Display product prices fetched from PIM */
  showPrices: Scalars['Boolean']['output'];
  /** Display stock status fetched from PIM */
  showStock: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Displays products with live PIM data - demonstrates Content Federation */
export type ProductShowcaseProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductShowcaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductShowcaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductShowcaseConnection = {
  __typename?: 'ProductShowcaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductShowcaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductShowcaseCreateInput = {
  displayFilters?: InputMaybe<Scalars['Boolean']['input']>;
  filterByAudience: Scalars['Boolean']['input'];
  layout: DisplayLayout;
  products?: InputMaybe<ProductCreateManyInlineInput>;
  showPrices: Scalars['Boolean']['input'];
  showStock: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductShowcaseCreateManyInlineInput = {
  /** Create and connect multiple existing ProductShowcase documents */
  create?: InputMaybe<Array<ProductShowcaseCreateInput>>;
};

export type ProductShowcaseCreateOneInlineInput = {
  /** Create and connect one ProductShowcase document */
  create?: InputMaybe<ProductShowcaseCreateInput>;
};

export type ProductShowcaseCreateWithPositionInput = {
  /** Document to create */
  data: ProductShowcaseCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductShowcaseEdge = {
  __typename?: 'ProductShowcaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductShowcase;
};

/** Identifies documents */
export type ProductShowcaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  displayFilters?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayFilters_not?: InputMaybe<Scalars['Boolean']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  filterByAudience_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<DisplayLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  showPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showPrices_not?: InputMaybe<Scalars['Boolean']['input']>;
  showStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showStock_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type ProductShowcaseOrderByInput =
  | 'displayFilters_ASC'
  | 'displayFilters_DESC'
  | 'filterByAudience_ASC'
  | 'filterByAudience_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'layout_ASC'
  | 'layout_DESC'
  | 'showPrices_ASC'
  | 'showPrices_DESC'
  | 'showStock_ASC'
  | 'showStock_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ProductShowcaseParent = Page | PageVariant;

export type ProductShowcaseParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type ProductShowcaseParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type ProductShowcaseParentCreateManyInlineInput = {
  /** Connect multiple existing ProductShowcaseParent documents */
  connect?: InputMaybe<Array<ProductShowcaseParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductShowcaseParent documents */
  create?: InputMaybe<Array<ProductShowcaseParentCreateInput>>;
};

export type ProductShowcaseParentCreateOneInlineInput = {
  /** Connect one existing ProductShowcaseParent document */
  connect?: InputMaybe<ProductShowcaseParentWhereUniqueInput>;
  /** Create and connect one ProductShowcaseParent document */
  create?: InputMaybe<ProductShowcaseParentCreateInput>;
};

export type ProductShowcaseParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type ProductShowcaseParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductShowcaseParent documents */
  connect?: InputMaybe<Array<ProductShowcaseParentConnectInput>>;
  /** Create and connect multiple ProductShowcaseParent documents */
  create?: InputMaybe<Array<ProductShowcaseParentCreateInput>>;
  /** Delete multiple ProductShowcaseParent documents */
  delete?: InputMaybe<Array<ProductShowcaseParentWhereUniqueInput>>;
  /** Disconnect multiple ProductShowcaseParent documents */
  disconnect?: InputMaybe<Array<ProductShowcaseParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductShowcaseParent documents */
  set?: InputMaybe<Array<ProductShowcaseParentWhereUniqueInput>>;
  /** Update multiple ProductShowcaseParent documents */
  update?: InputMaybe<Array<ProductShowcaseParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductShowcaseParent documents */
  upsert?: InputMaybe<Array<ProductShowcaseParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductShowcaseParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type ProductShowcaseParentUpdateOneInlineInput = {
  /** Connect existing ProductShowcaseParent document */
  connect?: InputMaybe<ProductShowcaseParentWhereUniqueInput>;
  /** Create and connect one ProductShowcaseParent document */
  create?: InputMaybe<ProductShowcaseParentCreateInput>;
  /** Delete currently connected ProductShowcaseParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductShowcaseParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductShowcaseParent document */
  update?: InputMaybe<ProductShowcaseParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductShowcaseParent document */
  upsert?: InputMaybe<ProductShowcaseParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductShowcaseParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type ProductShowcaseParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductShowcaseParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type ProductShowcaseParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type ProductShowcaseUpdateInput = {
  displayFilters?: InputMaybe<Scalars['Boolean']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  showPrices?: InputMaybe<Scalars['Boolean']['input']>;
  showStock?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductShowcaseUpdateManyInlineInput = {
  /** Create and connect multiple ProductShowcase component instances */
  create?: InputMaybe<Array<ProductShowcaseCreateWithPositionInput>>;
  /** Delete multiple ProductShowcase documents */
  delete?: InputMaybe<Array<ProductShowcaseWhereUniqueInput>>;
  /** Update multiple ProductShowcase component instances */
  update?: InputMaybe<Array<ProductShowcaseUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductShowcase component instances */
  upsert?: InputMaybe<Array<ProductShowcaseUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductShowcaseUpdateManyInput = {
  displayFilters?: InputMaybe<Scalars['Boolean']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  showPrices?: InputMaybe<Scalars['Boolean']['input']>;
  showStock?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductShowcaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductShowcaseUpdateManyInput;
  /** Document search */
  where: ProductShowcaseWhereInput;
};

export type ProductShowcaseUpdateOneInlineInput = {
  /** Create and connect one ProductShowcase document */
  create?: InputMaybe<ProductShowcaseCreateInput>;
  /** Delete currently connected ProductShowcase document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductShowcase document */
  update?: InputMaybe<ProductShowcaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductShowcase document */
  upsert?: InputMaybe<ProductShowcaseUpsertWithNestedWhereUniqueInput>;
};

export type ProductShowcaseUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductShowcaseUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductShowcaseWhereUniqueInput;
};

export type ProductShowcaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductShowcaseUpdateInput;
  /** Unique document search */
  where: ProductShowcaseWhereUniqueInput;
};

export type ProductShowcaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductShowcaseCreateInput;
  /** Update document if it exists */
  update: ProductShowcaseUpdateInput;
};

export type ProductShowcaseUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductShowcaseUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductShowcaseWhereUniqueInput;
};

export type ProductShowcaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductShowcaseUpsertInput;
  /** Unique document search */
  where: ProductShowcaseWhereUniqueInput;
};

/** Identifies documents */
export type ProductShowcaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductShowcaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  displayFilters?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayFilters_not?: InputMaybe<Scalars['Boolean']['input']>;
  filterByAudience?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  filterByAudience_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<DisplayLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<DisplayLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<DisplayLayout>>>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  showPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showPrices_not?: InputMaybe<Scalars['Boolean']['input']>;
  showStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showStock_not?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References ProductShowcase record uniquely */
export type ProductShowcaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Structured technical specifications for products */
export type ProductSpecification = Entity & {
  __typename?: 'ProductSpecification';
  /** Battery capacity (e.g., "625Wh PowerTube") */
  battery?: Maybe<Scalars['String']['output']>;
  /** Brake system (e.g., "Shimano hydraulic disc") */
  brakes?: Maybe<Scalars['String']['output']>;
  /** Frame material (e.g., "Carbon fiber", "Aluminum alloy") */
  frame?: Maybe<Scalars['String']['output']>;
  /** Gear system (e.g., "12-speed Shimano XT", "Single speed") */
  gears?: Maybe<Scalars['String']['output']>;
  groupset?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductSpecification>;
  /** Motor specifications (e.g., "750W Bosch Performance CX") */
  motor?: Maybe<Scalars['String']['output']>;
  /** Specification set name (e.g., "Mountain Pro Specs", "Urban Elite Specs") */
  name?: Maybe<Scalars['String']['output']>;
  /** Estimated range (e.g., "60-80km", "40-50 miles") */
  range?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** Suspension type (e.g., "Full suspension", "Front only", "Rigid") */
  suspension?: Maybe<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Product weight in kilograms */
  weight?: Maybe<Scalars['Float']['output']>;
  /** Wheel diameter */
  wheelSize?: Maybe<WheelSize>;
  wheels?: Maybe<Scalars['String']['output']>;
};


/** Structured technical specifications for products */
export type ProductSpecificationLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Structured technical specifications for products */
export type ProductSpecificationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductSpecificationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductSpecificationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductSpecificationConnection = {
  __typename?: 'ProductSpecificationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductSpecificationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductSpecificationCreateInput = {
  battery?: InputMaybe<Scalars['String']['input']>;
  brakes?: InputMaybe<Scalars['String']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  gears?: InputMaybe<Scalars['String']['input']>;
  groupset?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductSpecificationCreateLocalizationsInput>;
  motor?: InputMaybe<Scalars['String']['input']>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  suspension?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  wheelSize?: InputMaybe<WheelSize>;
  wheels?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationCreateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductSpecificationCreateLocalizationInput = {
  /** Localization input */
  data: ProductSpecificationCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSpecificationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductSpecificationCreateLocalizationInput>>;
};

export type ProductSpecificationCreateManyInlineInput = {
  /** Create and connect multiple existing ProductSpecification documents */
  create?: InputMaybe<Array<ProductSpecificationCreateInput>>;
};

export type ProductSpecificationCreateOneInlineInput = {
  /** Create and connect one ProductSpecification document */
  create?: InputMaybe<ProductSpecificationCreateInput>;
};

export type ProductSpecificationCreateWithPositionInput = {
  /** Document to create */
  data: ProductSpecificationCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductSpecificationEdge = {
  __typename?: 'ProductSpecificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductSpecification;
};

/** Identifies documents */
export type ProductSpecificationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  battery?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  battery_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  battery_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  battery_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  battery_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  battery_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  battery_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  battery_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  battery_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  battery_starts_with?: InputMaybe<Scalars['String']['input']>;
  brakes?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brakes_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brakes_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brakes_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brakes_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brakes_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brakes_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brakes_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brakes_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brakes_starts_with?: InputMaybe<Scalars['String']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  frame_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  frame_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  frame_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  frame_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  frame_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  frame_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  frame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  frame_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  frame_starts_with?: InputMaybe<Scalars['String']['input']>;
  gears?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  gears_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  gears_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  gears_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  gears_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  gears_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  gears_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  gears_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  gears_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  gears_starts_with?: InputMaybe<Scalars['String']['input']>;
  groupset?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  groupset_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  groupset_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  groupset_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  groupset_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  groupset_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  groupset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  groupset_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  groupset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  groupset_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  motor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  motor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  motor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  motor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  motor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  motor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  motor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  motor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  motor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  motor_starts_with?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  range_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  range_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  range_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  range_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  range_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  range_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  range_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  range_starts_with?: InputMaybe<Scalars['String']['input']>;
  suspension?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  suspension_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  suspension_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  suspension_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  suspension_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  suspension_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  suspension_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  suspension_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  suspension_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  suspension_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  weight_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  weight_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  weight_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  weight_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  weight_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  weight_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  weight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  wheelSize?: InputMaybe<WheelSize>;
  /** All values that are contained in given list. */
  wheelSize_in?: InputMaybe<Array<InputMaybe<WheelSize>>>;
  /** Any other value that exists and is not equal to the given value. */
  wheelSize_not?: InputMaybe<WheelSize>;
  /** All values that are not contained in given list. */
  wheelSize_not_in?: InputMaybe<Array<InputMaybe<WheelSize>>>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  wheels_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  wheels_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  wheels_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  wheels_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  wheels_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  wheels_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  wheels_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  wheels_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  wheels_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationOrderByInput =
  | 'battery_ASC'
  | 'battery_DESC'
  | 'brakes_ASC'
  | 'brakes_DESC'
  | 'frame_ASC'
  | 'frame_DESC'
  | 'gears_ASC'
  | 'gears_DESC'
  | 'groupset_ASC'
  | 'groupset_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'motor_ASC'
  | 'motor_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'range_ASC'
  | 'range_DESC'
  | 'suspension_ASC'
  | 'suspension_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'weight_ASC'
  | 'weight_DESC'
  | 'wheelSize_ASC'
  | 'wheelSize_DESC'
  | 'wheels_ASC'
  | 'wheels_DESC';

export type ProductSpecificationParent = Product;

export type ProductSpecificationParentConnectInput = {
  Product?: InputMaybe<ProductConnectInput>;
};

export type ProductSpecificationParentCreateInput = {
  Product?: InputMaybe<ProductCreateInput>;
};

export type ProductSpecificationParentCreateManyInlineInput = {
  /** Connect multiple existing ProductSpecificationParent documents */
  connect?: InputMaybe<Array<ProductSpecificationParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductSpecificationParent documents */
  create?: InputMaybe<Array<ProductSpecificationParentCreateInput>>;
};

export type ProductSpecificationParentCreateOneInlineInput = {
  /** Connect one existing ProductSpecificationParent document */
  connect?: InputMaybe<ProductSpecificationParentWhereUniqueInput>;
  /** Create and connect one ProductSpecificationParent document */
  create?: InputMaybe<ProductSpecificationParentCreateInput>;
};

export type ProductSpecificationParentUpdateInput = {
  Product?: InputMaybe<ProductUpdateInput>;
};

export type ProductSpecificationParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductSpecificationParent documents */
  connect?: InputMaybe<Array<ProductSpecificationParentConnectInput>>;
  /** Create and connect multiple ProductSpecificationParent documents */
  create?: InputMaybe<Array<ProductSpecificationParentCreateInput>>;
  /** Delete multiple ProductSpecificationParent documents */
  delete?: InputMaybe<Array<ProductSpecificationParentWhereUniqueInput>>;
  /** Disconnect multiple ProductSpecificationParent documents */
  disconnect?: InputMaybe<Array<ProductSpecificationParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductSpecificationParent documents */
  set?: InputMaybe<Array<ProductSpecificationParentWhereUniqueInput>>;
  /** Update multiple ProductSpecificationParent documents */
  update?: InputMaybe<Array<ProductSpecificationParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductSpecificationParent documents */
  upsert?: InputMaybe<Array<ProductSpecificationParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductSpecificationParentUpdateManyWithNestedWhereInput = {
  Product?: InputMaybe<ProductUpdateManyWithNestedWhereInput>;
};

export type ProductSpecificationParentUpdateOneInlineInput = {
  /** Connect existing ProductSpecificationParent document */
  connect?: InputMaybe<ProductSpecificationParentWhereUniqueInput>;
  /** Create and connect one ProductSpecificationParent document */
  create?: InputMaybe<ProductSpecificationParentCreateInput>;
  /** Delete currently connected ProductSpecificationParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductSpecificationParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductSpecificationParent document */
  update?: InputMaybe<ProductSpecificationParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductSpecificationParent document */
  upsert?: InputMaybe<ProductSpecificationParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductSpecificationParentUpdateWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
};

export type ProductSpecificationParentUpsertWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductSpecificationParentWhereInput = {
  Product?: InputMaybe<ProductWhereInput>;
};

export type ProductSpecificationParentWhereUniqueInput = {
  Product?: InputMaybe<ProductWhereUniqueInput>;
};

export type ProductSpecificationUpdateInput = {
  battery?: InputMaybe<Scalars['String']['input']>;
  brakes?: InputMaybe<Scalars['String']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  gears?: InputMaybe<Scalars['String']['input']>;
  groupset?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductSpecificationUpdateLocalizationsInput>;
  motor?: InputMaybe<Scalars['String']['input']>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  suspension?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  wheelSize?: InputMaybe<WheelSize>;
  wheels?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationUpdateLocalizationInput = {
  data: ProductSpecificationUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductSpecificationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductSpecificationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSpecificationUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductSpecificationUpsertLocalizationInput>>;
};

export type ProductSpecificationUpdateManyInlineInput = {
  /** Create and connect multiple ProductSpecification component instances */
  create?: InputMaybe<Array<ProductSpecificationCreateWithPositionInput>>;
  /** Delete multiple ProductSpecification documents */
  delete?: InputMaybe<Array<ProductSpecificationWhereUniqueInput>>;
  /** Update multiple ProductSpecification component instances */
  update?: InputMaybe<Array<ProductSpecificationUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductSpecification component instances */
  upsert?: InputMaybe<Array<ProductSpecificationUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductSpecificationUpdateManyInput = {
  battery?: InputMaybe<Scalars['String']['input']>;
  brakes?: InputMaybe<Scalars['String']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  gears?: InputMaybe<Scalars['String']['input']>;
  groupset?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductSpecificationUpdateManyLocalizationsInput>;
  motor?: InputMaybe<Scalars['String']['input']>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  suspension?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  wheelSize?: InputMaybe<WheelSize>;
  wheels?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSpecificationUpdateManyLocalizationInput = {
  data: ProductSpecificationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductSpecificationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductSpecificationUpdateManyLocalizationInput>>;
};

export type ProductSpecificationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductSpecificationUpdateManyInput;
  /** Document search */
  where: ProductSpecificationWhereInput;
};

export type ProductSpecificationUpdateOneInlineInput = {
  /** Create and connect one ProductSpecification document */
  create?: InputMaybe<ProductSpecificationCreateInput>;
  /** Delete currently connected ProductSpecification document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductSpecification document */
  update?: InputMaybe<ProductSpecificationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductSpecification document */
  upsert?: InputMaybe<ProductSpecificationUpsertWithNestedWhereUniqueInput>;
};

export type ProductSpecificationUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductSpecificationUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductSpecificationWhereUniqueInput;
};

export type ProductSpecificationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductSpecificationUpdateInput;
  /** Unique document search */
  where: ProductSpecificationWhereUniqueInput;
};

export type ProductSpecificationUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductSpecificationCreateInput;
  /** Update document if it exists */
  update: ProductSpecificationUpdateInput;
};

export type ProductSpecificationUpsertLocalizationInput = {
  create: ProductSpecificationCreateLocalizationDataInput;
  locale: Locale;
  update: ProductSpecificationUpdateLocalizationDataInput;
};

export type ProductSpecificationUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductSpecificationUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductSpecificationWhereUniqueInput;
};

export type ProductSpecificationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductSpecificationUpsertInput;
  /** Unique document search */
  where: ProductSpecificationWhereUniqueInput;
};

/** Identifies documents */
export type ProductSpecificationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSpecificationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  battery?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  battery_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  battery_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  battery_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  battery_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  battery_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  battery_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  battery_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  battery_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  battery_starts_with?: InputMaybe<Scalars['String']['input']>;
  brakes?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brakes_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brakes_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brakes_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brakes_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brakes_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brakes_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brakes_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brakes_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brakes_starts_with?: InputMaybe<Scalars['String']['input']>;
  frame?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  frame_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  frame_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  frame_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  frame_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  frame_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  frame_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  frame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  frame_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  frame_starts_with?: InputMaybe<Scalars['String']['input']>;
  gears?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  gears_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  gears_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  gears_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  gears_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  gears_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  gears_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  gears_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  gears_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  gears_starts_with?: InputMaybe<Scalars['String']['input']>;
  groupset?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  groupset_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  groupset_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  groupset_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  groupset_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  groupset_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  groupset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  groupset_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  groupset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  groupset_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  motor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  motor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  motor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  motor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  motor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  motor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  motor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  motor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  motor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  motor_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  range_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  range_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  range_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  range_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  range_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  range_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  range_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  range_starts_with?: InputMaybe<Scalars['String']['input']>;
  suspension?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  suspension_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  suspension_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  suspension_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  suspension_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  suspension_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  suspension_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  suspension_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  suspension_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  suspension_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  weight_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  weight_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  weight_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  weight_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  weight_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  weight_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  weight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  wheelSize?: InputMaybe<WheelSize>;
  /** All values that are contained in given list. */
  wheelSize_in?: InputMaybe<Array<InputMaybe<WheelSize>>>;
  /** Any other value that exists and is not equal to the given value. */
  wheelSize_not?: InputMaybe<WheelSize>;
  /** All values that are not contained in given list. */
  wheelSize_not_in?: InputMaybe<Array<InputMaybe<WheelSize>>>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  wheels_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  wheels_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  wheels_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  wheels_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  wheels_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  wheels_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  wheels_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  wheels_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  wheels_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ProductSpecification record uniquely */
export type ProductSpecificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductUpdateInput = {
  baseProductId?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<TaxonomyNodeInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  externalProductId?: InputMaybe<Scalars['Int']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']['input']>;
  productFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  productShowcases?: InputMaybe<ProductShowcaseUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<ProductSpecificationUpdateOneInlineInput>;
  /** tagline input for default locale (en) */
  tagline?: InputMaybe<Scalars['String']['input']>;
  targetAudiences?: InputMaybe<Array<Audience>>;
};

export type ProductUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  baseProductId?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<TaxonomyNodeInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  externalProductId?: InputMaybe<Scalars['Int']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']['input']>;
  productFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  /** tagline input for default locale (en) */
  tagline?: InputMaybe<Scalars['String']['input']>;
  targetAudiences?: InputMaybe<Array<Audience>>;
};

export type ProductUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
  update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  baseProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  baseProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  baseProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  baseProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  baseProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  baseProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  baseProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  baseProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  baseProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  baseProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<TaxonomyNodeWhereInput>;
  /** Matches if the field value is a descendant of the provided taxonomy nodes */
  category_descendants_of?: InputMaybe<Array<TaxonomyNodeWhereInput>>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<TaxonomyNodeWhereInput>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<TaxonomyNodeWhereInput>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<TaxonomyNodeWhereInput>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  externalProductId?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  externalProductId_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  externalProductId_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  externalProductId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  externalProductId_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  externalProductId_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  externalProductId_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  externalProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  productFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  productFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  productFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  productFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  productFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<ProductSpecificationWhereInput>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tagline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tagline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tagline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tagline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tagline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tagline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tagline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tagline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tagline_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetAudiences?: InputMaybe<Array<Audience>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetAudiences_contains_all?: InputMaybe<Array<Audience>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetAudiences_contains_none?: InputMaybe<Array<Audience>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetAudiences_contains_some?: InputMaybe<Array<Audience>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetAudiences_not?: InputMaybe<Array<Audience>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve multiple allSiteSettings */
  allSiteSettings: Array<SiteSettings>;
  /** Retrieve multiple allSiteSettings using the Relay connection interface */
  allSiteSettingsConnection: SiteSettingsConnection;
  /** Retrieve a single article */
  article?: Maybe<Article>;
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple articles */
  articles: Array<Article>;
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single feature */
  feature?: Maybe<Feature>;
  /** Retrieve document version */
  featureVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple features */
  features: Array<Feature>;
  /** Retrieve multiple features using the Relay connection interface */
  featuresConnection: FeatureConnection;
  /** Retrieve a single job */
  job?: Maybe<Job>;
  /** Retrieve document version */
  jobVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple jobs */
  jobs: Array<Job>;
  /** Retrieve multiple jobs using the Relay connection interface */
  jobsConnection: JobConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single segment */
  segment?: Maybe<Segment>;
  /** Retrieve document version */
  segmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple segments */
  segments: Array<Segment>;
  /** Retrieve multiple segments using the Relay connection interface */
  segmentsConnection: SegmentConnection;
  /** Retrieve a single siteSettings */
  siteSettings?: Maybe<SiteSettings>;
  /** Retrieve document version */
  siteSettingsVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAllSiteSettingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SiteSettingsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SiteSettingsWhereInput>;
};


export type QueryAllSiteSettingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SiteSettingsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SiteSettingsWhereInput>;
};


export type QueryArticleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ArticleWhereUniqueInput;
};


export type QueryArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryFeatureArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FeatureWhereUniqueInput;
};


export type QueryFeatureVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFeaturesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeatureWhereInput>;
};


export type QueryFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeatureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeatureWhereInput>;
};


export type QueryJobArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: JobWhereUniqueInput;
};


export type QueryJobVersionArgs = {
  where: VersionWhereInput;
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryJobsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySegmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SegmentWhereUniqueInput;
};


export type QuerySegmentVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySegmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SegmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SegmentWhereInput>;
};


export type QuerySegmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SegmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SegmentWhereInput>;
};


export type QuerySiteSettingsArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SiteSettingsWhereUniqueInput;
};


export type QuerySiteSettingsVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Reusable SEO fields for search engine optimization */
export type Seo = Entity & {
  __typename?: 'SEO';
  /** Canonical URL to prevent duplicate content issues */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Meta keywords (legacy, optional) */
  keywords?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Seo>;
  /** Description shown in search results. Should be compelling and actionable. */
  metaDescription: Scalars['String']['output'];
  /** Page title shown in browser tab and search results */
  metaTitle: Scalars['String']['output'];
  /** Open Graph description (optional override of metaDescription) */
  ogDescription?: Maybe<Scalars['String']['output']>;
  /** Image shown when page is shared on social media (recommended: 1200x630px) */
  ogImage?: Maybe<Asset>;
  /** Open Graph title (optional override of metaTitle) */
  ogTitle?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Reusable SEO fields for search engine optimization */
export type SeoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Reusable SEO fields for search engine optimization */
export type SeoOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Reusable SEO fields for search engine optimization */
export type SeoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SEOConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoCreateInput = {
  /** canonicalUrl input for default locale (en) */
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  /** keywords input for default locale (en) */
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SeoCreateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription: Scalars['String']['input'];
  /** metaTitle input for default locale (en) */
  metaTitle: Scalars['String']['input'];
  /** ogDescription input for default locale (en) */
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  /** ogTitle input for default locale (en) */
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeoCreateLocalizationDataInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription: Scalars['String']['input'];
  metaTitle: Scalars['String']['input'];
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeoCreateLocalizationInput = {
  /** Localization input */
  data: SeoCreateLocalizationDataInput;
  locale: Locale;
};

export type SeoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SeoCreateLocalizationInput>>;
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing SEO documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
};

export type SeoCreateWithPositionInput = {
  /** Document to create */
  data: SeoCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SEOEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Seo;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type SeoOrderByInput =
  | 'canonicalUrl_ASC'
  | 'canonicalUrl_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'keywords_ASC'
  | 'keywords_DESC'
  | 'metaDescription_ASC'
  | 'metaDescription_DESC'
  | 'metaTitle_ASC'
  | 'metaTitle_DESC'
  | 'ogDescription_ASC'
  | 'ogDescription_DESC'
  | 'ogTitle_ASC'
  | 'ogTitle_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type SeoParent = Page;

export type SeoParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type SeoParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type SeoParentCreateManyInlineInput = {
  /** Connect multiple existing SEOParent documents */
  connect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Create and connect multiple existing SEOParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
};

export type SeoParentCreateOneInlineInput = {
  /** Connect one existing SEOParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
};

export type SeoParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type SeoParentUpdateManyInlineInput = {
  /** Connect multiple existing SEOParent documents */
  connect?: InputMaybe<Array<SeoParentConnectInput>>;
  /** Create and connect multiple SEOParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
  /** Delete multiple SEOParent documents */
  delete?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Disconnect multiple SEOParent documents */
  disconnect?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SEOParent documents */
  set?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Update multiple SEOParent documents */
  update?: InputMaybe<Array<SeoParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SEOParent documents */
  upsert?: InputMaybe<Array<SeoParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type SeoParentUpdateOneInlineInput = {
  /** Connect existing SEOParent document */
  connect?: InputMaybe<SeoParentWhereUniqueInput>;
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
  /** Delete currently connected SEOParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SEOParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEOParent document */
  update?: InputMaybe<SeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEOParent document */
  upsert?: InputMaybe<SeoParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type SeoParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type SeoParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type SeoUpdateInput = {
  /** canonicalUrl input for default locale (en) */
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  /** keywords input for default locale (en) */
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<SeoUpdateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** metaTitle input for default locale (en) */
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** ogDescription input for default locale (en) */
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** ogTitle input for default locale (en) */
  ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateLocalizationDataInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateLocalizationInput = {
  data: SeoUpdateLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SeoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SeoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SeoUpsertLocalizationInput>>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple SEO component instances */
  create?: InputMaybe<Array<SeoCreateWithPositionInput>>;
  /** Delete multiple SEO documents */
  delete?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple SEO component instances */
  update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEO component instances */
  upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoUpdateManyInput = {
  /** canonicalUrl input for default locale (en) */
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  /** keywords input for default locale (en) */
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<SeoUpdateManyLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** metaTitle input for default locale (en) */
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** ogDescription input for default locale (en) */
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  /** ogTitle input for default locale (en) */
  ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyLocalizationDataInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyLocalizationInput = {
  data: SeoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SeoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SeoUpdateManyLocalizationInput>>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoUpdateManyInput;
  /** Document search */
  where: SeoWhereInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
  /** Delete currently connected SEO document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEO document */
  update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEO document */
  upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoUpdateInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertLocalizationInput = {
  create: SeoCreateLocalizationDataInput;
  locale: Locale;
  update: SeoUpdateLocalizationDataInput;
};

export type SeoUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoUpsertInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  canonicalUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  canonicalUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  canonicalUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  canonicalUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  keywords_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  keywords_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  keywords_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  keywords_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  metaTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References SEO record uniquely */
export type SeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Article | Asset | Feature | Job | Navigation | Page | PageVariant | Product | Segment | SiteSettings;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

/** System Scheduled Operation Status */
export type ScheduledOperationStatus =
  | 'CANCELED'
  | 'COMPLETED'
  | 'FAILED'
  | 'IN_PROGRESS'
  | 'PENDING';

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'isImplicit_ASC'
  | 'isImplicit_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'releaseAt_ASC'
  | 'releaseAt_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

/** System Scheduled Release Status */
export type ScheduledReleaseStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'IN_PROGRESS'
  | 'PENDING';

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Standalone label + headline block used as a section divider */
export type SectionHeader = Entity & {
  __typename?: 'SectionHeader';
  headline: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Small uppercase label above the headline */
  label?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<SectionHeader>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Standalone label + headline block used as a section divider */
export type SectionHeaderLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Standalone label + headline block used as a section divider */
export type SectionHeaderUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SectionHeaderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SectionHeaderWhereUniqueInput;
};

/** A connection to a list of items. */
export type SectionHeaderConnection = {
  __typename?: 'SectionHeaderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SectionHeaderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SectionHeaderCreateInput = {
  /** headline input for default locale (en) */
  headline: Scalars['String']['input'];
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SectionHeaderCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionHeaderCreateLocalizationDataInput = {
  headline: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionHeaderCreateLocalizationInput = {
  /** Localization input */
  data: SectionHeaderCreateLocalizationDataInput;
  locale: Locale;
};

export type SectionHeaderCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SectionHeaderCreateLocalizationInput>>;
};

export type SectionHeaderCreateManyInlineInput = {
  /** Create and connect multiple existing SectionHeader documents */
  create?: InputMaybe<Array<SectionHeaderCreateInput>>;
};

export type SectionHeaderCreateOneInlineInput = {
  /** Create and connect one SectionHeader document */
  create?: InputMaybe<SectionHeaderCreateInput>;
};

export type SectionHeaderCreateWithPositionInput = {
  /** Document to create */
  data: SectionHeaderCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SectionHeaderEdge = {
  __typename?: 'SectionHeaderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SectionHeader;
};

/** Identifies documents */
export type SectionHeaderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type SectionHeaderOrderByInput =
  | 'headline_ASC'
  | 'headline_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'label_ASC'
  | 'label_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type SectionHeaderParent = Page | PageVariant;

export type SectionHeaderParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type SectionHeaderParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type SectionHeaderParentCreateManyInlineInput = {
  /** Connect multiple existing SectionHeaderParent documents */
  connect?: InputMaybe<Array<SectionHeaderParentWhereUniqueInput>>;
  /** Create and connect multiple existing SectionHeaderParent documents */
  create?: InputMaybe<Array<SectionHeaderParentCreateInput>>;
};

export type SectionHeaderParentCreateOneInlineInput = {
  /** Connect one existing SectionHeaderParent document */
  connect?: InputMaybe<SectionHeaderParentWhereUniqueInput>;
  /** Create and connect one SectionHeaderParent document */
  create?: InputMaybe<SectionHeaderParentCreateInput>;
};

export type SectionHeaderParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type SectionHeaderParentUpdateManyInlineInput = {
  /** Connect multiple existing SectionHeaderParent documents */
  connect?: InputMaybe<Array<SectionHeaderParentConnectInput>>;
  /** Create and connect multiple SectionHeaderParent documents */
  create?: InputMaybe<Array<SectionHeaderParentCreateInput>>;
  /** Delete multiple SectionHeaderParent documents */
  delete?: InputMaybe<Array<SectionHeaderParentWhereUniqueInput>>;
  /** Disconnect multiple SectionHeaderParent documents */
  disconnect?: InputMaybe<Array<SectionHeaderParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SectionHeaderParent documents */
  set?: InputMaybe<Array<SectionHeaderParentWhereUniqueInput>>;
  /** Update multiple SectionHeaderParent documents */
  update?: InputMaybe<Array<SectionHeaderParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SectionHeaderParent documents */
  upsert?: InputMaybe<Array<SectionHeaderParentUpsertWithNestedWhereUniqueInput>>;
};

export type SectionHeaderParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type SectionHeaderParentUpdateOneInlineInput = {
  /** Connect existing SectionHeaderParent document */
  connect?: InputMaybe<SectionHeaderParentWhereUniqueInput>;
  /** Create and connect one SectionHeaderParent document */
  create?: InputMaybe<SectionHeaderParentCreateInput>;
  /** Delete currently connected SectionHeaderParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SectionHeaderParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SectionHeaderParent document */
  update?: InputMaybe<SectionHeaderParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SectionHeaderParent document */
  upsert?: InputMaybe<SectionHeaderParentUpsertWithNestedWhereUniqueInput>;
};

export type SectionHeaderParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type SectionHeaderParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type SectionHeaderParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type SectionHeaderParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type SectionHeaderUpdateInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<SectionHeaderUpdateLocalizationsInput>;
};

export type SectionHeaderUpdateLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type SectionHeaderUpdateLocalizationInput = {
  data: SectionHeaderUpdateLocalizationDataInput;
  locale: Locale;
};

export type SectionHeaderUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SectionHeaderCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SectionHeaderUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SectionHeaderUpsertLocalizationInput>>;
};

export type SectionHeaderUpdateManyInlineInput = {
  /** Create and connect multiple SectionHeader component instances */
  create?: InputMaybe<Array<SectionHeaderCreateWithPositionInput>>;
  /** Delete multiple SectionHeader documents */
  delete?: InputMaybe<Array<SectionHeaderWhereUniqueInput>>;
  /** Update multiple SectionHeader component instances */
  update?: InputMaybe<Array<SectionHeaderUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SectionHeader component instances */
  upsert?: InputMaybe<Array<SectionHeaderUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SectionHeaderUpdateManyInput = {
  /** headline input for default locale (en) */
  headline?: InputMaybe<Scalars['String']['input']>;
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<SectionHeaderUpdateManyLocalizationsInput>;
};

export type SectionHeaderUpdateManyLocalizationDataInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type SectionHeaderUpdateManyLocalizationInput = {
  data: SectionHeaderUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SectionHeaderUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SectionHeaderUpdateManyLocalizationInput>>;
};

export type SectionHeaderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SectionHeaderUpdateManyInput;
  /** Document search */
  where: SectionHeaderWhereInput;
};

export type SectionHeaderUpdateOneInlineInput = {
  /** Create and connect one SectionHeader document */
  create?: InputMaybe<SectionHeaderCreateInput>;
  /** Delete currently connected SectionHeader document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SectionHeader document */
  update?: InputMaybe<SectionHeaderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SectionHeader document */
  upsert?: InputMaybe<SectionHeaderUpsertWithNestedWhereUniqueInput>;
};

export type SectionHeaderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SectionHeaderUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SectionHeaderWhereUniqueInput;
};

export type SectionHeaderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SectionHeaderUpdateInput;
  /** Unique document search */
  where: SectionHeaderWhereUniqueInput;
};

export type SectionHeaderUpsertInput = {
  /** Create document if it didn't exist */
  create: SectionHeaderCreateInput;
  /** Update document if it exists */
  update: SectionHeaderUpdateInput;
};

export type SectionHeaderUpsertLocalizationInput = {
  create: SectionHeaderCreateLocalizationDataInput;
  locale: Locale;
  update: SectionHeaderUpdateLocalizationDataInput;
};

export type SectionHeaderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SectionHeaderUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SectionHeaderWhereUniqueInput;
};

export type SectionHeaderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SectionHeaderUpsertInput;
  /** Unique document search */
  where: SectionHeaderWhereUniqueInput;
};

/** Identifies documents */
export type SectionHeaderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SectionHeaderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References SectionHeader record uniquely */
export type SectionHeaderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Segment system model */
export type Segment = Entity & Node & {
  __typename?: 'Segment';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Describes the segment */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Segment>;
  /** List of Segment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The name of the segment */
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Segment system model */
export type SegmentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Segment system model */
export type SegmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Segment system model */
export type SegmentHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Segment system model */
export type SegmentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Segment system model */
export type SegmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Segment system model */
export type SegmentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SegmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SegmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type SegmentConnection = {
  __typename?: 'SegmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SegmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SegmentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variantsPage?: InputMaybe<PageVariantCreateManyInlineInput>;
};

export type SegmentCreateManyInlineInput = {
  /** Connect multiple existing Segment documents */
  connect?: InputMaybe<Array<SegmentWhereUniqueInput>>;
  /** Create and connect multiple existing Segment documents */
  create?: InputMaybe<Array<SegmentCreateInput>>;
};

export type SegmentCreateOneInlineInput = {
  /** Connect one existing Segment document */
  connect?: InputMaybe<SegmentWhereUniqueInput>;
  /** Create and connect one Segment document */
  create?: InputMaybe<SegmentCreateInput>;
};

/** An edge in a connection. */
export type SegmentEdge = {
  __typename?: 'SegmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Segment;
};

/** Identifies documents */
export type SegmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SegmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SegmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SegmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SegmentWhereStageInput>;
  documentInStages_none?: InputMaybe<SegmentWhereStageInput>;
  documentInStages_some?: InputMaybe<SegmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SegmentOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type SegmentUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  variantsPage?: InputMaybe<PageVariantUpdateManyInlineInput>;
};

export type SegmentUpdateManyInlineInput = {
  /** Connect multiple existing Segment documents */
  connect?: InputMaybe<Array<SegmentConnectInput>>;
  /** Create and connect multiple Segment documents */
  create?: InputMaybe<Array<SegmentCreateInput>>;
  /** Delete multiple Segment documents */
  delete?: InputMaybe<Array<SegmentWhereUniqueInput>>;
  /** Disconnect multiple Segment documents */
  disconnect?: InputMaybe<Array<SegmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Segment documents */
  set?: InputMaybe<Array<SegmentWhereUniqueInput>>;
  /** Update multiple Segment documents */
  update?: InputMaybe<Array<SegmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Segment documents */
  upsert?: InputMaybe<Array<SegmentUpsertWithNestedWhereUniqueInput>>;
};

export type SegmentUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SegmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SegmentUpdateManyInput;
  /** Document search */
  where: SegmentWhereInput;
};

export type SegmentUpdateOneInlineInput = {
  /** Connect existing Segment document */
  connect?: InputMaybe<SegmentWhereUniqueInput>;
  /** Create and connect one Segment document */
  create?: InputMaybe<SegmentCreateInput>;
  /** Delete currently connected Segment document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Segment document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Segment document */
  update?: InputMaybe<SegmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Segment document */
  upsert?: InputMaybe<SegmentUpsertWithNestedWhereUniqueInput>;
};

export type SegmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SegmentUpdateInput;
  /** Unique document search */
  where: SegmentWhereUniqueInput;
};

export type SegmentUpsertInput = {
  /** Create document if it didn't exist */
  create: SegmentCreateInput;
  /** Update document if it exists */
  update: SegmentUpdateInput;
};

export type SegmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SegmentUpsertInput;
  /** Unique document search */
  where: SegmentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SegmentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SegmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SegmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SegmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SegmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SegmentWhereStageInput>;
  documentInStages_none?: InputMaybe<SegmentWhereStageInput>;
  documentInStages_some?: InputMaybe<SegmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SegmentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SegmentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SegmentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SegmentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SegmentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Segment record uniquely */
export type SegmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Global site configuration (singleton) */
export type SiteSettings = Entity & Node & {
  __typename?: 'SiteSettings';
  /** Site-wide announcement banner text (optional, shown at top of all pages) */
  announcement?: Maybe<RichText>;
  /** Primary brand color (hex format, e.g., #3B82F6) */
  brandColor: Scalars['String']['output'];
  /** Support email address (localized per region) */
  contactEmail: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Default OG image for social sharing (fallback when page has no specific image) */
  defaultMetaImage?: Maybe<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<SiteSettings>;
  /** Footer site navigation */
  footerNavigation?: Maybe<Navigation>;
  footerSubscribeSubtitle?: Maybe<Scalars['String']['output']>;
  footerSubscribeTitle?: Maybe<Scalars['String']['output']>;
  /** Footer legal/copyright text */
  footerText: RichText;
  /** List of SiteSettings versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<SiteSettings>;
  /** Primary site navigation (header) */
  mainNavigation?: Maybe<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Site name */
  siteName: Scalars['String']['output'];
  /** Social media links displayed in footer */
  socialLinks: Array<SocialLink>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Global site configuration (singleton) */
export type SiteSettingsCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Global site configuration (singleton) */
export type SiteSettingsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Global site configuration (singleton) */
export type SiteSettingsDefaultMetaImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Global site configuration (singleton) */
export type SiteSettingsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Global site configuration (singleton) */
export type SiteSettingsFooterNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Global site configuration (singleton) */
export type SiteSettingsHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Global site configuration (singleton) */
export type SiteSettingsLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Global site configuration (singleton) */
export type SiteSettingsMainNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Global site configuration (singleton) */
export type SiteSettingsPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Global site configuration (singleton) */
export type SiteSettingsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Global site configuration (singleton) */
export type SiteSettingsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Global site configuration (singleton) */
export type SiteSettingsSocialLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialLinkWhereInput>;
};


/** Global site configuration (singleton) */
export type SiteSettingsUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Global site configuration (singleton) */
export type SiteSettingsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SiteSettingsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SiteSettingsWhereUniqueInput;
};

/** A connection to a list of items. */
export type SiteSettingsConnection = {
  __typename?: 'SiteSettingsConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SiteSettingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SiteSettingsCreateInput = {
  /** announcement input for default locale (en) */
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  brandColor: Scalars['String']['input'];
  /** contactEmail input for default locale (en) */
  contactEmail: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  defaultMetaImage?: InputMaybe<AssetCreateOneInlineInput>;
  footerNavigation?: InputMaybe<NavigationCreateOneInlineInput>;
  /** footerSubscribeSubtitle input for default locale (en) */
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** footerSubscribeTitle input for default locale (en) */
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  /** footerText input for default locale (en) */
  footerText: Scalars['RichTextAST']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SiteSettingsCreateLocalizationsInput>;
  mainNavigation?: InputMaybe<NavigationCreateOneInlineInput>;
  /** siteName input for default locale (en) */
  siteName: Scalars['String']['input'];
  socialLinks?: InputMaybe<SocialLinkCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteSettingsCreateLocalizationDataInput = {
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactEmail: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  footerText: Scalars['RichTextAST']['input'];
  siteName: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteSettingsCreateLocalizationInput = {
  /** Localization input */
  data: SiteSettingsCreateLocalizationDataInput;
  locale: Locale;
};

export type SiteSettingsCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SiteSettingsCreateLocalizationInput>>;
};

export type SiteSettingsCreateManyInlineInput = {
  /** Connect multiple existing SiteSettings documents */
  connect?: InputMaybe<Array<SiteSettingsWhereUniqueInput>>;
  /** Create and connect multiple existing SiteSettings documents */
  create?: InputMaybe<Array<SiteSettingsCreateInput>>;
};

export type SiteSettingsCreateOneInlineInput = {
  /** Connect one existing SiteSettings document */
  connect?: InputMaybe<SiteSettingsWhereUniqueInput>;
  /** Create and connect one SiteSettings document */
  create?: InputMaybe<SiteSettingsCreateInput>;
};

/** An edge in a connection. */
export type SiteSettingsEdge = {
  __typename?: 'SiteSettingsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SiteSettings;
};

/** Identifies documents */
export type SiteSettingsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brandColor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brandColor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brandColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brandColor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brandColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brandColor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brandColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brandColor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brandColor_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  defaultMetaImage?: InputMaybe<AssetWhereInput>;
  documentInStages_every?: InputMaybe<SiteSettingsWhereStageInput>;
  documentInStages_none?: InputMaybe<SiteSettingsWhereStageInput>;
  documentInStages_some?: InputMaybe<SiteSettingsWhereStageInput>;
  footerNavigation?: InputMaybe<NavigationWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mainNavigation?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>;
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>;
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SiteSettingsOrderByInput =
  | 'brandColor_ASC'
  | 'brandColor_DESC'
  | 'contactEmail_ASC'
  | 'contactEmail_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'footerSubscribeSubtitle_ASC'
  | 'footerSubscribeSubtitle_DESC'
  | 'footerSubscribeTitle_ASC'
  | 'footerSubscribeTitle_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'siteName_ASC'
  | 'siteName_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type SiteSettingsUpdateInput = {
  /** announcement input for default locale (en) */
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  /** contactEmail input for default locale (en) */
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  defaultMetaImage?: InputMaybe<AssetUpdateOneInlineInput>;
  footerNavigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  /** footerSubscribeSubtitle input for default locale (en) */
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** footerSubscribeTitle input for default locale (en) */
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  /** footerText input for default locale (en) */
  footerText?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<SiteSettingsUpdateLocalizationsInput>;
  mainNavigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  /** siteName input for default locale (en) */
  siteName?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<SocialLinkUpdateManyInlineInput>;
};

export type SiteSettingsUpdateLocalizationDataInput = {
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  footerText?: InputMaybe<Scalars['RichTextAST']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSettingsUpdateLocalizationInput = {
  data: SiteSettingsUpdateLocalizationDataInput;
  locale: Locale;
};

export type SiteSettingsUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SiteSettingsCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SiteSettingsUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SiteSettingsUpsertLocalizationInput>>;
};

export type SiteSettingsUpdateManyInlineInput = {
  /** Connect multiple existing SiteSettings documents */
  connect?: InputMaybe<Array<SiteSettingsConnectInput>>;
  /** Create and connect multiple SiteSettings documents */
  create?: InputMaybe<Array<SiteSettingsCreateInput>>;
  /** Delete multiple SiteSettings documents */
  delete?: InputMaybe<Array<SiteSettingsWhereUniqueInput>>;
  /** Disconnect multiple SiteSettings documents */
  disconnect?: InputMaybe<Array<SiteSettingsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SiteSettings documents */
  set?: InputMaybe<Array<SiteSettingsWhereUniqueInput>>;
  /** Update multiple SiteSettings documents */
  update?: InputMaybe<Array<SiteSettingsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SiteSettings documents */
  upsert?: InputMaybe<Array<SiteSettingsUpsertWithNestedWhereUniqueInput>>;
};

export type SiteSettingsUpdateManyInput = {
  /** announcement input for default locale (en) */
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  /** contactEmail input for default locale (en) */
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  /** footerSubscribeSubtitle input for default locale (en) */
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** footerSubscribeTitle input for default locale (en) */
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  /** footerText input for default locale (en) */
  footerText?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<SiteSettingsUpdateManyLocalizationsInput>;
  /** siteName input for default locale (en) */
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSettingsUpdateManyLocalizationDataInput = {
  announcement?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  footerText?: InputMaybe<Scalars['RichTextAST']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSettingsUpdateManyLocalizationInput = {
  data: SiteSettingsUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SiteSettingsUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SiteSettingsUpdateManyLocalizationInput>>;
};

export type SiteSettingsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SiteSettingsUpdateManyInput;
  /** Document search */
  where: SiteSettingsWhereInput;
};

export type SiteSettingsUpdateOneInlineInput = {
  /** Connect existing SiteSettings document */
  connect?: InputMaybe<SiteSettingsWhereUniqueInput>;
  /** Create and connect one SiteSettings document */
  create?: InputMaybe<SiteSettingsCreateInput>;
  /** Delete currently connected SiteSettings document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SiteSettings document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SiteSettings document */
  update?: InputMaybe<SiteSettingsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SiteSettings document */
  upsert?: InputMaybe<SiteSettingsUpsertWithNestedWhereUniqueInput>;
};

export type SiteSettingsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SiteSettingsUpdateInput;
  /** Unique document search */
  where: SiteSettingsWhereUniqueInput;
};

export type SiteSettingsUpsertInput = {
  /** Create document if it didn't exist */
  create: SiteSettingsCreateInput;
  /** Update document if it exists */
  update: SiteSettingsUpdateInput;
};

export type SiteSettingsUpsertLocalizationInput = {
  create: SiteSettingsCreateLocalizationDataInput;
  locale: Locale;
  update: SiteSettingsUpdateLocalizationDataInput;
};

export type SiteSettingsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SiteSettingsUpsertInput;
  /** Unique document search */
  where: SiteSettingsWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SiteSettingsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SiteSettingsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteSettingsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brandColor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brandColor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brandColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brandColor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brandColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brandColor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brandColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brandColor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brandColor_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactEmail_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactEmail_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  defaultMetaImage?: InputMaybe<AssetWhereInput>;
  documentInStages_every?: InputMaybe<SiteSettingsWhereStageInput>;
  documentInStages_none?: InputMaybe<SiteSettingsWhereStageInput>;
  documentInStages_some?: InputMaybe<SiteSettingsWhereStageInput>;
  footerNavigation?: InputMaybe<NavigationWhereInput>;
  footerSubscribeSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  footerSubscribeSubtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  footerSubscribeSubtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  footerSubscribeSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerSubscribeSubtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  footerSubscribeSubtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  footerSubscribeSubtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  footerSubscribeSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  footerSubscribeSubtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  footerSubscribeSubtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  footerSubscribeTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  footerSubscribeTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  footerSubscribeTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  footerSubscribeTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerSubscribeTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  footerSubscribeTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  footerSubscribeTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  footerSubscribeTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  footerSubscribeTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  footerSubscribeTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mainNavigation?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  siteName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  siteName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  siteName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  siteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  siteName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  siteName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  siteName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  siteName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  siteName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  siteName_starts_with?: InputMaybe<Scalars['String']['input']>;
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>;
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>;
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SiteSettingsWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteSettingsWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteSettingsWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteSettingsWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SiteSettingsWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References SiteSettings record uniquely */
export type SiteSettingsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Social media link configuration */
export type SocialLink = Entity & {
  __typename?: 'SocialLink';
  /** Social media handle (e.g., @hybike) - optional */
  handle?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<SocialLink>;
  /** Social media platform */
  platform: SocialPlatform;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Full URL to social media profile */
  url: Scalars['String']['output'];
};


/** Social media link configuration */
export type SocialLinkLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Social media link configuration */
export type SocialLinkUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SocialLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialLinkConnection = {
  __typename?: 'SocialLinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialLinkCreateInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SocialLinkCreateLocalizationsInput>;
  platform: SocialPlatform;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** url input for default locale (en) */
  url: Scalars['String']['input'];
};

export type SocialLinkCreateLocalizationDataInput = {
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type SocialLinkCreateLocalizationInput = {
  /** Localization input */
  data: SocialLinkCreateLocalizationDataInput;
  locale: Locale;
};

export type SocialLinkCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SocialLinkCreateLocalizationInput>>;
};

export type SocialLinkCreateManyInlineInput = {
  /** Create and connect multiple existing SocialLink documents */
  create?: InputMaybe<Array<SocialLinkCreateInput>>;
};

export type SocialLinkCreateOneInlineInput = {
  /** Create and connect one SocialLink document */
  create?: InputMaybe<SocialLinkCreateInput>;
};

export type SocialLinkCreateWithPositionInput = {
  /** Document to create */
  data: SocialLinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SocialLinkEdge = {
  __typename?: 'SocialLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SocialLink;
};

/** Identifies documents */
export type SocialLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  platform?: InputMaybe<SocialPlatform>;
  /** All values that are contained in given list. */
  platform_in?: InputMaybe<Array<InputMaybe<SocialPlatform>>>;
  /** Any other value that exists and is not equal to the given value. */
  platform_not?: InputMaybe<SocialPlatform>;
  /** All values that are not contained in given list. */
  platform_not_in?: InputMaybe<Array<InputMaybe<SocialPlatform>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type SocialLinkOrderByInput =
  | 'handle_ASC'
  | 'handle_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'platform_ASC'
  | 'platform_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'url_ASC'
  | 'url_DESC';

export type SocialLinkParent = SiteSettings;

export type SocialLinkParentConnectInput = {
  SiteSettings?: InputMaybe<SiteSettingsConnectInput>;
};

export type SocialLinkParentCreateInput = {
  SiteSettings?: InputMaybe<SiteSettingsCreateInput>;
};

export type SocialLinkParentCreateManyInlineInput = {
  /** Connect multiple existing SocialLinkParent documents */
  connect?: InputMaybe<Array<SocialLinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing SocialLinkParent documents */
  create?: InputMaybe<Array<SocialLinkParentCreateInput>>;
};

export type SocialLinkParentCreateOneInlineInput = {
  /** Connect one existing SocialLinkParent document */
  connect?: InputMaybe<SocialLinkParentWhereUniqueInput>;
  /** Create and connect one SocialLinkParent document */
  create?: InputMaybe<SocialLinkParentCreateInput>;
};

export type SocialLinkParentUpdateInput = {
  SiteSettings?: InputMaybe<SiteSettingsUpdateInput>;
};

export type SocialLinkParentUpdateManyInlineInput = {
  /** Connect multiple existing SocialLinkParent documents */
  connect?: InputMaybe<Array<SocialLinkParentConnectInput>>;
  /** Create and connect multiple SocialLinkParent documents */
  create?: InputMaybe<Array<SocialLinkParentCreateInput>>;
  /** Delete multiple SocialLinkParent documents */
  delete?: InputMaybe<Array<SocialLinkParentWhereUniqueInput>>;
  /** Disconnect multiple SocialLinkParent documents */
  disconnect?: InputMaybe<Array<SocialLinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialLinkParent documents */
  set?: InputMaybe<Array<SocialLinkParentWhereUniqueInput>>;
  /** Update multiple SocialLinkParent documents */
  update?: InputMaybe<Array<SocialLinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialLinkParent documents */
  upsert?: InputMaybe<Array<SocialLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type SocialLinkParentUpdateManyWithNestedWhereInput = {
  SiteSettings?: InputMaybe<SiteSettingsUpdateManyWithNestedWhereInput>;
};

export type SocialLinkParentUpdateOneInlineInput = {
  /** Connect existing SocialLinkParent document */
  connect?: InputMaybe<SocialLinkParentWhereUniqueInput>;
  /** Create and connect one SocialLinkParent document */
  create?: InputMaybe<SocialLinkParentCreateInput>;
  /** Delete currently connected SocialLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SocialLinkParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SocialLinkParent document */
  update?: InputMaybe<SocialLinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialLinkParent document */
  upsert?: InputMaybe<SocialLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type SocialLinkParentUpdateWithNestedWhereUniqueInput = {
  SiteSettings?: InputMaybe<SiteSettingsUpdateWithNestedWhereUniqueInput>;
};

export type SocialLinkParentUpsertWithNestedWhereUniqueInput = {
  SiteSettings?: InputMaybe<SiteSettingsUpsertWithNestedWhereUniqueInput>;
};

export type SocialLinkParentWhereInput = {
  SiteSettings?: InputMaybe<SiteSettingsWhereInput>;
};

export type SocialLinkParentWhereUniqueInput = {
  SiteSettings?: InputMaybe<SiteSettingsWhereUniqueInput>;
};

export type SocialLinkUpdateInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<SocialLinkUpdateLocalizationsInput>;
  platform?: InputMaybe<SocialPlatform>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialLinkUpdateLocalizationDataInput = {
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialLinkUpdateLocalizationInput = {
  data: SocialLinkUpdateLocalizationDataInput;
  locale: Locale;
};

export type SocialLinkUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SocialLinkCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SocialLinkUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SocialLinkUpsertLocalizationInput>>;
};

export type SocialLinkUpdateManyInlineInput = {
  /** Create and connect multiple SocialLink component instances */
  create?: InputMaybe<Array<SocialLinkCreateWithPositionInput>>;
  /** Delete multiple SocialLink documents */
  delete?: InputMaybe<Array<SocialLinkWhereUniqueInput>>;
  /** Update multiple SocialLink component instances */
  update?: InputMaybe<Array<SocialLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SocialLink component instances */
  upsert?: InputMaybe<Array<SocialLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SocialLinkUpdateManyInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<SocialLinkUpdateManyLocalizationsInput>;
  platform?: InputMaybe<SocialPlatform>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialLinkUpdateManyLocalizationDataInput = {
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialLinkUpdateManyLocalizationInput = {
  data: SocialLinkUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SocialLinkUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SocialLinkUpdateManyLocalizationInput>>;
};

export type SocialLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialLinkUpdateManyInput;
  /** Document search */
  where: SocialLinkWhereInput;
};

export type SocialLinkUpdateOneInlineInput = {
  /** Create and connect one SocialLink document */
  create?: InputMaybe<SocialLinkCreateInput>;
  /** Delete currently connected SocialLink document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SocialLink document */
  update?: InputMaybe<SocialLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialLink document */
  upsert?: InputMaybe<SocialLinkUpsertWithNestedWhereUniqueInput>;
};

export type SocialLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SocialLinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SocialLinkWhereUniqueInput;
};

export type SocialLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialLinkUpdateInput;
  /** Unique document search */
  where: SocialLinkWhereUniqueInput;
};

export type SocialLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialLinkCreateInput;
  /** Update document if it exists */
  update: SocialLinkUpdateInput;
};

export type SocialLinkUpsertLocalizationInput = {
  create: SocialLinkCreateLocalizationDataInput;
  locale: Locale;
  update: SocialLinkUpdateLocalizationDataInput;
};

export type SocialLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SocialLinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SocialLinkWhereUniqueInput;
};

export type SocialLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialLinkUpsertInput;
  /** Unique document search */
  where: SocialLinkWhereUniqueInput;
};

/** Identifies documents */
export type SocialLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  platform?: InputMaybe<SocialPlatform>;
  /** All values that are contained in given list. */
  platform_in?: InputMaybe<Array<InputMaybe<SocialPlatform>>>;
  /** Any other value that exists and is not equal to the given value. */
  platform_not?: InputMaybe<SocialPlatform>;
  /** All values that are not contained in given list. */
  platform_not_in?: InputMaybe<Array<InputMaybe<SocialPlatform>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SocialLink record uniquely */
export type SocialLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Social media platforms */
export type SocialPlatform =
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'LINKEDIN'
  | 'TIKTOK'
  | 'TWITTER'
  | 'YOUTUBE';

/** Stage system enumeration */
export type Stage =
  /** The Draft is the default stage for all your content. */
  | 'DRAFT'
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED';

/** Individual statistic for trust indicators (e.g., "10,000+ Happy Riders") */
export type Stat = Entity & {
  __typename?: 'Stat';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Statistic label (e.g., "Happy Riders", "Average Rating", "Cities") */
  label: Scalars['String']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Stat>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Statistic value (e.g., "10,000+", "4.8★", "50+") */
  value: Scalars['String']['output'];
};


/** Individual statistic for trust indicators (e.g., "10,000+ Happy Riders") */
export type StatLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Individual statistic for trust indicators (e.g., "10,000+ Happy Riders") */
export type StatUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type StatConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StatWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatConnection = {
  __typename?: 'StatConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StatEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StatCreateInput = {
  /** label input for default locale (en) */
  label: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StatCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value: Scalars['String']['input'];
};

export type StatCreateLocalizationDataInput = {
  label: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StatCreateLocalizationInput = {
  /** Localization input */
  data: StatCreateLocalizationDataInput;
  locale: Locale;
};

export type StatCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StatCreateLocalizationInput>>;
};

export type StatCreateManyInlineInput = {
  /** Create and connect multiple existing Stat documents */
  create?: InputMaybe<Array<StatCreateInput>>;
};

export type StatCreateOneInlineInput = {
  /** Create and connect one Stat document */
  create?: InputMaybe<StatCreateInput>;
};

export type StatCreateWithPositionInput = {
  /** Document to create */
  data: StatCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StatEdge = {
  __typename?: 'StatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Stat;
};

/** Identifies documents */
export type StatManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StatOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'label_ASC'
  | 'label_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'value_ASC'
  | 'value_DESC';

export type StatParent = EditorialSection | StatsBar;

export type StatParentConnectInput = {
  EditorialSection?: InputMaybe<EditorialSectionConnectInput>;
  StatsBar?: InputMaybe<StatsBarConnectInput>;
};

export type StatParentCreateInput = {
  EditorialSection?: InputMaybe<EditorialSectionCreateInput>;
  StatsBar?: InputMaybe<StatsBarCreateInput>;
};

export type StatParentCreateManyInlineInput = {
  /** Create and connect multiple existing StatParent documents */
  create?: InputMaybe<Array<StatParentCreateInput>>;
};

export type StatParentCreateOneInlineInput = {
  /** Create and connect one StatParent document */
  create?: InputMaybe<StatParentCreateInput>;
};

export type StatParentCreateWithPositionInput = {
  EditorialSection?: InputMaybe<EditorialSectionCreateWithPositionInput>;
  StatsBar?: InputMaybe<StatsBarCreateWithPositionInput>;
};

export type StatParentUpdateInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpdateInput>;
  StatsBar?: InputMaybe<StatsBarUpdateInput>;
};

export type StatParentUpdateManyInlineInput = {
  /** Create and connect multiple StatParent component instances */
  create?: InputMaybe<Array<StatParentCreateWithPositionInput>>;
  /** Delete multiple StatParent documents */
  delete?: InputMaybe<Array<StatParentWhereUniqueInput>>;
  /** Update multiple StatParent component instances */
  update?: InputMaybe<Array<StatParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StatParent component instances */
  upsert?: InputMaybe<Array<StatParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatParentUpdateManyWithNestedWhereInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpdateManyWithNestedWhereInput>;
  StatsBar?: InputMaybe<StatsBarUpdateManyWithNestedWhereInput>;
};

export type StatParentUpdateOneInlineInput = {
  /** Create and connect one StatParent document */
  create?: InputMaybe<StatParentCreateInput>;
  /** Delete currently connected StatParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StatParent document */
  update?: InputMaybe<StatParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StatParent document */
  upsert?: InputMaybe<StatParentUpsertWithNestedWhereUniqueInput>;
};

export type StatParentUpdateWithNestedWhereUniqueAndPositionInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpdateWithNestedWhereUniqueAndPositionInput>;
  StatsBar?: InputMaybe<StatsBarUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type StatParentUpdateWithNestedWhereUniqueInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpdateWithNestedWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarUpdateWithNestedWhereUniqueInput>;
};

export type StatParentUpsertWithNestedWhereUniqueAndPositionInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpsertWithNestedWhereUniqueAndPositionInput>;
  StatsBar?: InputMaybe<StatsBarUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type StatParentUpsertWithNestedWhereUniqueInput = {
  EditorialSection?: InputMaybe<EditorialSectionUpsertWithNestedWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarUpsertWithNestedWhereUniqueInput>;
};

export type StatParentWhereInput = {
  EditorialSection?: InputMaybe<EditorialSectionWhereInput>;
  StatsBar?: InputMaybe<StatsBarWhereInput>;
};

export type StatParentWhereUniqueInput = {
  EditorialSection?: InputMaybe<EditorialSectionWhereUniqueInput>;
  StatsBar?: InputMaybe<StatsBarWhereUniqueInput>;
};

export type StatUpdateInput = {
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<StatUpdateLocalizationsInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateLocalizationInput = {
  data: StatUpdateLocalizationDataInput;
  locale: Locale;
};

export type StatUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StatCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StatUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StatUpsertLocalizationInput>>;
};

export type StatUpdateManyInlineInput = {
  /** Create and connect multiple Stat component instances */
  create?: InputMaybe<Array<StatCreateWithPositionInput>>;
  /** Delete multiple Stat documents */
  delete?: InputMaybe<Array<StatWhereUniqueInput>>;
  /** Update multiple Stat component instances */
  update?: InputMaybe<Array<StatUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Stat component instances */
  upsert?: InputMaybe<Array<StatUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatUpdateManyInput = {
  /** label input for default locale (en) */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<StatUpdateManyLocalizationsInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyLocalizationDataInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type StatUpdateManyLocalizationInput = {
  data: StatUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StatUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StatUpdateManyLocalizationInput>>;
};

export type StatUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StatUpdateManyInput;
  /** Document search */
  where: StatWhereInput;
};

export type StatUpdateOneInlineInput = {
  /** Create and connect one Stat document */
  create?: InputMaybe<StatCreateInput>;
  /** Delete currently connected Stat document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Stat document */
  update?: InputMaybe<StatUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Stat document */
  upsert?: InputMaybe<StatUpsertWithNestedWhereUniqueInput>;
};

export type StatUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StatUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatWhereUniqueInput;
};

export type StatUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StatUpdateInput;
  /** Unique document search */
  where: StatWhereUniqueInput;
};

export type StatUpsertInput = {
  /** Create document if it didn't exist */
  create: StatCreateInput;
  /** Update document if it exists */
  update: StatUpdateInput;
};

export type StatUpsertLocalizationInput = {
  create: StatCreateLocalizationDataInput;
  locale: Locale;
  update: StatUpdateLocalizationDataInput;
};

export type StatUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StatUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatWhereUniqueInput;
};

export type StatUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StatUpsertInput;
  /** Unique document search */
  where: StatWhereUniqueInput;
};

/** Identifies documents */
export type StatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Stat record uniquely */
export type StatWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Trust indicator bar with statistics (e.g., "10,000+ Riders | 4.8★ Rating") */
export type StatsBar = Entity & {
  __typename?: 'StatsBar';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** How to arrange the statistics */
  layout: StatsLayout;
  /** System stage field */
  stage: Stage;
  /** List of statistics to display */
  stats: Array<Stat>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Trust indicator bar with statistics (e.g., "10,000+ Riders | 4.8★ Rating") */
export type StatsBarStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatWhereInput>;
};

export type StatsBarConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StatsBarWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatsBarConnection = {
  __typename?: 'StatsBarConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StatsBarEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StatsBarCreateInput = {
  layout: StatsLayout;
  stats: StatCreateManyInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StatsBarCreateManyInlineInput = {
  /** Create and connect multiple existing StatsBar documents */
  create?: InputMaybe<Array<StatsBarCreateInput>>;
};

export type StatsBarCreateOneInlineInput = {
  /** Create and connect one StatsBar document */
  create?: InputMaybe<StatsBarCreateInput>;
};

export type StatsBarCreateWithPositionInput = {
  /** Document to create */
  data: StatsBarCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StatsBarEdge = {
  __typename?: 'StatsBarEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: StatsBar;
};

/** Identifies documents */
export type StatsBarManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<StatsLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<StatsLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<StatsLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<StatsLayout>>>;
  stats_every?: InputMaybe<StatWhereInput>;
  stats_none?: InputMaybe<StatWhereInput>;
  stats_some?: InputMaybe<StatWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type StatsBarOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'layout_ASC'
  | 'layout_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type StatsBarParent = Page | PageVariant;

export type StatsBarParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type StatsBarParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type StatsBarParentCreateManyInlineInput = {
  /** Connect multiple existing StatsBarParent documents */
  connect?: InputMaybe<Array<StatsBarParentWhereUniqueInput>>;
  /** Create and connect multiple existing StatsBarParent documents */
  create?: InputMaybe<Array<StatsBarParentCreateInput>>;
};

export type StatsBarParentCreateOneInlineInput = {
  /** Connect one existing StatsBarParent document */
  connect?: InputMaybe<StatsBarParentWhereUniqueInput>;
  /** Create and connect one StatsBarParent document */
  create?: InputMaybe<StatsBarParentCreateInput>;
};

export type StatsBarParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type StatsBarParentUpdateManyInlineInput = {
  /** Connect multiple existing StatsBarParent documents */
  connect?: InputMaybe<Array<StatsBarParentConnectInput>>;
  /** Create and connect multiple StatsBarParent documents */
  create?: InputMaybe<Array<StatsBarParentCreateInput>>;
  /** Delete multiple StatsBarParent documents */
  delete?: InputMaybe<Array<StatsBarParentWhereUniqueInput>>;
  /** Disconnect multiple StatsBarParent documents */
  disconnect?: InputMaybe<Array<StatsBarParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StatsBarParent documents */
  set?: InputMaybe<Array<StatsBarParentWhereUniqueInput>>;
  /** Update multiple StatsBarParent documents */
  update?: InputMaybe<Array<StatsBarParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StatsBarParent documents */
  upsert?: InputMaybe<Array<StatsBarParentUpsertWithNestedWhereUniqueInput>>;
};

export type StatsBarParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type StatsBarParentUpdateOneInlineInput = {
  /** Connect existing StatsBarParent document */
  connect?: InputMaybe<StatsBarParentWhereUniqueInput>;
  /** Create and connect one StatsBarParent document */
  create?: InputMaybe<StatsBarParentCreateInput>;
  /** Delete currently connected StatsBarParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected StatsBarParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StatsBarParent document */
  update?: InputMaybe<StatsBarParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StatsBarParent document */
  upsert?: InputMaybe<StatsBarParentUpsertWithNestedWhereUniqueInput>;
};

export type StatsBarParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type StatsBarParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type StatsBarParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type StatsBarParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type StatsBarUpdateInput = {
  layout?: InputMaybe<StatsLayout>;
  stats?: InputMaybe<StatUpdateManyInlineInput>;
};

export type StatsBarUpdateManyInlineInput = {
  /** Create and connect multiple StatsBar component instances */
  create?: InputMaybe<Array<StatsBarCreateWithPositionInput>>;
  /** Delete multiple StatsBar documents */
  delete?: InputMaybe<Array<StatsBarWhereUniqueInput>>;
  /** Update multiple StatsBar component instances */
  update?: InputMaybe<Array<StatsBarUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StatsBar component instances */
  upsert?: InputMaybe<Array<StatsBarUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatsBarUpdateManyInput = {
  layout?: InputMaybe<StatsLayout>;
};

export type StatsBarUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StatsBarUpdateManyInput;
  /** Document search */
  where: StatsBarWhereInput;
};

export type StatsBarUpdateOneInlineInput = {
  /** Create and connect one StatsBar document */
  create?: InputMaybe<StatsBarCreateInput>;
  /** Delete currently connected StatsBar document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StatsBar document */
  update?: InputMaybe<StatsBarUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StatsBar document */
  upsert?: InputMaybe<StatsBarUpsertWithNestedWhereUniqueInput>;
};

export type StatsBarUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StatsBarUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatsBarWhereUniqueInput;
};

export type StatsBarUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StatsBarUpdateInput;
  /** Unique document search */
  where: StatsBarWhereUniqueInput;
};

export type StatsBarUpsertInput = {
  /** Create document if it didn't exist */
  create: StatsBarCreateInput;
  /** Update document if it exists */
  update: StatsBarUpdateInput;
};

export type StatsBarUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StatsBarUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatsBarWhereUniqueInput;
};

export type StatsBarUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StatsBarUpsertInput;
  /** Unique document search */
  where: StatsBarWhereUniqueInput;
};

/** Identifies documents */
export type StatsBarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatsBarWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<StatsLayout>;
  /** All values that are contained in given list. */
  layout_in?: InputMaybe<Array<InputMaybe<StatsLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  layout_not?: InputMaybe<StatsLayout>;
  /** All values that are not contained in given list. */
  layout_not_in?: InputMaybe<Array<InputMaybe<StatsLayout>>>;
  stats_every?: InputMaybe<StatWhereInput>;
  stats_none?: InputMaybe<StatWhereInput>;
  stats_some?: InputMaybe<StatWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References StatsBar record uniquely */
export type StatsBarWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Layout options for statistics/trust indicators */
export type StatsLayout =
  | 'GRID'
  | 'HORIZONTAL'
  | 'MINIMAL';

export type SystemDateTimeFieldVariation =
  | 'BASE'
  | 'COMBINED'
  | 'LOCALIZATION';

export type TaxonomyNode = {
  __typename?: 'TaxonomyNode';
  path: Array<TaxonomyPathNode>;
  value: Scalars['String']['output'];
};

export type TaxonomyNodeInput = {
  value: Scalars['String']['input'];
};

export type TaxonomyNodeWhereInput = {
  value: Scalars['String']['input'];
};

export type TaxonomyPathNode = {
  __typename?: 'TaxonomyPathNode';
  value: Scalars['String']['output'];
};

/** Text alignment options */
export type TextAlignment =
  | 'CENTER'
  | 'LEFT'
  | 'RIGHT';

/** Vertical list of year/event rows for history sections */
export type Timeline = Entity & {
  __typename?: 'Timeline';
  entries: Array<TimelineEntry>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Vertical list of year/event rows for history sections */
export type TimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TimelineEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineEntryWhereInput>;
};

export type TimelineConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TimelineWhereUniqueInput;
};

/** A connection to a list of items. */
export type TimelineConnection = {
  __typename?: 'TimelineConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TimelineEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TimelineCreateInput = {
  entries: TimelineEntryCreateManyInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TimelineCreateManyInlineInput = {
  /** Create and connect multiple existing Timeline documents */
  create?: InputMaybe<Array<TimelineCreateInput>>;
};

export type TimelineCreateOneInlineInput = {
  /** Create and connect one Timeline document */
  create?: InputMaybe<TimelineCreateInput>;
};

export type TimelineCreateWithPositionInput = {
  /** Document to create */
  data: TimelineCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TimelineEdge = {
  __typename?: 'TimelineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Timeline;
};

/** A single year + event row in a Timeline section */
export type TimelineEntry = Entity & {
  __typename?: 'TimelineEntry';
  event: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TimelineEntry>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year: Scalars['String']['output'];
};


/** A single year + event row in a Timeline section */
export type TimelineEntryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** A single year + event row in a Timeline section */
export type TimelineEntryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type TimelineEntryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TimelineEntryWhereUniqueInput;
};

/** A connection to a list of items. */
export type TimelineEntryConnection = {
  __typename?: 'TimelineEntryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TimelineEntryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TimelineEntryCreateInput = {
  /** event input for default locale (en) */
  event: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TimelineEntryCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  year: Scalars['String']['input'];
};

export type TimelineEntryCreateLocalizationDataInput = {
  event: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TimelineEntryCreateLocalizationInput = {
  /** Localization input */
  data: TimelineEntryCreateLocalizationDataInput;
  locale: Locale;
};

export type TimelineEntryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TimelineEntryCreateLocalizationInput>>;
};

export type TimelineEntryCreateManyInlineInput = {
  /** Create and connect multiple existing TimelineEntry documents */
  create?: InputMaybe<Array<TimelineEntryCreateInput>>;
};

export type TimelineEntryCreateOneInlineInput = {
  /** Create and connect one TimelineEntry document */
  create?: InputMaybe<TimelineEntryCreateInput>;
};

export type TimelineEntryCreateWithPositionInput = {
  /** Document to create */
  data: TimelineEntryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TimelineEntryEdge = {
  __typename?: 'TimelineEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TimelineEntry;
};

/** Identifies documents */
export type TimelineEntryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  year?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEntryOrderByInput =
  | 'event_ASC'
  | 'event_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'year_ASC'
  | 'year_DESC';

export type TimelineEntryParent = Timeline;

export type TimelineEntryParentConnectInput = {
  Timeline?: InputMaybe<TimelineConnectInput>;
};

export type TimelineEntryParentCreateInput = {
  Timeline?: InputMaybe<TimelineCreateInput>;
};

export type TimelineEntryParentCreateManyInlineInput = {
  /** Create and connect multiple existing TimelineEntryParent documents */
  create?: InputMaybe<Array<TimelineEntryParentCreateInput>>;
};

export type TimelineEntryParentCreateOneInlineInput = {
  /** Create and connect one TimelineEntryParent document */
  create?: InputMaybe<TimelineEntryParentCreateInput>;
};

export type TimelineEntryParentCreateWithPositionInput = {
  Timeline?: InputMaybe<TimelineCreateWithPositionInput>;
};

export type TimelineEntryParentUpdateInput = {
  Timeline?: InputMaybe<TimelineUpdateInput>;
};

export type TimelineEntryParentUpdateManyInlineInput = {
  /** Create and connect multiple TimelineEntryParent component instances */
  create?: InputMaybe<Array<TimelineEntryParentCreateWithPositionInput>>;
  /** Delete multiple TimelineEntryParent documents */
  delete?: InputMaybe<Array<TimelineEntryParentWhereUniqueInput>>;
  /** Update multiple TimelineEntryParent component instances */
  update?: InputMaybe<Array<TimelineEntryParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TimelineEntryParent component instances */
  upsert?: InputMaybe<Array<TimelineEntryParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TimelineEntryParentUpdateManyWithNestedWhereInput = {
  Timeline?: InputMaybe<TimelineUpdateManyWithNestedWhereInput>;
};

export type TimelineEntryParentUpdateOneInlineInput = {
  /** Create and connect one TimelineEntryParent document */
  create?: InputMaybe<TimelineEntryParentCreateInput>;
  /** Delete currently connected TimelineEntryParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TimelineEntryParent document */
  update?: InputMaybe<TimelineEntryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TimelineEntryParent document */
  upsert?: InputMaybe<TimelineEntryParentUpsertWithNestedWhereUniqueInput>;
};

export type TimelineEntryParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TimelineEntryParentUpdateWithNestedWhereUniqueInput = {
  Timeline?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
};

export type TimelineEntryParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TimelineEntryParentUpsertWithNestedWhereUniqueInput = {
  Timeline?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type TimelineEntryParentWhereInput = {
  Timeline?: InputMaybe<TimelineWhereInput>;
};

export type TimelineEntryParentWhereUniqueInput = {
  Timeline?: InputMaybe<TimelineWhereUniqueInput>;
};

export type TimelineEntryUpdateInput = {
  /** event input for default locale (en) */
  event?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TimelineEntryUpdateLocalizationsInput>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEntryUpdateLocalizationDataInput = {
  event?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEntryUpdateLocalizationInput = {
  data: TimelineEntryUpdateLocalizationDataInput;
  locale: Locale;
};

export type TimelineEntryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TimelineEntryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TimelineEntryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TimelineEntryUpsertLocalizationInput>>;
};

export type TimelineEntryUpdateManyInlineInput = {
  /** Create and connect multiple TimelineEntry component instances */
  create?: InputMaybe<Array<TimelineEntryCreateWithPositionInput>>;
  /** Delete multiple TimelineEntry documents */
  delete?: InputMaybe<Array<TimelineEntryWhereUniqueInput>>;
  /** Update multiple TimelineEntry component instances */
  update?: InputMaybe<Array<TimelineEntryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TimelineEntry component instances */
  upsert?: InputMaybe<Array<TimelineEntryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TimelineEntryUpdateManyInput = {
  /** event input for default locale (en) */
  event?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TimelineEntryUpdateManyLocalizationsInput>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEntryUpdateManyLocalizationDataInput = {
  event?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEntryUpdateManyLocalizationInput = {
  data: TimelineEntryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TimelineEntryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TimelineEntryUpdateManyLocalizationInput>>;
};

export type TimelineEntryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TimelineEntryUpdateManyInput;
  /** Document search */
  where: TimelineEntryWhereInput;
};

export type TimelineEntryUpdateOneInlineInput = {
  /** Create and connect one TimelineEntry document */
  create?: InputMaybe<TimelineEntryCreateInput>;
  /** Delete currently connected TimelineEntry document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TimelineEntry document */
  update?: InputMaybe<TimelineEntryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TimelineEntry document */
  upsert?: InputMaybe<TimelineEntryUpsertWithNestedWhereUniqueInput>;
};

export type TimelineEntryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TimelineEntryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineEntryWhereUniqueInput;
};

export type TimelineEntryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TimelineEntryUpdateInput;
  /** Unique document search */
  where: TimelineEntryWhereUniqueInput;
};

export type TimelineEntryUpsertInput = {
  /** Create document if it didn't exist */
  create: TimelineEntryCreateInput;
  /** Update document if it exists */
  update: TimelineEntryUpdateInput;
};

export type TimelineEntryUpsertLocalizationInput = {
  create: TimelineEntryCreateLocalizationDataInput;
  locale: Locale;
  update: TimelineEntryUpdateLocalizationDataInput;
};

export type TimelineEntryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TimelineEntryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineEntryWhereUniqueInput;
};

export type TimelineEntryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TimelineEntryUpsertInput;
  /** Unique document search */
  where: TimelineEntryWhereUniqueInput;
};

/** Identifies documents */
export type TimelineEntryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineEntryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  event_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  event_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  event_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  event_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  event_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  event_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  event_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  event_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  event_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  year?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TimelineEntry record uniquely */
export type TimelineEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type TimelineManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  entries_every?: InputMaybe<TimelineEntryWhereInput>;
  entries_none?: InputMaybe<TimelineEntryWhereInput>;
  entries_some?: InputMaybe<TimelineEntryWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type TimelineOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type TimelineParent = Page | PageVariant;

export type TimelineParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  PageVariant?: InputMaybe<PageVariantConnectInput>;
};

export type TimelineParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  PageVariant?: InputMaybe<PageVariantCreateInput>;
};

export type TimelineParentCreateManyInlineInput = {
  /** Connect multiple existing TimelineParent documents */
  connect?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Create and connect multiple existing TimelineParent documents */
  create?: InputMaybe<Array<TimelineParentCreateInput>>;
};

export type TimelineParentCreateOneInlineInput = {
  /** Connect one existing TimelineParent document */
  connect?: InputMaybe<TimelineParentWhereUniqueInput>;
  /** Create and connect one TimelineParent document */
  create?: InputMaybe<TimelineParentCreateInput>;
};

export type TimelineParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  PageVariant?: InputMaybe<PageVariantUpdateInput>;
};

export type TimelineParentUpdateManyInlineInput = {
  /** Connect multiple existing TimelineParent documents */
  connect?: InputMaybe<Array<TimelineParentConnectInput>>;
  /** Create and connect multiple TimelineParent documents */
  create?: InputMaybe<Array<TimelineParentCreateInput>>;
  /** Delete multiple TimelineParent documents */
  delete?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Disconnect multiple TimelineParent documents */
  disconnect?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TimelineParent documents */
  set?: InputMaybe<Array<TimelineParentWhereUniqueInput>>;
  /** Update multiple TimelineParent documents */
  update?: InputMaybe<Array<TimelineParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TimelineParent documents */
  upsert?: InputMaybe<Array<TimelineParentUpsertWithNestedWhereUniqueInput>>;
};

export type TimelineParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  PageVariant?: InputMaybe<PageVariantUpdateManyWithNestedWhereInput>;
};

export type TimelineParentUpdateOneInlineInput = {
  /** Connect existing TimelineParent document */
  connect?: InputMaybe<TimelineParentWhereUniqueInput>;
  /** Create and connect one TimelineParent document */
  create?: InputMaybe<TimelineParentCreateInput>;
  /** Delete currently connected TimelineParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TimelineParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TimelineParent document */
  update?: InputMaybe<TimelineParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TimelineParent document */
  upsert?: InputMaybe<TimelineParentUpsertWithNestedWhereUniqueInput>;
};

export type TimelineParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpdateWithNestedWhereUniqueInput>;
};

export type TimelineParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantUpsertWithNestedWhereUniqueInput>;
};

export type TimelineParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  PageVariant?: InputMaybe<PageVariantWhereInput>;
};

export type TimelineParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  PageVariant?: InputMaybe<PageVariantWhereUniqueInput>;
};

export type TimelineUpdateInput = {
  entries?: InputMaybe<TimelineEntryUpdateManyInlineInput>;
};

export type TimelineUpdateManyInlineInput = {
  /** Create and connect multiple Timeline component instances */
  create?: InputMaybe<Array<TimelineCreateWithPositionInput>>;
  /** Delete multiple Timeline documents */
  delete?: InputMaybe<Array<TimelineWhereUniqueInput>>;
  /** Update multiple Timeline component instances */
  update?: InputMaybe<Array<TimelineUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Timeline component instances */
  upsert?: InputMaybe<Array<TimelineUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TimelineUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TimelineUpdateManyInput;
  /** Document search */
  where: TimelineWhereInput;
};

export type TimelineUpdateOneInlineInput = {
  /** Create and connect one Timeline document */
  create?: InputMaybe<TimelineCreateInput>;
  /** Delete currently connected Timeline document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Timeline document */
  update?: InputMaybe<TimelineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Timeline document */
  upsert?: InputMaybe<TimelineUpsertWithNestedWhereUniqueInput>;
};

export type TimelineUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TimelineUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TimelineUpdateInput;
  /** Unique document search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpsertInput = {
  /** Create document if it didn't exist */
  create: TimelineCreateInput;
  /** Update document if it exists */
  update: TimelineUpdateInput;
};

export type TimelineUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TimelineUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TimelineWhereUniqueInput;
};

export type TimelineUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TimelineUpsertInput;
  /** Unique document search */
  where: TimelineWhereUniqueInput;
};

/** Identifies documents */
export type TimelineWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TimelineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TimelineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  entries_every?: InputMaybe<TimelineEntryWhereInput>;
  entries_none?: InputMaybe<TimelineEntryWhereInput>;
  entries_some?: InputMaybe<TimelineEntryWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Timeline record uniquely */
export type TimelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export type UserKind =
  | 'APP_TOKEN'
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type UserOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'kind_ASC'
  | 'kind_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'picture_ASC'
  | 'picture_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

/** Wheel size options for products */
export type WheelSize =
  | 'SIZE_26'
  | 'SIZE_27_5'
  | 'SIZE_29'
  | 'SIZE_650B'
  | 'SIZE_700C';

export type _FilterKind =
  | 'AND'
  | 'NOT'
  | 'OR'
  | 'contains'
  | 'contains_all'
  | 'contains_none'
  | 'contains_some'
  | 'descendants_of'
  | 'ends_with'
  | 'eq'
  | 'eq_not'
  | 'gt'
  | 'gte'
  | 'in'
  | 'json_path_exists'
  | 'json_value_recursive'
  | 'lt'
  | 'lte'
  | 'not_contains'
  | 'not_ends_with'
  | 'not_in'
  | 'not_starts_with'
  | 'relational_every'
  | 'relational_none'
  | 'relational_single'
  | 'relational_some'
  | 'search'
  | 'starts_with'
  | 'union_empty'
  | 'union_every'
  | 'union_none'
  | 'union_single'
  | 'union_some';

export type _MutationInputFieldKind =
  | 'enum'
  | 'relation'
  | 'richText'
  | 'richTextWithEmbeds'
  | 'scalar'
  | 'union'
  | 'virtual';

export type _MutationKind =
  | 'create'
  | 'delete'
  | 'deleteMany'
  | 'publish'
  | 'publishMany'
  | 'schedulePublish'
  | 'scheduleUnpublish'
  | 'unpublish'
  | 'unpublishMany'
  | 'update'
  | 'updateMany'
  | 'upsert';

export type _OrderDirection =
  | 'asc'
  | 'desc';

export type _RelationInputCardinality =
  | 'many'
  | 'one';

export type _RelationInputKind =
  | 'create'
  | 'update';

export type _RelationKind =
  | 'regular'
  | 'union';

export type _SystemDateTimeFieldVariation =
  | 'base'
  | 'combined'
  | 'localization';

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } }> };

export type GetArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null }, body: { __typename?: 'RichText', html: string } } | null };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'Job', id: string, slug: string, title: string, department: string, location: string, jobType: string, summary: string }> };

export type GetJobQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetJobQuery = { __typename?: 'Query', job?: { __typename?: 'Job', id: string, slug: string, title: string, department: string, location: string, jobType: string, summary: string, responsibilities: Array<string>, requirements: Array<string>, niceToHave: Array<string>, description: { __typename?: 'RichText', html: string } } | null };

export type GetNavigationQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
  locale: Locale;
}>;


export type GetNavigationQuery = { __typename?: 'Query', navigations: Array<{ __typename?: 'Navigation', id: string, identifier: string, items: Array<{ __typename?: 'NavigationItem', id: string, label: string, pageLink?: { __typename?: 'Page', id: string, slug: string } | null }> }> };

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Locale;
  segmentName?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', id: string, title: string, slug: string, sections: Array<{ __typename: 'ArticleList', id: string, blogListHeadline?: string | null, posts: Array<{ __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } }> } | { __typename: 'CTABlock', id: string, headline: string, backgroundColor: BackgroundColor, description?: { __typename?: 'RichText', text: string } | null, primaryButton: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean }, secondaryButton?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null } | { __typename: 'ContactSection', id: string, topics: Array<string>, nameLabel?: string | null, namePlaceholder?: string | null, emailLabel?: string | null, emailPlaceholder?: string | null, topicLabel?: string | null, topicPlaceholder?: string | null, messageLabel?: string | null, messagePlaceholder?: string | null, submitLabel?: string | null, successHeadline?: string | null, successBody?: string | null, offices: Array<{ __typename?: 'Office', id: string, city: string, role: string, address: string, email: string, phone: string }> } | { __typename: 'EditorialSection', id: string, eyebrow?: string | null, imageRight?: boolean | null, ctaLabel?: string | null, ctaHref?: string | null, editorialHeadline?: string | null, body?: { __typename?: 'RichText', html: string } | null, image: { __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null }, stats: Array<{ __typename?: 'Stat', id: string, value: string, label: string }> } | { __typename: 'FeatureGrid', id: string, layout: DisplayLayout, features: Array<{ __typename?: 'Feature', id: string, title: string, description: { __typename?: 'RichText', text: string } }> } | { __typename: 'FeaturedArticle', id: string, ctaLabel?: string | null, imageRight?: boolean | null, blogPost?: { __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } } | null } | { __typename: 'HeroSection', id: string, label?: string | null, headline: string, subheadline?: string | null, mediaText?: string | null, textAlignment: TextAlignment, backgroundMedia?: { __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null } | null, primaryCTA?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null, secondaryCTA?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null } | { __typename: 'JobList', id: string, jobs: Array<{ __typename?: 'Job', id: string, slug: string, title: string, department: string, location: string, jobType: string, summary: string }> } | { __typename: 'PageHeader', id: string, subtitle?: string | null, eyebrow?: string | null, pageHeaderTitle: string } | { __typename: 'ProductShowcase', id: string, layout: DisplayLayout, filterByAudience: boolean, displayFilters?: boolean | null, showPrices: boolean, showStock: boolean, products: Array<{ __typename?: 'Product', id: string, slug: string, name: string, tagline?: string | null, category: { __typename?: 'TaxonomyNode', value: string }, image?: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } | null, externalProduct?: { __typename?: 'BigCommerce_BigCommerceSingleProductResponse', data: { __typename?: 'BigCommerce_BigCommerceProduct', calculated_price: number, sale_price?: number | null, inventory_level: number, availability: string } } | null }> } | { __typename: 'SectionHeader', id: string, label?: string | null, sectionHeadingHeadline: string } | { __typename: 'StatsBar', id: string, statsLayout: StatsLayout, stats: Array<{ __typename?: 'Stat', id: string, value: string, label: string }> } | { __typename: 'Timeline', id: string, entries: Array<{ __typename?: 'TimelineEntry', id: string, year: string, event: string }> }>, variants: Array<{ __typename?: 'PageVariant', sections: Array<{ __typename: 'ArticleList', id: string, posts: Array<{ __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } }> } | { __typename: 'CTABlock', id: string, headline: string, backgroundColor: BackgroundColor, description?: { __typename?: 'RichText', text: string } | null, primaryButton: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean }, secondaryButton?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null } | { __typename: 'ContactSection', id: string, topics: Array<string>, nameLabel?: string | null, namePlaceholder?: string | null, emailLabel?: string | null, emailPlaceholder?: string | null, topicLabel?: string | null, topicPlaceholder?: string | null, messageLabel?: string | null, messagePlaceholder?: string | null, submitLabel?: string | null, successHeadline?: string | null, successBody?: string | null, offices: Array<{ __typename?: 'Office', id: string, city: string, role: string, address: string, email: string, phone: string }> } | { __typename: 'EditorialSection', id: string, eyebrow?: string | null, imageRight?: boolean | null, ctaLabel?: string | null, ctaHref?: string | null, editorialHeadline?: string | null, body?: { __typename?: 'RichText', html: string } | null, image: { __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null }, stats: Array<{ __typename?: 'Stat', id: string, value: string, label: string }> } | { __typename: 'FeatureGrid', id: string, layout: DisplayLayout, features: Array<{ __typename?: 'Feature', id: string, title: string, description: { __typename?: 'RichText', text: string } }> } | { __typename: 'FeaturedArticle', id: string, ctaLabel?: string | null, imageRight?: boolean | null, blogPost?: { __typename?: 'Article', id: string, slug: string, title: string, category: string, publishedDate: string, readTime?: string | null, summary: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } } | null } | { __typename: 'HeroSection', id: string, headline: string, subheadline?: string | null, mediaText?: string | null, textAlignment: TextAlignment, backgroundMedia?: { __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null } | null, primaryCTA?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null, secondaryCTA?: { __typename?: 'Button', id: string, label: string, href: string, variant: ButtonVariant, openInNewTab: boolean } | null } | { __typename: 'JobList', id: string, jobs: Array<{ __typename?: 'Job', id: string, slug: string, title: string, department: string, location: string, jobType: string, summary: string }> } | { __typename: 'PageHeader', id: string, eyebrow?: string | null, subtitle?: string | null, pageHeaderTitle: string } | { __typename: 'ProductShowcase', id: string, layout: DisplayLayout, filterByAudience: boolean, displayFilters?: boolean | null, showPrices: boolean, showStock: boolean, products: Array<{ __typename?: 'Product', id: string, slug: string, name: string, tagline?: string | null, category: { __typename?: 'TaxonomyNode', value: string }, image?: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } | null, externalProduct?: { __typename?: 'BigCommerce_BigCommerceSingleProductResponse', data: { __typename?: 'BigCommerce_BigCommerceProduct', calculated_price: number, sale_price?: number | null, inventory_level: number, availability: string } } | null }> } | { __typename: 'SectionHeader', id: string, label?: string | null, sectionHeadingHeadline: string } | { __typename: 'StatsBar', id: string, statsLayout: StatsLayout, stats: Array<{ __typename?: 'Stat', id: string, value: string, label: string }> } | { __typename: 'Timeline', id: string, entries: Array<{ __typename?: 'TimelineEntry', id: string, year: string, event: string }> }> }>, seo?: { __typename?: 'SEO', metaTitle: string, metaDescription: string, ogImage?: { __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null } | null } | null }> };

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Locale;
}>;


export type GetProductBySlugQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, slug: string, name: string, tagline?: string | null, productFeatures: Array<string>, featured: boolean, externalProductId?: number | null, description: { __typename?: 'RichText', text: string }, category: { __typename?: 'TaxonomyNode', value: string }, image?: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } | null, specifications?: { __typename?: 'ProductSpecification', frame?: string | null, motor?: string | null, battery?: string | null, range?: string | null, weight?: number | null, groupset?: string | null, gears?: string | null, brakes?: string | null, suspension?: string | null, wheelSize?: WheelSize | null, wheels?: string | null } | null, externalProduct?: { __typename?: 'BigCommerce_BigCommerceSingleProductResponse', data: { __typename?: 'BigCommerce_BigCommerceProduct', calculated_price: number, sale_price?: number | null, inventory_level: number, availability: string, variants: Array<{ __typename?: 'BigCommerce_BigCommerceVariant', calculated_price: number, option_values: Array<{ __typename?: 'BigCommerce_BigCommerceOptionValue', id: number, label: string, option_id: number, option_display_name: string }> }> } } | null } | null };

export type GetProductsQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, slug: string, name: string, tagline?: string | null, productFeatures: Array<string>, featured: boolean, externalProductId?: number | null, category: { __typename?: 'TaxonomyNode', value: string }, image?: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } | null, specifications?: { __typename?: 'ProductSpecification', frame?: string | null, motor?: string | null, battery?: string | null, range?: string | null, weight?: number | null, groupset?: string | null, gears?: string | null, brakes?: string | null, suspension?: string | null, wheelSize?: WheelSize | null, wheels?: string | null } | null, externalProduct?: { __typename?: 'BigCommerce_BigCommerceSingleProductResponse', data: { __typename?: 'BigCommerce_BigCommerceProduct', calculated_price: number, sale_price?: number | null, inventory_level: number, availability: string } } | null }> };

export type GetFeaturedProductsQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetFeaturedProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, slug: string, name: string, tagline?: string | null, productFeatures: Array<string>, category: { __typename?: 'TaxonomyNode', value: string }, image?: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } | null, specifications?: { __typename?: 'ProductSpecification', frame?: string | null, motor?: string | null, battery?: string | null, range?: string | null, weight?: number | null, groupset?: string | null, gears?: string | null, brakes?: string | null, suspension?: string | null, wheelSize?: WheelSize | null, wheels?: string | null } | null, externalProduct?: { __typename?: 'BigCommerce_BigCommerceSingleProductResponse', data: { __typename?: 'BigCommerce_BigCommerceProduct', calculated_price: number, sale_price?: number | null, inventory_level: number, availability: string } } | null }> };

export type GetProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductCategoriesQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', category: { __typename?: 'TaxonomyNode', value: string } }> };

export type GetSegmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSegmentsQuery = { __typename?: 'Query', segments: Array<{ __typename?: 'Segment', id: string, name: string }> };

export type GetSiteSettingsQueryVariables = Exact<{
  locale: Locale;
}>;


export type GetSiteSettingsQuery = { __typename?: 'Query', allSiteSettings: Array<{ __typename?: 'SiteSettings', id: string, siteName: string, brandColor: string, contactEmail: string, footerSubscribeTitle?: string | null, footerSubscribeSubtitle?: string | null, announcement?: { __typename?: 'RichText', html: string } | null, footerText: { __typename?: 'RichText', text: string }, socialLinks: Array<{ __typename?: 'SocialLink', id: string, platform: SocialPlatform, url: string, handle?: string | null }>, mainNavigation?: { __typename?: 'Navigation', id: string, items: Array<{ __typename?: 'NavigationItem', id: string, label: string, pageLink?: { __typename?: 'Page', id: string, slug: string } | null }> } | null, footerNavigation?: { __typename?: 'Navigation', id: string, items: Array<{ __typename?: 'NavigationItem', id: string, label: string, pageLink?: { __typename?: 'Page', id: string, slug: string } | null }> } | null }> };


export const GetArticlesDocument = gql`
    query GetArticles {
  articles(stage: DRAFT, orderBy: publishedDate_DESC, first: 20) {
    id
    slug
    title
    category
    publishedDate
    readTime
    summary
    image {
      url
      width
      height
    }
  }
}
    `;
export const GetArticleDocument = gql`
    query GetArticle($slug: String!) {
  article(where: {slug: $slug}, stage: DRAFT) {
    id
    slug
    title
    category
    publishedDate
    readTime
    summary
    image {
      url
      width
      height
    }
    body {
      html
    }
  }
}
    `;
export const GetJobsDocument = gql`
    query GetJobs {
  jobs(stage: DRAFT, first: 20) {
    id
    slug
    title
    department
    location
    jobType
    summary
  }
}
    `;
export const GetJobDocument = gql`
    query GetJob($slug: String!) {
  job(where: {slug: $slug}, stage: DRAFT) {
    id
    slug
    title
    department
    location
    jobType
    summary
    description {
      html
    }
    responsibilities
    requirements
    niceToHave
  }
}
    `;
export const GetNavigationDocument = gql`
    query GetNavigation($identifier: String!, $locale: Locale!) {
  navigations(
    where: {identifier: $identifier}
    locales: [$locale, en]
    stage: DRAFT
    first: 1
  ) {
    id
    identifier
    items {
      id
      label
      pageLink {
        id
        slug
      }
    }
  }
}
    `;
export const GetPageDocument = gql`
    query GetPage($slug: String!, $locale: Locale!, $segmentName: String) {
  pages(where: {slug: $slug}, locales: [$locale, en], stage: DRAFT, first: 1) {
    id
    title
    slug
    sections {
      __typename
      ... on PageHeader {
        id
        subtitle
        eyebrow
        pageHeaderTitle: title
      }
      ... on ArticleList {
        id
        blogListHeadline: headline
        posts {
          id
          slug
          title
          category
          publishedDate
          readTime
          summary
          image {
            url
            width
            height
          }
        }
      }
      ... on FeaturedArticle {
        id
        ctaLabel
        imageRight
        blogPost {
          id
          slug
          title
          category
          publishedDate
          readTime
          summary
          image {
            url
            width
            height
          }
        }
      }
      ... on JobList {
        id
        jobs {
          id
          slug
          title
          department
          location
          jobType
          summary
        }
      }
      ... on HeroSection {
        id
        label
        headline
        subheadline
        mediaText
        backgroundMedia {
          id
          url
          width
          height
        }
        textAlignment
        primaryCTA {
          id
          label
          href
          variant
          openInNewTab
        }
        secondaryCTA {
          id
          label
          href
          variant
          openInNewTab
        }
      }
      ... on FeatureGrid {
        id
        layout
        features {
          id
          title
          description {
            text
          }
        }
      }
      ... on EditorialSection {
        id
        eyebrow
        editorialHeadline: headline
        body {
          html
        }
        image {
          id
          url
          width
          height
        }
        imageRight
        ctaLabel
        ctaHref
        stats {
          id
          value
          label
        }
      }
      ... on CTABlock {
        id
        headline
        description {
          text
        }
        backgroundColor
        primaryButton {
          id
          label
          href
          variant
          openInNewTab
        }
        secondaryButton {
          id
          label
          href
          variant
          openInNewTab
        }
      }
      ... on ProductShowcase {
        id
        layout
        filterByAudience
        displayFilters
        showPrices
        showStock
        products {
          id
          slug
          name
          tagline
          category {
            value
          }
          image {
            url
            width
            height
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
      ... on StatsBar {
        id
        statsLayout: layout
        stats {
          id
          value
          label
        }
      }
      ... on SectionHeader {
        id
        label
        sectionHeadingHeadline: headline
      }
      ... on Timeline {
        id
        entries {
          id
          year
          event
        }
      }
      ... on ContactSection {
        id
        topics
        nameLabel
        namePlaceholder
        emailLabel
        emailPlaceholder
        topicLabel
        topicPlaceholder
        messageLabel
        messagePlaceholder
        submitLabel
        successHeadline
        successBody
        offices {
          id
          city
          role
          address
          email
          phone
        }
      }
    }
    variants(where: {segments_some: {name: $segmentName}}) {
      sections {
        __typename
        ... on PageHeader {
          id
          eyebrow
          pageHeaderTitle: title
          subtitle
        }
        ... on ArticleList {
          id
          posts {
            id
            slug
            title
            category
            publishedDate
            readTime
            summary
            image {
              url
              width
              height
            }
          }
        }
        ... on FeaturedArticle {
          id
          ctaLabel
          imageRight
          blogPost {
            id
            slug
            title
            category
            publishedDate
            readTime
            summary
            image {
              url
              width
              height
            }
          }
        }
        ... on JobList {
          id
          jobs {
            id
            slug
            title
            department
            location
            jobType
            summary
          }
        }
        ... on HeroSection {
          id
          headline
          subheadline
          mediaText
          backgroundMedia {
            id
            url
            width
            height
          }
          textAlignment
          primaryCTA {
            id
            label
            href
            variant
            openInNewTab
          }
          secondaryCTA {
            id
            label
            href
            variant
            openInNewTab
          }
        }
        ... on FeatureGrid {
          id
          layout
          features {
            id
            title
            description {
              text
            }
          }
        }
        ... on EditorialSection {
          id
          eyebrow
          editorialHeadline: headline
          body {
            html
          }
          image {
            id
            url
            width
            height
          }
          imageRight
          ctaLabel
          ctaHref
          stats {
            id
            value
            label
          }
        }
        ... on CTABlock {
          id
          headline
          description {
            text
          }
          backgroundColor
          primaryButton {
            id
            label
            href
            variant
            openInNewTab
          }
          secondaryButton {
            id
            label
            href
            variant
            openInNewTab
          }
        }
        ... on ProductShowcase {
          id
          layout
          filterByAudience
          displayFilters
          showPrices
          showStock
          products {
            id
            slug
            name
            tagline
            category {
              value
            }
            image {
              url
              width
              height
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
        ... on StatsBar {
          id
          statsLayout: layout
          stats {
            id
            value
            label
          }
        }
        ... on SectionHeader {
          id
          label
          sectionHeadingHeadline: headline
        }
        ... on Timeline {
          id
          entries {
            id
            year
            event
          }
        }
        ... on ContactSection {
          id
          topics
          nameLabel
          namePlaceholder
          emailLabel
          emailPlaceholder
          topicLabel
          topicPlaceholder
          messageLabel
          messagePlaceholder
          submitLabel
          successHeadline
          successBody
          offices {
            id
            city
            role
            address
            email
            phone
          }
        }
      }
    }
    seo {
      metaTitle
      metaDescription
      ogImage {
        id
        url
        width
        height
      }
    }
  }
}
    `;
export const GetProductBySlugDocument = gql`
    query GetProductBySlug($slug: String!, $locale: Locale!) {
  product(where: {slug: $slug}, locales: [$locale, en], stage: DRAFT) {
    id
    slug
    name
    tagline
    description {
      text
    }
    category {
      value
    }
    image {
      url
      width
      height
    }
    productFeatures
    featured
    specifications {
      frame
      motor
      battery
      range
      weight
      groupset
      gears
      brakes
      suspension
      wheelSize
      wheels
    }
    externalProductId
    externalProduct {
      data {
        calculated_price
        sale_price
        inventory_level
        availability
        variants {
          calculated_price
          option_values {
            id
            label
            option_id
            option_display_name
          }
        }
      }
    }
  }
}
    `;
export const GetProductsDocument = gql`
    query GetProducts($locale: Locale!) {
  products(locales: [$locale, en], stage: DRAFT, first: 20) {
    id
    slug
    name
    tagline
    category {
      value
    }
    image {
      url
      width
      height
    }
    productFeatures
    featured
    specifications {
      frame
      motor
      battery
      range
      weight
      groupset
      gears
      brakes
      suspension
      wheelSize
      wheels
    }
    externalProductId
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
export const GetFeaturedProductsDocument = gql`
    query GetFeaturedProducts($locale: Locale!) {
  products(
    locales: [$locale, en]
    stage: DRAFT
    first: 4
    where: {featured: true}
  ) {
    id
    slug
    name
    tagline
    category {
      value
    }
    image {
      url
      width
      height
    }
    productFeatures
    specifications {
      frame
      motor
      battery
      range
      weight
      groupset
      gears
      brakes
      suspension
      wheelSize
      wheels
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
export const GetProductCategoriesDocument = gql`
    query GetProductCategories {
  products(stage: DRAFT, first: 100) {
    category {
      value
    }
  }
}
    `;
export const GetSegmentsDocument = gql`
    query GetSegments {
  segments(stage: DRAFT) {
    id
    name
  }
}
    `;
export const GetSiteSettingsDocument = gql`
    query GetSiteSettings($locale: Locale!) {
  allSiteSettings(locales: [$locale, en], stage: DRAFT, first: 1) {
    id
    siteName
    brandColor
    contactEmail
    announcement {
      html
    }
    footerText {
      text
    }
    footerSubscribeTitle
    footerSubscribeSubtitle
    socialLinks {
      id
      platform
      url
      handle
    }
    mainNavigation {
      id
      items {
        id
        label
        pageLink {
          id
          slug
        }
      }
    }
    footerNavigation {
      id
      items {
        id
        label
        pageLink {
          id
          slug
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetArticles(variables?: GetArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticlesQuery>({ document: GetArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetArticles', 'query', variables);
    },
    GetArticle(variables: GetArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticleQuery>({ document: GetArticleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetArticle', 'query', variables);
    },
    GetJobs(variables?: GetJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobsQuery>({ document: GetJobsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetJobs', 'query', variables);
    },
    GetJob(variables: GetJobQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobQuery>({ document: GetJobDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetJob', 'query', variables);
    },
    GetNavigation(variables: GetNavigationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNavigationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNavigationQuery>({ document: GetNavigationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetNavigation', 'query', variables);
    },
    GetPage(variables: GetPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageQuery>({ document: GetPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPage', 'query', variables);
    },
    GetProductBySlug(variables: GetProductBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetProductBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductBySlugQuery>({ document: GetProductBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProductBySlug', 'query', variables);
    },
    GetProducts(variables: GetProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>({ document: GetProductsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProducts', 'query', variables);
    },
    GetFeaturedProducts(variables: GetFeaturedProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetFeaturedProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFeaturedProductsQuery>({ document: GetFeaturedProductsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetFeaturedProducts', 'query', variables);
    },
    GetProductCategories(variables?: GetProductCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetProductCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductCategoriesQuery>({ document: GetProductCategoriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProductCategories', 'query', variables);
    },
    GetSegments(variables?: GetSegmentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSegmentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSegmentsQuery>({ document: GetSegmentsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetSegments', 'query', variables);
    },
    GetSiteSettings(variables: GetSiteSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSiteSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSiteSettingsQuery>({ document: GetSiteSettingsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetSiteSettings', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;