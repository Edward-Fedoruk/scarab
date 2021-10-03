module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "~styles/variables.scss";',
  },
});
