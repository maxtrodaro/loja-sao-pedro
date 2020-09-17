var gulp = require("gulp"),
	clean = require("gulp-clean"),
	browserSync = require("browser-sync"),
	sass = require("gulp-sass"),
	minify = require("gulp-minify");

gulp.task("copy", ["clean", "minifyjs"], function () {
	return gulp.src("src/**/*").pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
	return gulp.src("dist").pipe(clean());
});

gulp.task("minifyjs", function () {
	return gulp
		.src("src/js/*.js", { allowEmpty: true })
		.pipe(minify({ noSource: true }))
		.pipe(gulp.dest("dist/js"));
});

gulp.task("server", function () {
	browserSync.init({
		server: {
			baseDir: "src",
		},
	});

	gulp.watch("src/js/*.js").on("change", function (event) {
		gulp.src(event.path);
	});

	gulp.watch("src/scss/*.scss").on("change", function (event) {
		gulp
			.src(event.path)
			.pipe(
				sass().on("error", function (erro) {
					console.log("SASS, erro de compilação: " + event.filename);
					console.log(erro.message);
				})
			)
			.pipe(gulp.dest("src/css"));
	});

	gulp.watch("src/css/*.css").on("change", function (event) {
		gulp.src(event.path);
	});

	gulp.watch("src/**/*").on("change", browserSync.reload);
});
