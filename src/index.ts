import { gql } from 'apollo-boost'

const productConnectionFields = gql`
  fragment ProductConnectionFields on ProductConnection {
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

export const productsQuery = gql`
  ${productConnectionFields}
  query ProductsData($query: String!, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: 5, query: $query, sortKey: $sortKey, reverse: $reverse) {
      ...ProductConnectionFields
    }
  }
`;