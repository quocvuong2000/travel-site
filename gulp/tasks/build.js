var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var del = require("del");
var {series} = require("gulp")

// delete docs
gulp.task("deletedocs", function() {
    return del('./docs');
})


// compress image
gulp.task("imageCompress",gulp.series( function() {
    return gulp.src("./app/assets/images/**/*").
    pipe(imagemin({
        interlaced: true,
        progressive: true,
        multipass: true
    })).
    pipe(gulp.dest("./docs/assets/images"))
}));

//revision
gulp.task('usemin', gulp.series("styles","scripts",function() {
    return gulp.src('./app/index.html')
      .pipe(usemin({
        css: [ rev(),cssnano() ],
        js: [ uglify(), rev() ],
      }))
      .pipe(gulp.dest('./docs'));
  }));

gulp.task("build", gulp.series("deletedocs","imageCompress","usemin"));