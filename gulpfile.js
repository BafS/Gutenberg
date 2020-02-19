const { watch, series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

const buildCss = () => {
  return src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
};

const minifyCss = () => {
  return src('scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist'));
};

exports.watch = () => watch('scss/**/*.scss', buildCss);

exports.default = series(buildCss, minifyCss);
