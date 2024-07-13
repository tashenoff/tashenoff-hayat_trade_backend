'use strict';

module.exports = ({ env }) => ({
  // ...
  'strapi-algolia': {
    enabled: true,
    config: {
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      applicationId: env('ALGOLIA_APP_ID'),
      contentTypes: [
        { name: 'api::article.article' },
        // ...
      ],
    },
  },

  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        product: { //write what your collection type's name is this case we should use "blog"
          field: "slug",
          references: "Name",
        },
      },
    },
  },


  




});

