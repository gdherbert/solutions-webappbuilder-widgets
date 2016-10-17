/* global module */
module.exports = function(grunt) {
  var stemappDir = 'D:\\wab\\client\\stemapp\\widgets\\GridOverlay';
  var appDir = 'D:\\wab\\server\\apps\\4\\widgets\\GridOverlay';

  grunt.initConfig({
    watch: {
      main: {
        files: ['**'],
        tasks: ['sync', 'shell:jsdoc'],
        options: {
          spawn: false
        }
      }
    },

    sync: {
      stemApp: {
        files: [{
          src: ['**', '!node_modules/**', '!package.json', '!gruntfile.js'],
          dest: stemappDir
        }],
        verbose: true // Display log messages when copying files
      },
      app: {
        files: [{
          src: ['**', '!node_modules/**', '!package.json', '!gruntfile.js'],
          dest: appDir
        }],
        verbose: true // Display log messages when copying files
      }
    },

    shell: {
      jsdoc: {
        command: 'npm run generate-docs'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:jsdoc', 'sync', 'watch']);
};
