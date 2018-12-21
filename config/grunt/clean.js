// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
    css: {
        src: [
            '<%= paths.css %>',
            '<%= paths.cssSrcVend %>',
            '<%= paths.cssVend %>',
            'style*.*'
        ]
    },
    fonts: {
        src: [
            '<%= paths.fontsVend %>'
        ]
    },
    php: {
        src: [
            '<%= paths.phpVend %>'
        ]
    },
    js: {
        src: [
            '<%= paths.jsVend %>'
        ]
    },
    images: {
        src: [
            '<%= paths.images %>',
            '<%= paths.imagesVend %>',
            'screenshot.png'
        ]
    },
    languages: {
        src: [
            '<%= paths.languages %>'
        ]
    },
    dist: {
        src: [
            '<%= paths.dist %>'
        ]
    }
};