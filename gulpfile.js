var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('default', function () {
  gulp.src('images_src/*.JPG')
    .pipe(imageResize({ 
      width : 800,
      imageMagick: true
    }))
    .pipe(gulp.dest('images_test/'));
});