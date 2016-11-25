module.exports = function(grunt) {
  "use strict";

  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
        server: {
            options: {
                port: 8000,
                base: "build",
                open: {
                    target: "http://localhost:8000"
                }
            }
        }
    },
    watch: {
        files: ["src/**/*"],
        tasks: ["build-dev"],
        options: {
            livereload: true
        }
    },
    concat: {
        options: {
            separator: ";"
        },
        main: {
            src: [
                "src/js/ext/*.js",
                "src/js/*.js"
            ],
            dest: "working/monplan.concat.js"
        }
    },
    uglify: {
        main: {
            files: {
                "build/js/monplan.min.js": ["working/monplan.concat.js"]
            }
        }
    },
    copy: {
        dist: {
            expand: true,
            cwd: "src/",
            src: ["**/*", "!js/**"],
            dest: "build/"
        },
        dev: {
            expand: true,
            cwd: "src/",
            src: ["**/*", "!templates/**"],
            dest: "build/"
        }
    },
    ejs: {
        dist: {
            expand: true,
            cwd: "src/templates",
            src: ["*.ejs"],
            dest: "build/",
            options: {
                dev: false,
                dist: true
            },
            ext: ".html"
        },
        dev: {
            expand: true,
            cwd: "src/templates",
            src: ["*.ejs"],
            dest: "build/",
            options: {
                dev: true,
                dist: false
            },
            ext: ".html"
        }
    },
    eslint: {
        options: {
            configFile: "eslint.json"
        },
        target: ["src/js/*.js", "Gruntfile.js"]
    },
    htmllint: {
        all: ["build/**/*.html"]
    },
    jsdoc: {
        dist: {
            src: ["src/js/**/*.js", "README.md"],
            options: {
                destination : "doc",
                configure: "jsdoc.json"
            }
        }
    },
    clean: ["build", "working"]
  });

  grunt.registerTask("build", ["clean", "concat", "uglify", "copy:dev", "ejs:dist"]);
  grunt.registerTask("build-dev", ["clean", "copy:dev", "ejs:dev"]);
  grunt.registerTask("run", ["connect", "watch"]);
  grunt.registerTask("bar", ["build", "run"]);
  grunt.registerTask("bar-dev", ["build-dev", "run"]);
  grunt.registerTask("test", ["clean", "eslint", "copy:dev", "ejs:dev", "htmllint"]);
  grunt.registerTask("default", ["bar"]);
};
