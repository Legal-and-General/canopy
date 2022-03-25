const svgoBrandIconsConfig = require('./svgo-brand-icons.config');

const svgToTsConfig = {
  srcFiles: ["**/src/assets/brand-icons/*.svg"],
  outputDirectory: "projects/canopy/src/lib/brand-icon",
  fileName: "brand-icons.interface",
  prefix: "lgBrandIcon",
  typeName: "BrandIconName",
  interfaceName: "BrandIcon",
  delimiter: "KEBAB",

  svgoConfig: svgoBrandIconsConfig
};

module.exports = svgToTsConfig;
