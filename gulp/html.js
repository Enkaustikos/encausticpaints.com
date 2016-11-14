var data            = require('gulp-data'),
    nunjucksRender  = require('gulp-nunjucks-render'),
    browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    config          = require('./config.json').html;

module.exports = function (gulp, callback) {
  return gulp.src(config.src)
    .pipe(data( function(file) {
        return require(config.dataSrc);
    }))
    .pipe(nunjucksRender({
      path: [config.template]
    }))

    .pipe(gulp.dest(config.dest))
    .on("end", reload);
};