// gulpfile.js:

"use strict";

/* dependencies */
var gulp 			 = require('gulp'),
	gulpRequireTasks = require('gulp-require-tasks'),
	config 			 = require('./gulp/config.json');

gulpRequireTasks({
  path: process.cwd() + config.tasks.src 
});

/* default task. this is run by using the 'gulp' command */
gulp.task('serve', ['server']);

gulp.task('default', ['server']);

gulp.task('json', ['yaml'], function() {
  var merge  = require('gulp-merge-json');
  var jsonMinify = require('gulp-json-minify');

	return gulp.src(config.json.src)
	.pipe(merge(config.json.name))
	.pipe(jsonMinify())
	.pipe(gulp.dest(config.json.dest));
});

gulp.task('data', ['json']);

gulp.task('html', ['nunjucks']);

