'use strict'

module.exports = function (modules) {
  const plugins = [
    require.resolve('@babel/plugin-transform-object-assign'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ]
  return {
    presets: [
      "@vue/babel-preset-jsx",
      "@babel/preset-env",
    ],
    plugins
    // env: {
    //   test: {
    //     // plugins: [require.resolve('babel-plugin-istanbul')],
    //   },
    // },
  }
}
