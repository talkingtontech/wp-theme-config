// https://github.com/sindresorhus/grunt-sass
const sass = require('node-sass');

module.exports = {
    options: {
        implementation: sass,
        outputStyle: 'compressed'
    },
    style: {
        src: '<%= paths.cssSrc %>style.scss',
        dest: 'style.css'
    },
    theme: {
        src: '<%= paths.cssSrc %>theme.scss',
        dest: '<%= paths.css %>theme.css'
    },
    editorStyle: {
        src: '<%= paths.cssSrc %>editor-style.scss',
        dest: '<%= paths.css %>editor-style.css'
    }
};