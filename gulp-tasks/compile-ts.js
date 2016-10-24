let gulp = require('gulp');
let gutil = require('gulp-util');

let inline = require('gulp-inline-ng2-template');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let tsconfig = require('../tsconfig.json');

let join = require('path').join;

const IN_DIR = 'ng2-font-awesome';
const OUT_DIR = 'ng2-font-awesome';

gulp.task('sourcemaps', () => {
  gulp.src(join(IN_DIR, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(OUT_DIR));
})

gulp.task('tsc', () => {

  gulp.src(join(IN_DIR, '**/*.ts'))
  .pipe(inline({ useRelativePaths: true }))
  .pipe(ts(tsconfig.compilerOptions))
  .pipe(gulp.dest(OUT_DIR));
});

gulp.task('compile', ['tsc', 'sourcemaps'], () => { } );
