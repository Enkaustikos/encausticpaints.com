var gulp = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    sass            = require('gulp-sass'),
    postcss         = require('gulp-postcss'),
    autoprefixer    = require('autoprefixer'),
    lost            = require('lost');
    concat          = require('gulp-concat'),
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    config          = require('./config.json').styles;

module.exports = function (gulp, callback) {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(minifyCSS())
    .pipe(rename(config.outputName))
    .pipe(concat(config.outputName))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
};