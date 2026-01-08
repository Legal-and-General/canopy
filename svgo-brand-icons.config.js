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

export default svgoBrandIconsConfig;
