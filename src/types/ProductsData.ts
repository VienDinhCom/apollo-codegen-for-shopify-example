/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProductSortKeys, CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProductsData
// ====================================================

export interface ProductsData_products_edges_node_priceRange_minVariantPrice {
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

export interface ProductsData_products_edges_node_priceRange_maxVariantPrice {
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

export interface ProductsData_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: ProductsData_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: ProductsData_products_edges_node_priceRange_maxVariantPrice;
}

export interface ProductsData_products_edges_node {
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
  priceRange: ProductsData_products_edges_node_priceRange;
}

export interface ProductsData_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: ProductsData_products_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface ProductsData_products_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
}

export interface ProductsData_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: ProductsData_products_edges[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: ProductsData_products_pageInfo;
}

export interface ProductsData {
  /**
   * List of the shop’s products.
   */
  products: ProductsData_products;
}

export interface ProductsDataVariables {
  query: string;
  sortKey?: ProductSortKeys | null;
  reverse?: boolean | null;
}
