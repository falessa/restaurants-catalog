import { gql } from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GenericScalar: { input: any; output: any; }
};

export type Business = {
  __typename?: 'Business';
  /** Yelp alias of this business. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Business attributes, if available. */
  attributes?: Maybe<Scalars['GenericScalar']['output']>;
  /** A list of category title and alias pairs associated with this business. */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** The coordinates of this business. */
  coordinates?: Maybe<Coordinates>;
  /** Phone number of the business formatted nicely to be displayed to users. The format is the standard phone number format for the business's country. */
  display_phone?: Maybe<Scalars['String']['output']>;
  /** When searching, this provides the distance of the business from the search location in meters */
  distance?: Maybe<Scalars['Float']['output']>;
  /** Opening hours of the business. */
  hours?: Maybe<Array<Maybe<Hours>>>;
  /** Yelp ID of this business. */
  id?: Maybe<Scalars['String']['output']>;
  /** Whether business has been claimed by a business owner. */
  is_claimed?: Maybe<Scalars['Boolean']['output']>;
  /** Whether business has been (permanently) closed. */
  is_closed?: Maybe<Scalars['Boolean']['output']>;
  /** The location of this business, including address, city, state, zip code and country. */
  location?: Maybe<Location>;
  /** Name of this business. */
  name?: Maybe<Scalars['String']['output']>;
  /** Phone number of the business. */
  phone?: Maybe<Scalars['String']['output']>;
  /** URLs of up to three photos of the business. */
  photos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Price level of the business. Value is one of $, $$, $$$ and $$$$ or null if we don't have price available for the business. */
  price?: Maybe<Scalars['String']['output']>;
  /** Rating for this business (value ranges from 1, 1.5, ... 4.5, 5). */
  rating?: Maybe<Scalars['Float']['output']>;
  /** Number of reviews for this business. */
  review_count?: Maybe<Scalars['Int']['output']>;
  /** Review snippets from the business. */
  reviews?: Maybe<Array<Maybe<Review>>>;
  /** URL for business page on Yelp. */
  url?: Maybe<Scalars['String']['output']>;
};


export type BusinessReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Businesses = {
  __typename?: 'Businesses';
  /** A list of business Yelp finds based on the search criteria. */
  business?: Maybe<Array<Maybe<Business>>>;
  /** Total number of businesses found. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type Category = {
  __typename?: 'Category';
  /** Alias of a category, when searching for business in certain categories, use alias rather than the title. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Countries for which this category is blacklisted. */
  country_blacklist?: Maybe<Array<Maybe<Country>>>;
  /** Countries for which this category is whitelisted. */
  country_whitelist?: Maybe<Array<Maybe<Country>>>;
  /** List of parent categories. */
  parent_categories?: Maybe<Array<Maybe<Category>>>;
  /** Title of a category for display purposes. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** The latitude of this business. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude of this business. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type Country = {
  __typename?: 'Country';
  /** The ISO 3166-1 alpha-2 code for this country. */
  code?: Maybe<Scalars['String']['output']>;
  /** Supported locales with this country. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Event = {
  __typename?: 'Event';
  /** Number of Yelp users attending this event. */
  attending_count?: Maybe<Scalars['String']['output']>;
  /** The business tied to this event. */
  business?: Maybe<Business>;
  /** The ID of the related business. */
  business_id?: Maybe<Scalars['String']['output']>;
  /** The category of this event. */
  category?: Maybe<Scalars['String']['output']>;
  /** Cost of attending this event. */
  cost?: Maybe<Scalars['Int']['output']>;
  /** Maximum cost of this event. */
  cost_max?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  /** Description excerpt of this event. */
  description?: Maybe<Scalars['String']['output']>;
  /** Yelp page of this event. */
  event_site_url?: Maybe<Scalars['String']['output']>;
  /** Event id. */
  id?: Maybe<Scalars['String']['output']>;
  /** Yelp image url of this event. */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Number of Yelp users interested in attending this event. */
  interested_count?: Maybe<Scalars['String']['output']>;
  /** Whether this event is canceled. */
  is_canceled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this event is free. */
  is_free?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this event is created by a Yelp community manager. */
  is_official?: Maybe<Scalars['Boolean']['output']>;
  /** Latitude of this event. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The location of this business, including address, city, state, zip code and country. */
  location?: Maybe<Location>;
  /** Longitude of this event. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** Name of this event. */
  name?: Maybe<Scalars['String']['output']>;
  /** URL to buy tickets for this event. */
  tickets_url?: Maybe<Scalars['String']['output']>;
  /** Time this event ends. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_end?: Maybe<Scalars['String']['output']>;
  /** Time the event starts. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_start?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type Events = {
  __typename?: 'Events';
  /** List of events found matching search criteria. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** Total number of events found. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type Hours = {
  __typename?: 'Hours';
  /** The type of the opening hours information. Right now, this is always REGULAR. */
  hours_type?: Maybe<Scalars['String']['output']>;
  /** Describes if the business is open now. */
  is_open_now?: Maybe<Scalars['Boolean']['output']>;
  /** The specific open hours and days for a business. */
  open?: Maybe<Array<Maybe<OpenHours>>>;
};

