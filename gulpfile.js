let gulp = require('gulp');
let del = require('del');
let typescript = require('gulp-typescript');
let tscConfig = require('./tsconfig.json');
let tslint = require('gulp-tslint');

gulp.task('clean', function () {
  return del('build/**/*');
});

gulp.task('tslint', ['clean'], function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report())
});

gulp.task('compile', ['clean'], function () {
  console.log('Compiling TS files...');
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('build/app'));
});

gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('build'))
});

gulp.task('build', ['compile', 'copy:assets']);
gulp.task('default', ['build']);
