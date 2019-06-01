/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProductConnectionFields
// ====================================================

export interface ProductConnectionFields_edges_node_priceRange_minVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface ProductConnectionFields_edges_node_priceRange_maxVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface ProductConnectionFields_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: ProductConnectionFields_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: ProductConnectionFields_edges_node_priceRange_maxVariantPrice;
}

export interface ProductConnectionFields_edges_node {
  __typename: "Product";
  /**
   * The product’s title.
   */
  title: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The date and time when the product was created.
   */
  createdAt: any;
  /**
   * The price range.
   */
  priceRange: ProductConnectionFields_edges_node_priceRange;
}

export interface ProductConnectionFields_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: ProductConnectionFields_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface ProductConnectionFields_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
}

export interface ProductConnectionFields {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: ProductConnectionFields_edges[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: ProductConnectionFields_pageInfo;
}
