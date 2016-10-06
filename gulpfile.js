var gulp = require("gulp");
var gulp_jspm = require("gulp-jspm"); 
var uglify = require("gulp-uglify");
var react = require("gulp-react");
var pump = require("pump");
var babel = require("gulp-babel");
var processhtml = require("gulp-processhtml");

gulp.task("style", function(cb) {
  pump([
        gulp.src("css/*.css"),
        gulp.dest("dest/css")
    ], cb);
});
gulp.task("js", function(cb) {
  pump([
        gulp.src("js/index.js"),
        gulp_jspm({
          selfExecutingBundle: true
        }),
        react({
            harmony: true
        }),
        babel({
            plugins: [
                "transform-es2015-block-scoping",
                "transform-es2015-block-scoped-functions",
                "transform-es2015-arrow-functions"
            ]
        }),
        uglify(),
        gulp.dest("dest/js")
    ], cb);
});
gulp.task("html", function(cb) {
  pump([
        gulp.src("index.html"),
        processhtml(),
        gulp.dest("dest")
    ], cb);
});
gulp.task("manifest", function(cb) {
  pump([
        gulp.src("manifest.json"),
        gulp.dest("dest")
    ], cb);
});
gulp.task("icon", function(cb) {
  pump([
        gulp.src("icons/*.png"),
        gulp.dest("dest/icons")
    ], cb);
});
gulp.task("built", ["style", "js", "html", "manifest", "icon"]);