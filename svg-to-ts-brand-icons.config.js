const svgoBrandIconsConfig = require('./svgo-brand-icons.config');

const svgToTsConfig = {
  srcFiles: ["**/src/assets/brand-icons/*.svg"],
  outputDirectory: "projects/canopy/src/lib/brand-icons-files",
  iconsFolderName: "set",
  typeName: "BrandIconName",
  prefix: "lgBrandIcon",
  optimizeForLazyLoading: true,
  modelFileName: "brand-icons-files.interface",
  additionalModelOutputPath: "projects/canopy/src/lib/brand-icon",
  compileSources: true,
  interfaceName: "BrandIcon",
  exportCompleteIconSet: true,
  completeIconSetName: "lgBrandIconsArray",
  delimiter: "KEBAB",
  svgoConfig: svgoBrandIconsConfig
};

module.exports = svgToTsConfig;
