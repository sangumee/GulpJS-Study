var gulp=require('gulp');
import sass, { logError } from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

let browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();

task('default', function () {
    console.log('Hello Gulp!');
});

task('styles', function () {
    src('sass/**/*.scss')
        .pipe(sass().on('error', logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(dest('./css'))
});