var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
importCss = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/style.css")
	.pipe(postcss([importCss,mixins,nested,autoprefixer,cssvars]))
	.on("error" , function(errorInfo) {
		console.log(errorInfo);
		this.emit('end');
	})
	.pipe(gulp.dest("./app/temp/style.css"));
});

