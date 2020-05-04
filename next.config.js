require("dotenv").config();

const path = require('path');
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const Dotenv = require('dotenv-webpack');

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withSass(
  withLess({
    ignoreOrder: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    exportPathMap: () => ({}), // feature to pre-render some pages to html
    webpack: function (config) {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true,
        }),
      ];

      return config;
    },
  })
);
