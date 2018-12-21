// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    vendor: {
        expand: true,
        cwd: '<%= paths.cssVend %>',
        src: [
            '*.css',
            '!*.min.css'
        ],
        dest: '<%= paths.cssVend %>',
        ext: '.min.css',
        extDot: 'last'
    }
};