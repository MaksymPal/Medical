const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");

function style () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' })) // use sass
        .pipe(gulp.dest('./src')) // output path for compiled .css file
};

function prefix () {
    return gulp.src('./src/style.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src'))
};

function watch () {
    gulp.watch('./src/**/*.scss', style); // watch all changes in .scss files in all folders
};

exports.style = style;
exports.watch = watch;
exports.prefix = prefix;