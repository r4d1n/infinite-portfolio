'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const transform = require('vinyl-transform');
const uglify = require('gulp-uglify');
const shell = require('gulp-shell');

// gulp.task('js', () => {
//   return gulp.src('js/**/*.js')
//   .pipe(babel({
//     presets: ['es2015']
//   }))
//   .pipe(concat('bundle.js'))
//   .pipe(gulp.dest('dist'));
// });
//
gulp.task('js', () => {
  var browserified = transform((filename) => {
    var b = browserify(filename);
    return b.bundle();
  });

  gulp.src(['./js/*.js'])
  .pipe(browserified)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['js']);
  // shell.task(['http-server']);
})
