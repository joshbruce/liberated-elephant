var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', [
  'sass'
]);

gulp.task('release', ['sass'], function() {
  var entryFile = '_presentation-assets/stylesheets/le-main.scss';
  gulp.src(entryFile)
    .pipe(sourcemaps.init())
    .pipe(
        sass({ outputStyle: 'compressed' })
            .on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/presentation/css/'));
});

// Sass
gulp.task('sass', [
  'copy-normalize',
  'copy-bourbon',
  'copy-bourbon-neat'
]);

gulp.task('copy-normalize', function() {
  gulp.src('node_modules/normalize.css/normalize.css')
      .pipe(gulp.dest('_presentation-assets/stylesheets/vendor/normalize.css/'));
});

gulp.task('copy-bourbon', function() {
  gulp.src('node_modules/bourbon/app/assets/stylesheets/**/*.scss')
      .pipe(gulp.dest('_presentation-assets/stylesheets/vendor/bourbon/'));
});

gulp.task('copy-bourbon-neat', function() {
  gulp.src('node_modules/bourbon-neat/app/assets/stylesheets/**/*.scss')
      .pipe(gulp.dest('_presentation-assets/stylesheets/vendor/bourbon-neat/'));
});
