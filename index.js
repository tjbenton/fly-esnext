require('babel-register')({
  presets: [
    'latest',
    'stage-0'
  ],
  plugins: [
    "transform-runtime"
  ],
  ignore: /node_modules/,
  babelrc: false
});
