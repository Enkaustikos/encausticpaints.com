var yaml   = require('gulp-yaml'),
	config = require('./config.json').yaml;

module.exports = function (gulp, callback) {
	return gulp.src(config.src)
	.pipe(yaml(config.name))
	.pipe(gulp.dest(config.dest));
};