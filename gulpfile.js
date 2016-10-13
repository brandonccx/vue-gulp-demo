var gulp = require('gulp');
var webpack = require('webpack-stream');
var config= require('./webpack.config.js');

gulp.task('default', function () {
  return gulp.src('app/components/**.js')
  .pipe(webpack(config))
  .pipe(gulp.dest('dist'));
});
