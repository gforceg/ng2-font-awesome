let gulp = require('gulp');
let runSequence = require('run-sequence');

require('require-dir')('./gulp-tasks');

// todo: add a AOT compilation task
// execSync: 'node_modules/.bin/ngc -p tsconfig-aot.json' ?
gulp.task('default', (done) => {
  runSequence(
    'todo',
    'sass',
    'compile',
    done
  );
})