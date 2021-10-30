const { i18n } = require('./next-i18next.config');

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "~styles/variables.scss";',
  },

  i18n,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
