module.exports = {
  client: {
    service: {
      name: 'shopify',
      url: 'https://graphql.myshopify.com/api/graphql',
      headers: {
        'X-Shopify-Storefront-Access-Token': '078bc5caa0ddebfa89cccb4a1baa1f5c',
      }
    },
    excludes: ['**/node_modules/**/*'],
    includes: ['**/*.ts'],
  }
};

// https://www.leighhalliday.com/generating-types-apollo