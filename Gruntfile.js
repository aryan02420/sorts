const browserify = require("browserify");

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '',
      },
      dist: {
        src: ['src/utils/*.js', 'src/algos/*.js'],
        dest: 'index.js',
      },
    },
    
    browserify: {
      dev: {
        src: ['index.js'],
        dest: 'index.js',
        options: {
          browserifyOptions: {
            standalone: 'sorts',
            debug: true
          }
        }
      },
      prod: {
        src: ['index.js'],
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

    mochaTest: {
      test: {
        src: ['test/*.js'],
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        }
      }
    },

    watch: {
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['dev'],
        options: {
          spawn: false,
          interrupt: true,
          debounceDelay: 1000,
        },
      },
    },
    
  });
  
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'browserify:prod', 'terser', 'mochaTest']);
  grunt.registerTask('dev', ['concat', 'browserify:dev', 'mochaTest']);

};