var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass');

gulp.task('build-css', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(rename({
            suffix: '.min'
        }))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['build-css', 'minify-css']);
