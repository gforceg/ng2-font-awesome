var gulp = require('gulp');
let gutil = require('gulp-util');

var todo = require('gulp-todo');

gulp.task('todo', () => {
  gulp.src(['**/*.{ts,html,scss}', 'gulpfile.js'])
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
