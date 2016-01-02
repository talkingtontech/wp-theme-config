// https://github.com/kswedberg/grunt-version
module.exports = {
  project: {
    src: [
      'package.json',
      'bower.json'
    ]
  },
  style: {
    options: {
      prefix: '\\s+\\*\\s+Version:\\s+'
    },
    src: [
      '<%= paths.authorAssets %>scss/style.scss'
    ]
  }
};