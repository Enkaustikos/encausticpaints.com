var browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload,
    config 	  		= require('./config.json');

/* server + browser-sync */
module.exports = function (gulp, callback) {
    browserSync.init({
        server: config.server.dest
    });

    gulp.watch(config.styles.src, ['styles']).on('change', reload);
    gulp.watch(config.html.template, ['html']).on('change', reload);
    gulp.watch(config.html.partials, ['html']).on('change', reload);
    gulp.watch(config.html.src, ['html']).on('change', reload);
};