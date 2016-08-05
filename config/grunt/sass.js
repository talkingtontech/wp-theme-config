// https://github.com/sindresorhus/grunt-sass
module.exports = {
  options: {
    includePaths: require('node-neat').includePaths,
    sourceMap: false,
    outputStyle: 'expanded'
  },
  style: {
    src: 'scss/style.scss',
    dest: '<%= paths.tmp %>style.css'
  },
  editorStyle: {
    src: 'scss/editor-style.scss',
    dest: '<%= paths.tmp %>editor-style.css'
  }
};