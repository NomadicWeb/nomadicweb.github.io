var gulp    = require('gulp'),
    stylus  = require('gulp-stylus'),
    nodemon = require('gulp-nodemon'),
    axis    = require('axis'),
    reload  = require('gulp-livereload');


gulp.task('stylus', function (){
  gulp.src('./app/assets/stylesheets/style.styl')
    .pipe(stylus({error: true, use: [axis()]}))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('dev', function(){
  reload.listen();
  nodemon({ 
      script: 'server.js', 
      ext: 'jade styl js', 
      ignore: ['./node_modules/**'] ,
  })
  .on('change', ['stylus', 'watch'])
});

gulp.task('watch', function() {
  gulp.watch('./**').on('change', reload.changed);
});

gulp.task('default', ['dev']);
