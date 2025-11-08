const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const del = require("del");
const browserSync = require("browser-sync").create();

// Clean dist
gulp.task("clean", () => {
  return del(["dist"]);
});

// Nunjucks
gulp.task("nunjucks", () => {
  return gulp
    .src("src/templates/pages/*.njk") // all pages
    .pipe(
      nunjucksRender({
        path: ["src/templates"], // layouts and partials
      })
    )
    .pipe(gulp.dest("dist"));
});

// Default task
gulp.task("default", gulp.series("clean", "nunjucks"));
