const gulp = require('gulp');
const run = require('gulp-run');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const paths = {
  jekyllDir: '',
  siteDir: '_site',
  devDir: '_dev',
  sassSource: '_dev/stylesheets/le-main.scss'
}; 

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: paths.siteDir,
    ghostMode: false,
    logFileChanges: true,
    open: false
  });

  // Watch site settings
  gulp.watch(['_config.yml', '_dev/localhost_config.yml'], ['build:jekyll:watch']);

  // Watch app .scss files, changes are piped to browserSync
  gulp.watch(
    [
      '_dev/stylesheets/**/*.scss',
      '_dev/stylesheets/vendor/eightfold/**/*.scss',
      '!_dev/stylesheets/vendor/bourbon/**/*',
      '!_dev/stylesheets/vendor/bourbon-neat/**/*',
      '!_dev/stylesheets/vendor/normalize.css/**/*',
      '!_dev/stylesheets/vendor/bigfishtv-turret/**/*'
    ], 
    [
      'build:sass', 
      'build:jekyll:watch'
    ]
  );

  // Watch app .js files
  gulp.watch('_dev/js/**/*.js', ['build:javascript:watch', 'build:jekyll:watch']);

  // Watch images
  gulp.watch('_dev/img/**/*');

  // Watch Jekyll posts
  // gulp.watch('_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);

  // Watch Jekyll drafts if --drafts flag was passed
  // if (config.drafts) {
  //   gulp.watch('_drafts/*.+(md|markdown|MD)', ['build:jekyll:watch']);
  // }

  // Watch Jekyll html files
  gulp.watch(['**/*.html', '!_site/**/*.*'], ['build:jekyll:watch']);
  gulp.watch(['**/*.md', '!_site/**/*.*'], ['build:jekyll:watch']);

  // Watch Jekyll RSS feed XML file
  // gulp.watch('feed.xml', ['build:jekyll:watch']);

  // Watch Jekyll data files
  // gulp.watch('_data/**.*+(yml|yaml|csv|json)', ['build:jekyll:watch']);

  // Watch Jekyll favicon.ico
  // gulp.watch('favicon.ico', ['build:jekyll:watch']);  
});

gulp.task('build', function(cb) {
  runSequence(['build:sass', 'build:javascript', 'build:images', 'build:fonts'], 'build:jekyll', cb);
});

gulp.task('build:javascript', function() {
  var defaultStream = browserify({
    entries: '_dev/js/start.js',
    debug: true,
  });

  var stream = defaultStream.bundle()
    .pipe(source('components.js'))
    .pipe(buffer())
    .pipe(rename({ basename: 'le' }))
    .pipe(gulp.dest('assets/presentation/js'));

  stream
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/presentation/js'));

  return stream;
});

gulp.task('build:javascript:watch', ['build:javascript'], function(cb) {
  browserSync.reload();
  cb();
});

gulp.task('build:jekyll', function() {
  const shellCommand = 'bundle exec jekyll build --config _config.yml,_dev/localhost_config.yml';
  return gulp.src('/')
    .pipe(run(shellCommand))
    .on('error', gutil.log);
});

gulp.task('build:jekyll:watch', ['build:jekyll'], function(cb) {
  browserSync.reload();
  cb();
});

// Images
gulp.task('build:images', function() {
  return gulp.src('_dev/img/**/*')
      .pipe(gulp.dest('assets/presentation/img'));
});

gulp.task('build:fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/**/*')
    .pipe(gulp.dest('assets/presentation/fonts'));
});

// Sass
gulp.task('build:sass', ['copy-normalize', 'copy-bourbon', 'copy-bourbon-neat', 'copy-bigfishtv-turret'], function() {
  return gulp.src(paths.sassSource)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/presentation/css'));
});

gulp.task('copy-normalize', function() {
  return gulp.src('node_modules/normalize.css/normalize.css')
      .pipe(gulp.dest('_dev/stylesheets/vendor/normalize.css/'));
});

gulp.task('copy-bourbon', function() {
  return gulp.src('node_modules/bourbon/app/assets/stylesheets/**/*.scss')
      .pipe(gulp.dest('_dev/stylesheets/vendor/bourbon/'));
});

gulp.task('copy-bourbon-neat', function() {
  return gulp.src('node_modules/bourbon-neat/app/assets/stylesheets/**/*.scss')
      .pipe(gulp.dest('_dev/stylesheets/vendor/bourbon-neat/'));
});

gulp.task('copy-bigfishtv-turret', function() {
  return gulp.src('node_modules/bigfishtv-turret/turret/**/*')
      .pipe(gulp.dest('_dev/stylesheets/vendor/bigfishtv-turret/'));
});
