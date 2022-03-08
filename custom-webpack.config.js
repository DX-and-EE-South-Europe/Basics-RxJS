const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      STABLE_FEATURE: JSON.stringify(true),
      EXPERIMENTAL_FEATURE: JSON.stringify(false)
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
      lintDirtyModulesOnly: true,
      threads: true,
      exclude: '**/node_modules/**'
    })
  ]
};
