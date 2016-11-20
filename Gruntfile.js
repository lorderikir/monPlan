module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    open: {
        dev: {
            path: 'http://localhost:8000'
        }
    },
    connect: {
        server: {
            options: {
                port: 8000,
                base: 'build',
                keepalive: true
            }
        }
    },
    concat: {
        options: {
            separator: ';'
        },
        main: {
            src: [
                'js/ext/*.js',
                'js/*.js'
            ],
            dest: 'working/monplan.concat.js'
        }
    },
    uglify: {
        main: {
            files: {
                "build/js/monplan.min.js": ['working/monplan.regenerate.js']
            }
        }
    },
    copy: {
        dist: {
            expand: true,
            cwd: 'src/',
            src: ['**/*', '!**/templates/**', '!**/js/**'],
            dest: 'build/'
        },
        dev: {
            expand: true,
            cwd: 'src/',
            src: ['**/*', '!**/templates/**'],
            dest: 'build/'
        },
    },
    eslint: {
        options: {
            configFile: 'eslint.json'
        },
        target: ['js/*.js', 'Gruntfile.js']
    },
    htmllint: {
        all: ["build/**/*.html"]
    },
    jsdoc : {
        dist : {
            src: ['src/js/**/*.js', 'README.md'],
            options: {
                destination : 'doc',
                configure: 'jsdoc.json'
            }
        }
    },
    clean: ['build', 'working']
  });

  grunt.registerTask('build', ['clean', 'concat', 'regenerator', 'uglify', 'ejs:dist', 'copy:dist']);
  grunt.registerTask('build-dev', ['clean', 'ejs:dev', 'copy:dev']);
  grunt.registerTask('run', ['open:dev', 'connect']);
  grunt.registerTask('bar', ['build', 'run']);
  grunt.registerTask('test', ['clean', 'eslint', 'ejs:dev', 'htmllint']);
  grunt.registerTask('default', ['bar']);

};
