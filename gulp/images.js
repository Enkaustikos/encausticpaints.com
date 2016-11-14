var imagemin  = require('gulp-imagemin'),
	config 	  = require('./config.json').images;

/* images task */
module.exports = function (gulp, callback) {
    gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
};