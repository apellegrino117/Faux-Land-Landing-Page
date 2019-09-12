const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
    // SCSS file location
    return gulp.src('./src/scss/**/*.scss')
    // pass through sass compiler
    .pipe(sass().on('error', sass.logError))
    // save compiled css in dist folder
    .pipe(gulp.dest('./dist/css'))
    // stream changes to all browswers
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
        
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
    
}

exports.style = style;
exports.watch = watch;