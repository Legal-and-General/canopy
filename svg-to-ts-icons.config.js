const svgoIconsConfig = require('./svgo-icons.config');

const svgToTsConfig = {
  srcFiles: ['**/src/assets/icons/*.svg'],
  outputDirectory: 'projects/canopy/src/lib/ui-icons-files',
  iconsFolderName: 'set',
  typeName: 'IconName',
  prefix: 'lgIcon',
  delimiter: 'KEBAB',
  modelFileName: 'ui-icons-files.interface',
  additionalModelOutputPath: 'projects/canopy/src/lib/icon',
  interfaceName: 'Icon',
  exportCompleteIconSet: true,
  completeIconSetName: 'lgIconsArray',
  svgoConfig: svgoIconsConfig,
};

module.exports = svgToTsConfig;
