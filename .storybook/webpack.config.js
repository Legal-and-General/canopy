const path = require('path');

module.exports = async ({ config, mode }) => {
  let rule = config.module.rules.find(rule =>
    rule.use[0].loader.includes('ts-loader')
  );
  rule.use[0].options.transpileOnly = true;

  // config.module.rules.push({
  //   test: /\.ts$/,
  //   options: {
  //     transpileOnly: true,
  //   }
  // });

  // Return the altered config
  return config;
};
