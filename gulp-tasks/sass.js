var gulp = require('gulp');
let gutil = require('gulp-util');

var sass = require('gulp-sass');

let join = require('path').join;

const IN_DIR = 'ng2-font-awesome';
const OUT_DIR = 'ng2-font-awesome';

gulp.task('sass', function () {

    gulp.src(join(IN_DIR, '/**/*.scss'))
        .pipe(
          sass({
          sourceComments: true,
          outputStyle: 'expanded',
          errorLogToConsole: true})
        )
        .pipe(gulp.dest(OUT_DIR));
});