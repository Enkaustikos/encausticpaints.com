var browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    config 	  		= require('./config.json');

/* server + browser-sync */
module.exports = function (gulp, callback) {
    browserSync.init({
        server: config.server.dest
    });

    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.html.template, ['html']);
    gulp.watch(config.html.src, ['html']);
};