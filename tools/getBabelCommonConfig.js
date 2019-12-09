'use strict';

module.exports = function (modules) {
  const plugins = [
    // require.resolve('@vue/babel-plugin-transform-vue-jsx'),
    // require.resolve('babel-plugin-inline-import-data-uri'),
    // require.resolve('babel-plugin-transform-es3-member-expression-literals'),
    // require.resolve('babel-plugin-transform-es3-property-literals'),
    require.resolve('@babel/plugin-transform-object-assign'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ];
  return {
    presets: [
      "@vue/babel-preset-jsx",
      "@babel/preset-env",
      // {
      //   targets: {
      //     browsers: [
      //       'last 2 versions',
      //       'Firefox ESR',
      //       '> 1%',
      //       'ie >= 9',
      //       'iOS >= 8',
      //       'Android >= 4',
      //     ],
      //   },
      // },
    ],
    plugins
    // env: {
    //   test: {
    //     // plugins: [require.resolve('babel-plugin-istanbul')],
    //   },
    // },
  };
};
