var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
              { test: /\.js$/, loader: 'babel-loader' },
              // { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
              { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
            ]
        },
        plugins: [
            new ExtractTextPlugin("./public/css/bundle.css")
        ]
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});


gulp.task('build-dev', ['webpack'], function() {
    gulp.watch(["./components/**/*", "./stores/**/*", "./actions/**/*", "./dispatcher/**/*"], ['webpack']);
});

gulp.task('default', ['build-dev'], function () {

});