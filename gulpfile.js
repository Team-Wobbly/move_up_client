let gulp = require('gulp');
let del = require('del');
let typescript = require('gulp-typescript');
let tscConfig = require('./tsconfig.json');

gulp.task('clean', function () {
  return del('build/**/*');
});

gulp.task('compile', ['clean'], function () {
  console.log('Compiling TS files...');
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);
