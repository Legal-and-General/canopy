const svgoBrandIconsConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
        },
      },
    },
    'removeDimensions',
  ],
};

module.exports = svgoBrandIconsConfig;
