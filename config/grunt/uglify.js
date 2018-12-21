// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
    options: {
        preserveComments: /^!/,
        sourceMap: false,
        mangle: true,
        compress: true,
        report: 'gzip'
    },
    theme: {
        files: [
            {
                expand: true,
                cwd: '<%= paths.js %>',
                src: [
                    '*.js',
                    '!*.min.js'
                ],
                dest: '<%= paths.js %>',
                ext: '.min.js',
                extDot: 'last'
            }
        ]
    },
    vendor: {
        files: [
            {
                expand: true,
                cwd: '<%= paths.jsVend %>',
                src: [
                    '*.js',
                    '!*.min.js'
                ],
                dest: '<%= paths.jsVend %>',
                ext: '.min.js',
                extDot: 'last'
            }
        ]
    }
};