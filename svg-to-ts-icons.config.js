const svgoIconsConfig = require('./svgo-icons.config');

const svgToTsConfig = {
  conversionType: "constants",
  srcFiles: ["**/src/assets/icons/*.svg"],
  outputDirectory: "projects/canopy/src/lib/icon",
  fileName: "icons.interface",
  prefix: "lgIcon",
  typeName: "IconName",
  interfaceName: "Icon",
  delimiter: "KEBAB",

  svgoConfig: svgoIconsConfig
};

module.exports = svgToTsConfig;