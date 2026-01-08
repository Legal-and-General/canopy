const svgoIconsConfig = {
  plugins: [
    'preset-default',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'path:fill'],
      },
    },
    'removeDimensions',
  ],
};

export default svgoIconsConfig;
