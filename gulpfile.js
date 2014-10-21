var gulp   = require('gulp'),
    stylus = require('gulp-stylus'),
    axis   = require('axis'),
    conf   = require('./app/config/conf.js');

gulp.task('stylus', function(){
  gulp.src('./app/assets/stylesheets/style.styl')
  .pipe(stylus({ use: axis() }))
  .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('default', ['server', 'stylus']);
