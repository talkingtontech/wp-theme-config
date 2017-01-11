/* global require, __dirname */
module.exports = function () {
    'use strict';

    var path = require('path');
    var project = {};

    project.paths = {
        config: 'config/',
        assets: 'assets/',
        dist: 'dist/',
        css: 'css/',
        cssSrc: 'scss/',
        js: 'js/',
        jsSrc: 'assets/theme/js/',
        images: 'images/',
        imagesSrc: 'assets/theme/images/',
        fonts: 'fonts/',
        fontsSrc: 'assets/theme/fonts/',
        languages: 'languages/',
        bower: 'assets/bower/',
        composer: 'assets/composer/',
        grunt: 'config/grunt/',
        tasks: 'tasks/'
    };

    project.paths.global = {
        config: path.join(__dirname, 'config/'),
        grunt: path.join(__dirname, 'config/grunt/'),
        tasks: path.join(__dirname, 'tasks/')
    };

    project.taskMap = {
        addtextdomain: 'grunt-wp-i18n',
        makepot: 'grunt-wp-i18n',
        readpkg: 'ttech-wp-theme-config'
    };

    project.files = {
        js: project.paths.jsSrc + '**/*.js',
        scss: project.paths.cssSrc + '**/*.scss',
        config: project.paths.config + '**/*.js',
        changelog: 'CHANGELOG.md'
    };

    project.files.php = [
        '*.php',
        '**/*.php',
        '!.git/**',
        '!.sass-cache/**',
        '!assets/**',
        '!css/**',
        '!dist/**',
        '!fonts/**',
        '!images/**',
        '!js/**',
        '!languages/**',
        '!bower_components/**',
        '!node_modules/**'
    ];

    return project;
};