const svgoIconsConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [ 'fill', 'path:fill' ]
      },
    },
  ]
};

module.exports = svgoIconsConfig;