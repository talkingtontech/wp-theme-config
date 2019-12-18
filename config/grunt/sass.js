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
    critical: {
        src: '<%= paths.cssSrc %>critical.scss',
        dest: '<%= paths.css %>critical.css'
    },
    amp: {
        src: '<%= paths.cssSrc %>amp.scss',
        dest: '<%= paths.css %>amp.css'
    },
    gutenberg: {
        src: '<%= paths.cssSrc %>gutenberg.scss',
        dest: '<%= paths.css %>gutenberg.css'
    },
    editor: {
        src: '<%= paths.cssSrc %>gutenberg-editor.scss',
        dest: '<%= paths.css %>gutenberg-editor.css'
    }
};