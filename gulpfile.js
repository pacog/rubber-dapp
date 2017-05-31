const gulp = require('gulp');
const connect = require('gulp-connect');
const ghPages = require('gulp-gh-pages');

const APP_ROOT = 'app';

gulp.task('connect', () => {
    connect.server({
        root: APP_ROOT,
        livereload: true
    });
});

gulp.task('html', () => {
    gulp.src(`./${APP_ROOT}/*.html`)
        .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch([`./${APP_ROOT}/*.html`], ['html']);
});

gulp.task('deploy', () => {
  return gulp.src(`./${APP_ROOT}/**/*`)
    .pipe(ghPages());
});

gulp.task('default', ['connect', 'watch']);
