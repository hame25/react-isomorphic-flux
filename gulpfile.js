var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
//var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
        entry: "./components/client.js",
	    output: {
	        path: __dirname,
	        filename: "./public/app.js"
	    },
        module: {
            loaders: [
              { test: /\.js$/, loader: 'babel-loader' }
            ]
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});


gulp.task('build-dev', ['webpack'], function() {
    gulp.watch(["./components/**/*"], ['webpack']);
});

gulp.task('default', ['build-dev'], function () {

});