// gulpfile.js:

"use strict";

/* dependencies */
var gulp 			 = require('gulp'),
	gulpRequireTasks = require('gulp-require-tasks'),
	config 			 = require('./gulp/config.json').tasks;

gulpRequireTasks({
  path: process.cwd() + config.src 
});

/* default task. this is run by using the 'gulp' command */
gulp.task('default', ['images', 'html', 'styles', 'server']);