export type Language = {
  __typename?: 'Language';
  /** The ISO 639-1 alpha-2 code for this language. When such a code is unavailable for a language, it will be a ISO 639-2 alpha-3 code instead. */
  code?: Maybe<Scalars['String']['output']>;
  /** Supported locales with this language. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Locale = {
  __typename?: 'Locale';
  /** The code for this locale, in the format of {language_code}_{country_code}. */
  code?: Maybe<Scalars['String']['output']>;
  /** The country component of this locale. */
  country?: Maybe<Country>;
  /** The language component of this locale. */
  language?: Maybe<Language>;
};

export type Location = {
  __typename?: 'Location';
  /** Street address of this business. */
  address1?: Maybe<Scalars['String']['output']>;
  /** Street address of this business, continued. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Street address of this business, continued. */
  address3?: Maybe<Scalars['String']['output']>;
  /** City of this business. */
  city?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-1 alpha-2 country code of this business. */
  country?: Maybe<Scalars['String']['output']>;
  /** Array of strings that if organized vertically give an address that is in the standard address format for the business's country. */
  formatted_address?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-2 (with a few exceptions) state code of this business. */
  state?: Maybe<Scalars['String']['output']>;
  /** Zip code of this business. */
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type OpenHours = {
  __typename?: 'OpenHours';
  /** From 0 to 6, representing day of the week from Monday to Sunday. Notice that you may get the same day of the week more than once if the business has more than one opening time slots. */
  day?: Maybe<Scalars['Int']['output']>;
  /** End of the opening hours in a day, in 24-hour clock notation, like 2130 means 9:30 PM. */
  end?: Maybe<Scalars['String']['output']>;
  /** Whether the business opens overnight or not. When this is true, the end time will be lower than the start time. */
  is_overnight?: Maybe<Scalars['Boolean']['output']>;
  /** Start of the opening hours in a day, in 24-hour clock notation, like 1000 means 10 AM. */
  start?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Load information about a specific business. */
  business?: Maybe<Business>;
  /** Match business data from sources to businesses on Yelp. This returns the single best match we can find. */
  business_match_best?: Maybe<Business>;
  /** Match business data from sources to businesses on Yelp. This will return up to 10 businesses that is the best match based on the information provided. */
  business_match_lookup?: Maybe<Businesses>;
  /** Load information about a specific event. */
  event?: Maybe<Event>;
  /** Search for events based on search parameters. */
  event_search?: Maybe<Events>;
  /** Search for businesses on Yelp by their phone number. */
  phone_search?: Maybe<Businesses>;
  /** Load reviews for a specific business. */
  reviews?: Maybe<Reviews>;
  /** Search for businesses on Yelp. */
  search?: Maybe<Businesses>;
};


export type QueryBusinessArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBusiness_Match_BestArgs = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address3?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
};


export type QueryBusiness_Match_LookupArgs = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address3?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEvent_SearchArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  end_date?: InputMaybe<Scalars['Int']['input']>;
  is_free?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  sort_on?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPhone_SearchArgs = {
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewsArgs = {
  business?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchArgs = {
  attributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  open_at?: InputMaybe<Scalars['Int']['input']>;
  open_now?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  /** Yelp ID of this review. */
  id?: Maybe<Scalars['String']['output']>;
  /** Rating of this review. */
  rating?: Maybe<Scalars['Int']['output']>;
  /** Text excerpt of this review. */
  text?: Maybe<Scalars['String']['output']>;
  /** The time that the review was created in PST. */
  time_created?: Maybe<Scalars['String']['output']>;
  /** URL of this review. */
  url?: Maybe<Scalars['String']['output']>;
  /** The user who wrote the review. */
  user?: Maybe<User>;
};

export type Reviews = {
  __typename?: 'Reviews';
  /** The business associated with the reviews */
  business?: Maybe<Business>;
  /** A list of languages for which the business has at least one review. */
  possible_languages?: Maybe<Array<Maybe<Language>>>;
  /** The reviews objects. */
  review?: Maybe<Array<Maybe<Review>>>;
  /** Total number of reviews. */
  total?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  /** URL of the user's profile photo. */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Name of the user. */
  name?: Maybe<Scalars['String']['output']>;
};
