var gulp = require('gulp');
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

var handlebars = require('gulp-handlebars');
var path = require('path');
var less = require('gulp-less');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

gulp.task('auto', function() {
    gulp.watch('public/javascripts/*.js', ['javascripts'])
    gulp.watch('public/stylesheets/*.less', ['less'])
    gulp.watch('public/images/*.png', ['images'])
})

var handleError = function(err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}

gulp.task('default', ['less', 'javascripts', 'images']);

gulp.task('javascripts', function() {
    return gulp.src('build/**/*.js')
        .pipe(gulp.dest('public/'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('stylesheets', function() {
    return gulp.src('build/**/*.css')
        .pipe(gulp.dest('public/'))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('images', function() {
    return gulp.src('build/**/*.png')
        .pipe(gulp.dest('public/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(rename({
            extname: '.min.png'
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('less', function() {
    return gulp.src('build/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('public/'))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: 'last 2 versions'
        }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/'));
});
