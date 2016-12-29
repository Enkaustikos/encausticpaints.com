var config    = require('./config.json').scripts;

/* images task */
module.exports = function (gulp, callback) {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
};