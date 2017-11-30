const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const chalk = require('chalk');

const isProduction = false;

const scssPath = path.resolve('./../src/**/*.scss');

console.log(scssPath);


gulp.task('default', function () {
  console.log(`
    Use gulp watch to watch file
    `);
});

gulp.task('dev-tools-watch',['scss'], function() {
  gulp.watch(scssPath, ['scss']);
});
//
gulp.task('scss', function () {
  return gulp.src(path.resolve(scssPath))
    .pipe(sass({outputStyle: isProduction ? 'compressed' : 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(file=>file.base));
});