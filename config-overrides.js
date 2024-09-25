const webpack = require("webpack");

module.exports = function override(config, env) {
  // Make sure config is defined
  if (!config) {
    throw new Error("Webpack config is undefined");
  }

  // Check if the plugins array exists; if not, create it
  if (!config.plugins) {
    config.plugins = [];
  }

  // Add jQuery as a global variable
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    })
  );

  return config;
};
