const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: config => {
    config.resolve.extensions.push(".ts", ".tsx");
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    };
  }
};
