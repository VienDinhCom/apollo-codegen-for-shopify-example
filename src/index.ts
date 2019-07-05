import { gql } from 'apollo-boost'

const PRODUCT_FRAGMENT = gql`
  fragment Products on ProductConnection {
    edges {
      node {
        title
        handle
        description
        createdAt
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  ${PRODUCT_FRAGMENT}
  query Products($query: String!, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: 5, query: $query, sortKey: $sortKey, reverse: $reverse) {
      ...Products
    }
  }
`;