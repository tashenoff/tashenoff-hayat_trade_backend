'use strict';

module.exports = ({ env }) => ({


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

  "netlify-deployments": {
    enabled: true,
  },
  

  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'smtp.mail.ru', //SMTP Host
        port: 587   , //SMTP Port
        secure: true,
        username: 'this.alex@mail.ru',
        password: 'gU8aF1x92sbFqq1yWiAL',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: 'this.alex@mail.ru',
      defaultReplyTo: 'this.alex@mail.ru',
    }, 
  },    


});

