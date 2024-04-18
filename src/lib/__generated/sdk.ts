import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  campusEventsCollection?: Maybe<CampusEventsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsCampusEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEvents = Entry & {
  __typename?: 'CampusEvents';
  contentfulMetadata: ContentfulMetadata;
  eventType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  guestspeakerName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CampusEventsLinkingCollections>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  talkDate?: Maybe<Scalars['DateTime']['output']>;
  talkTitle?: Maybe<Scalars['String']['output']>;
  talkVideo?: Maybe<Scalars['String']['output']>;
  thumbnailPicture?: Maybe<Asset>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsEventTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsGuestspeakerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsTalkDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsTalkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsTalkVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/campusEvents) */
export type CampusEventsThumbnailPictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CampusEventsCollection = {
  __typename?: 'CampusEventsCollection';
  items: Array<Maybe<CampusEvents>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CampusEventsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CampusEventsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CampusEventsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventType_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  guestspeakerName?: InputMaybe<Scalars['String']['input']>;
  guestspeakerName_contains?: InputMaybe<Scalars['String']['input']>;
  guestspeakerName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  guestspeakerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  guestspeakerName_not?: InputMaybe<Scalars['String']['input']>;
  guestspeakerName_not_contains?: InputMaybe<Scalars['String']['input']>;
  guestspeakerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  talkDate?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  talkDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  talkDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  talkDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  talkTitle?: InputMaybe<Scalars['String']['input']>;
  talkTitle_contains?: InputMaybe<Scalars['String']['input']>;
  talkTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  talkTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  talkTitle_not?: InputMaybe<Scalars['String']['input']>;
  talkTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  talkTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  talkVideo?: InputMaybe<Scalars['String']['input']>;
  talkVideo_contains?: InputMaybe<Scalars['String']['input']>;
  talkVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  talkVideo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  talkVideo_not?: InputMaybe<Scalars['String']['input']>;
  talkVideo_not_contains?: InputMaybe<Scalars['String']['input']>;
  talkVideo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailPicture_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CampusEventsLinkingCollections = {
  __typename?: 'CampusEventsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CampusEventsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CampusEventsOrder {
  GuestspeakerNameAsc = 'guestspeakerName_ASC',
  GuestspeakerNameDesc = 'guestspeakerName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TalkDateAsc = 'talkDate_ASC',
  TalkDateDesc = 'talkDate_DESC',
  TalkTitleAsc = 'talkTitle_ASC',
  TalkTitleDesc = 'talkTitle_DESC',
  TalkVideoAsc = 'talkVideo_ASC',
  TalkVideoDesc = 'talkVideo_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  campusEvents?: Maybe<CampusEvents>;
  campusEventsCollection?: Maybe<CampusEventsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  walkthroughScripts?: Maybe<WalkthroughScripts>;
  walkthroughScriptsCollection?: Maybe<WalkthroughScriptsCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCampusEventsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCampusEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampusEventsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampusEventsFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryWalkthroughScriptsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryWalkthroughScriptsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<WalkthroughScriptsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WalkthroughScriptsFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScripts = Entry & {
  __typename?: 'WalkthroughScripts';
  aiAvatarVideo?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<WalkthroughScriptsLinkingCollections>;
  sequenceNumber?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  videoCaptions?: Maybe<Scalars['String']['output']>;
  videoDataType?: Maybe<Scalars['String']['output']>;
  videoFile?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsAiAvatarVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsSequenceNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsVideoCaptionsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsVideoDataTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/nn685bngrpld/content_types/walkthroughScripts) */
export type WalkthroughScriptsVideoFileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WalkthroughScriptsCollection = {
  __typename?: 'WalkthroughScriptsCollection';
  items: Array<Maybe<WalkthroughScripts>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type WalkthroughScriptsFilter = {
  AND?: InputMaybe<Array<InputMaybe<WalkthroughScriptsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WalkthroughScriptsFilter>>>;
  aiAvatarVideo?: InputMaybe<Scalars['String']['input']>;
  aiAvatarVideo_contains?: InputMaybe<Scalars['String']['input']>;
  aiAvatarVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aiAvatarVideo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aiAvatarVideo_not?: InputMaybe<Scalars['String']['input']>;
  aiAvatarVideo_not_contains?: InputMaybe<Scalars['String']['input']>;
  aiAvatarVideo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sequenceNumber?: InputMaybe<Scalars['String']['input']>;
  sequenceNumber_contains?: InputMaybe<Scalars['String']['input']>;
  sequenceNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sequenceNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sequenceNumber_not?: InputMaybe<Scalars['String']['input']>;
  sequenceNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  sequenceNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  videoCaptions?: InputMaybe<Scalars['String']['input']>;
  videoCaptions_contains?: InputMaybe<Scalars['String']['input']>;
  videoCaptions_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoCaptions_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoCaptions_not?: InputMaybe<Scalars['String']['input']>;
  videoCaptions_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoCaptions_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoDataType?: InputMaybe<Scalars['String']['input']>;
  videoDataType_contains?: InputMaybe<Scalars['String']['input']>;
  videoDataType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoDataType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoDataType_not?: InputMaybe<Scalars['String']['input']>;
  videoDataType_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoDataType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoFile?: InputMaybe<Scalars['String']['input']>;
  videoFile_contains?: InputMaybe<Scalars['String']['input']>;
  videoFile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoFile_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoFile_not?: InputMaybe<Scalars['String']['input']>;
  videoFile_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoFile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WalkthroughScriptsLinkingCollections = {
  __typename?: 'WalkthroughScriptsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type WalkthroughScriptsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum WalkthroughScriptsOrder {
  AiAvatarVideoAsc = 'aiAvatarVideo_ASC',
  AiAvatarVideoDesc = 'aiAvatarVideo_DESC',
  SequenceNumberAsc = 'sequenceNumber_ASC',
  SequenceNumberDesc = 'sequenceNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VideoCaptionsAsc = 'videoCaptions_ASC',
  VideoCaptionsDesc = 'videoCaptions_DESC',
  VideoDataTypeAsc = 'videoDataType_ASC',
  VideoDataTypeDesc = 'videoDataType_DESC',
  VideoFileAsc = 'videoFile_ASC',
  VideoFileDesc = 'videoFile_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CampusEventsCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type CampusEventsCollectionQuery = { __typename?: 'Query', campusEventsCollection?: { __typename?: 'CampusEventsCollection', items: Array<{ __typename?: 'CampusEvents', guestspeakerName?: string | null, talkTitle?: string | null, tags?: Array<string | null> | null, talkDate?: any | null, eventType?: Array<string | null> | null, talkVideo?: string | null, thumbnailPicture?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type WalkthroughScriptsCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type WalkthroughScriptsCollectionQuery = { __typename?: 'Query', walkthroughScriptsCollection?: { __typename?: 'WalkthroughScriptsCollection', items: Array<{ __typename?: 'WalkthroughScripts', videoFile?: string | null, sequenceNumber?: string | null, aiAvatarVideo?: string | null, videoDataType?: string | null } | null> } | null };


export const CampusEventsCollectionDocument = gql`
    query campusEventsCollection {
  campusEventsCollection {
    items {
      guestspeakerName
      talkTitle
      tags
      talkDate
      eventType
      talkVideo
      thumbnailPicture {
        url
      }
    }
  }
}
    `;
export const WalkthroughScriptsCollectionDocument = gql`
    query walkthroughScriptsCollection {
  walkthroughScriptsCollection {
    items {
      videoFile
      sequenceNumber
      aiAvatarVideo
      videoDataType
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    campusEventsCollection(variables?: CampusEventsCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CampusEventsCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CampusEventsCollectionQuery>(CampusEventsCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'campusEventsCollection', 'query', variables);
    },
    walkthroughScriptsCollection(variables?: WalkthroughScriptsCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WalkthroughScriptsCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WalkthroughScriptsCollectionQuery>(WalkthroughScriptsCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'walkthroughScriptsCollection', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;