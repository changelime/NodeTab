var gulp = require("gulp");
var gulp_jspm = require("gulp-jspm"); 
var minify = require("gulp-minify");
var processhtml = require("gulp-processhtml");

gulp.task("style", function() {
  return gulp.src("css/*.css")
    .pipe(gulp.dest("dest/css"));
});
gulp.task("js", function() {
  return gulp.src("js/index.js")
    .pipe(gulp_jspm({selfExecutingBundle: true})) // `jspm bundle-sfx main`
    .pipe(minify())
    .pipe(gulp.dest("dest/js"));
});
gulp.task("html", function() {
  return gulp.src("index.html")
    .pipe(processhtml())
    .pipe(gulp.dest("dest"));
});
gulp.task("manifest", function() {
  return gulp.src("manifest.json")
    .pipe(gulp.dest("dest"));
});
gulp.task("icon", function() {
  return gulp.src("icons/*.png")
    .pipe(gulp.dest("dest/icons"));
});
gulp.task("built", ["style", "js", "html", "manifest", "icon"]);