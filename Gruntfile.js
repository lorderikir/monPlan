module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig(
        jshint: {
            options: {
                esversion: 6,
                browser: true,
                undef: true,
                unused: true,
                predef: ["$"]
            },
            files: ['/js/*.js', 'Gruntfile.js']
        },
        htmllint: {
            all: ["*.html"]
        },
        clean: ['build', 'working']
    });

    grunt.registerTask('build', ['clean', 'concat', 'regenerator', 'uglify', 'ejs:dist', 'copy:dist']);
    grunt.registerTask('build-dev', ['clean', 'ejs:dev', 'copy:dev']);
    grunt.registerTask('run', ['open:dev', 'connect']);
    grunt.registerTask('bar', ['build', 'run']);
    grunt.registerTask('bar-dev', ['build-dev', 'run']);
    grunt.registerTask('test', ['clean', 'jshint', 'ejs:dev', 'htmllint']);
    grunt.registerTask('default', ['bar']);
};
