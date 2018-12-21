// https://github.com/sindresorhus/grunt-sass
module.exports = {
    options: {
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