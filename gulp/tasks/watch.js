var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();
const { series } = require('gulp');

gulp.task("watch",  () => {
	browserSync.init ({
		server : {
		notify: false,
		baseDir : "app"
		}
	});
	watch("./app/index.html", gulp.series("html"));
	watch("./app/assets/styles/**/*.css", gulp.series("cssinject"));
	});

gulp.task("cssinject",gulp.series("styles", function()   {
	return gulp.src("./app/temp/style.css")
	.pipe(browserSync.stream());
}));

gulp.task("html", function() {
	browserSync.reload();
});