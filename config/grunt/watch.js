// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    options: {
        livereload: true
    },
    js: {
        files: [
            '<%= files.js %>'
        ],
        tasks: [
            'build:js'
        ]
    },
    images: {
        files: [
            '<%= paths.imagesSrc %>**/*'
        ],
        tasks: [
            'build:images'
        ]
    },
    php: {
        files: [
            '<%= files.php %>'
        ],
        tasks: []
    },
    scss: {
        files: [
            '<%= files.scss %>'
        ],
        tasks: [
            'build:css:watch'
        ]
    }
};