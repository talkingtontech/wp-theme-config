// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

module.exports = {
  options: {
    map: false,
    processors: [
      pxtorem({
        replace: false,
        rootValue: 16,
        propWhiteList: [
          'font',
          'font-size'
        ],
        selectorBlackList: [
          'html',
          'body'
        ],
        minPixelValue: 2
      }),
      autoprefixer({
        browsers: [
          'Android >= 2.1',
          'Chrome >= 21',
          'Edge >= 12',
          'Explorer >= 9',
          'Firefox >= 17',
          'Opera >= 12.1',
          'Safari >= 6.0'
        ]
      })
    ]
  },
  style: {
    src: '<%= paths.tmp %>style.css',
    dest: '<%= paths.tmp %>style.css'
  },
  editorStyle: {
    src: '<%= paths.tmp %>editor-style.css',
    dest: '<%= paths.tmp %>editor-style.css'
  }
};