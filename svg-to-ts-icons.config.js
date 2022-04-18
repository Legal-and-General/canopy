const svgoIconsConfig = require('./svgo-icons.config');

const svgToTsConfig = {
  srcFiles: ["**/src/assets/icons/*.svg"],
  outputDirectory: "projects/canopy/src/lib/icon",
  fileName: "icons.interface",
  prefix: "lgIcon",
  typeName: "IconName",
  interfaceName: "Icon",
  delimiter: "KEBAB",
  generateTypeObject: true,
  completeIconSetName: 'lgIconsArray',

  svgoConfig: svgoIconsConfig
};

module.exports = svgToTsConfig;
