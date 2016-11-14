var data            = require('gulp-data'),
    nunjucks        = require('gulp-nunjucks-render'),
    browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    gulpGrayMatter  = require('gulp-gray-matter'),
    config          = require('./config.json').html;

module.exports = function (gulp, callback) {
  return gulp.src(config.src)
    .pipe(gulpGrayMatter())
    .pipe(data(function() {
      return require('../src/data/combined.json')
    }))
    .pipe(nunjucks({
      path: [config.template]
    }))
    .pipe(gulp.dest(config.dest))
    .on("end", reload);
};