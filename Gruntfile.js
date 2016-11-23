module.exports = function(grunt) {
  "use strict";

  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    open: {
        dev: {
            path: "http://localhost:8000"
        }
    },
    connect: {
        server: {
            options: {
                port: 8000,
                base: "build",
                keepalive: true
            }
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
            files: [
                {
                    expand: true,
                    cwd: "src/",
                    src: ["**/*", "!html/**"],
                    dest: "build/"
                },
                {
                    expand: true,
                    cwd: "src/html",
                    src: ["**/*"],
                    dest: "build/"
                }
            ],
        }
    },
    eslint: {
        options: {
            configFile: "eslint.json"
        },
        target: ["js/*.js", "Gruntfile.js"]
    },
    htmllint: {
        all: ["build/**/*.html"]
    },
    jsdoc : {
        dist : {
            src: ["src/js/**/*.js", "README.md"],
            options: {
                destination : "doc",
                configure: "jsdoc.json"
            }
        }
    },
    clean: ["build", "working"]
  });

  grunt.registerTask("build", ["clean", "concat", "uglify", "copy:dev"]);
  grunt.registerTask("build-dev", ["clean", "copy:dev"]);
  grunt.registerTask("run", ["open:dev", "connect"]);
  grunt.registerTask("bar", ["build", "run"]);
  grunt.registerTask("bar-dev", ["build-dev", "run"]);
  grunt.registerTask("test", ["clean", "eslint", "copy:dev", "htmllint"]);
  grunt.registerTask("default", ["bar"]);r

};
