const browserify = require("browserify");

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        },
        src: ['test/*.js']
      }
    },

    browserify: {
      dev: {
        src: ['./src/sorts.js'],
        dest: 'index.js',
        options: {
          browserifyOptions: {
            standalone: 'sorts',
            debug: true
          }
        }
      },
      prod: {
        src: ['./src/sorts.js'],
        dest: 'index.js',
        options: {
          browserifyOptions: {
            standalone: 'sorts',
            debug: false
          }
        }
      }
    },

    terser: {
      minify: {
        src: ['index.js'],
        dest: 'index.js',
        options: {
          compress: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-terser');

  grunt.registerTask('default', ['browserify:prod', 'terser', 'mochaTest']);
  grunt.registerTask('dev', ['browserify:dev', 'mochaTest']);

};