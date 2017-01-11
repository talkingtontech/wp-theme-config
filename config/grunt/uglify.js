// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
    theme: {
        options: {
            preserveComments: /^!/,
            sourceMap: false,
            sourceMapName: '<%= paths.js %>theme.js.map',
            sourceMapIncludeSources: true,
            mangle: true,
            compress: true,
            report: 'gzip'
        },
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
    }
};