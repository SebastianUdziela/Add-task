const sass = require('gulp-sass');
const gulp = require('gulp')
const {watch} = require('gulp')

function cssTask() {
        return gulp.src('./src/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./dist/css'))
}

exports.watchTask = function () {
    watch('./src/scss/**/*.scss', cssTask)
}
