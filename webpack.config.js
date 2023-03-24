const webpack = require("@nativescript/webpack");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    if (env.unitTesting == true) {
      config.plugin("DefinePlugin").tap((args) => {
        args[0] = merge(args[0], {
          __TEST_RUNNER_STAY_OPEN__: true,
        });
        return args;
      });
    }
  });

  return webpack.resolveConfig();
};
