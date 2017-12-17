const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('build-css', () => {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
	return gulp.src('scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(rename({
            suffix: '.min'
        }))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulp.watch('scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['build-css', 'minify-css']);
