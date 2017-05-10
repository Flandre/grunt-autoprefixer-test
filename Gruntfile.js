/**
 * Created by Flandre on 2017/5/10.
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: [
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 9',
          'iOS >= 6',
          'Opera >= 16',
          'Safari >= 6'
        ]
      },
      test: {
        src: ['test.css']
      },
    },
  });

  grunt.loadNpmTasks('grunt-autoprefixer');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['autoprefixer:test']);

};