var gulp = require("gulp"),
webpack = require("webpack");

gulp.task("scripts", function(callback) {
    // webpack is going to find webpack config
    webpack(require("../../webpack.config.js"), function(err,resolve) {
       
        console.log("success");
        callback();
    })
})