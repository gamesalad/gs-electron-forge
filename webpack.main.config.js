module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  externals: {
    'fs': 'commonjs2 fs'// Because Box2D in the GS engine requires it without using it in browser
  },
  module: {
    rules: require('./webpack.rules'),
  },
};
