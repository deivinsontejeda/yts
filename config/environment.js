/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    YTS_BASE_URL: "https://yts.ag/api/v2",
    modulePrefix: 'yts',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'connect-src': "'self' https://yts.ag",
      'img-src': "'self' https://yts.ag",
      'font-src': "'self' http://fonts.gstatic.com",
      'style-src': "'self' http://fonts.googleapis.com",
      'media-src': "'self'"
    },

    APP: {
      AMOUNT_ELEMENTS: 3
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.AMOUNT_ELEMENTS = 20;
  }

  return ENV;
};
