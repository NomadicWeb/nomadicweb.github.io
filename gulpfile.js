var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var axis    = require('axis');

gulp.task('stylus', function () {
  gulp.src('./app/assets/stylesheets/style.styl')
    .pipe(stylus({error: true, use: [axis()]}))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('dev', function() {
  nodemon({ script: 'server.js', ext: 'jade styl js', ignore: ['./node_modules/**'] })
    .on('change', ['stylus'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['dev']);
