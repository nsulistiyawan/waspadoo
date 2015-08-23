var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('optimizejs', function() {
  return gulp.src([
      'bower_components/oboe/dist/oboe-browser.min.js',
      'bower_components/leaflet/dist/leaflet.js',
      'bower_components/leaflet.markercluster/dist/leaflet.markercluster.js',
      'src/app.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy',function () {
  return gulp.src([
      'bower_components/leaflet/dist/images/*.png'
    ])
    .pipe(gulp.dest('dist'));
});

gulp.task('optimizecss', function() {
  return gulp.src([
      'bower_components/leaflet/dist/leaflet.css',
      'bower_components/leaflet.markercluster/dist/MarkerCluster.Default.css',
      'src/app.css'
    ])
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist'));
});
