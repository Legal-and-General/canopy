const svgoBrandIconsConfig = require('./svgo-brand-icons.config');

const svgToTsConfig = {
  srcFiles: ['**/src/assets/brand-icons/*.svg'],
  outputDirectory: 'projects/canopy/src/lib/brand-icons-files',
  iconsFolderName: 'set',
  typeName: 'BrandIconName',
  prefix: 'lgBrandIcon',
  delimiter: 'KEBAB',
  modelFileName: 'brand-icons-files.interface',
  additionalModelOutputPath: 'projects/canopy/src/lib/brand-icon',
  interfaceName: 'BrandIcon',
  exportCompleteIconSet: true,
  completeIconSetName: 'lgBrandIconsArray',
  svgoConfig: svgoBrandIconsConfig,
};

module.exports = svgToTsConfig;
