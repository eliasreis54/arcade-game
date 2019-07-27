var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function reload(done) {
  browserSync.reload();
  done();
}

// Server + watching scss/js files
gulp.task('default', function () {
  gulp.watch("./public/**/*.js", gulp.parallel(reload));
  gulp.watch("./public/**/*.css", gulp.parallel(reload));
  gulp.watch("./public/*.html", gulp.parallel(reload));

    browserSync.init({
        server: './public',
        ui: {
            port: 8080
        },
        port: 8090,
    });
});