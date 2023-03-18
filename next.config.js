
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: 'sw.js',
  disable: process.env.NODE_ENV === 'development',
});
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: {
  //       test: /\.(js|ts)x?$/,
  //     },
  //     use: [ '@svgr/webpack' ],
  //   });

  //   return config;
  // },
});