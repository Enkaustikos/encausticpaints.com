var gulp = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat'),
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    config          = require('./config.json').styles;

module.exports = function (gulp, callback) {
  return gulp.src(config.src)

    /* sourcemaps */
    .pipe(sourcemaps.init())

    /* compile sass, return error code on error */
    .pipe(sass().on('error', sass.logError))

    /* autoprefixing */
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

    /* minify */
    .pipe(minifyCSS())

    /* rename file */
    .pipe(rename(config.outputName))

    /* concat all */
    .pipe(concat(config.outputName))

    /* set directory for sourcemaps export */
    .pipe(sourcemaps.write('./'))

    /* destination directory */
    .pipe(gulp.dest(config.dest))
    /* reload server */
    .pipe(reload({stream: true}));
};