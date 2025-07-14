const svgoIconsConfig = require('./svgo-icons.config');

const svgToTsConfig = {
  srcFiles: ['**/src/assets/icons/*.svg'],
  outputDirectory: 'projects/canopy/src/lib/ui-icons-files',
  iconsFolderName: 'set',
  typeName: 'IconName',
  prefix: 'lgIcon',
  optimizeForLazyLoading: true,
  modelFileName: 'ui-icons-files.interface',
  additionalModelOutputPath: 'projects/canopy/src/lib/icon',
  compileSources: true,
  interfaceName: 'Icon',
  exportCompleteIconSet: true,
  completeIconSetName: 'lgIconsArray',
  delimiter: 'KEBAB',
  svgoConfig: svgoIconsConfig,
};

module.exports = svgToTsConfig;
