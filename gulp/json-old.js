var merge  = require('gulp-merge-json'),
	config = require('./config.json').json,
	jsonMinify = require('gulp-json-minify');

module.exports = function (gulp, callback) {
	return gulp.src(config.src)
	.pipe(merge(config.name))
	.pipe(jsonMinify())
	.pipe(gulp.dest(config.dest));
};