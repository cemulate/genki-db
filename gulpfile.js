// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp

var gulp    = require('gulp');
var babel   = require('gulp-babel');
var es2015  = require('babel-preset-es2015');
var gutil   = require('gulp-util');
var del     = require('del');
var concat  = require('gulp-concat');
var es      = require('event-stream');
var runSeq  = require('run-sequence');
var ghPages = require('gulp-gh-pages');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('clean', function () {
    // Clear the destination folder
    return del(['dist/**/*.*']);
});

gulp.task('copy', function () {
    return es.concat(
        gulp.src(['src/**/*.*', '!src/js/**/*.*'])
            .pipe(gulp.dest('dist')),
        gulp.src(['src/*.*'])
            .pipe(gulp.dest('dist')),
        gulp.src(['package.json'])
            .pipe(gulp.dest('dist'))
    );
});

gulp.task('babel', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: [es2015]
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify', function() {
    var b = browserify('dist/js/app.js').bundle();
    return b.pipe(source('app.js')).pipe(gulp.dest('dist/js'));
});

var needBrowserify = false;
gulp.task('scripts', function() {
    needBrowserify ? runSeq('babel', 'browserify') : runSeq('babel');
});

gulp.task('frontend', function() {
    var frontendPackages = ["foundation-sites", "jquery"];

    var glob = "node_modules/+(" + frontendPackages.join("|") + ")/**/*";
    gutil.log(glob);

    return gulp.src([glob])
        .pipe(gulp.dest('dist/lib'));
});

// Dev server

gulp.task('watch', function() {
    gulp.watch(['src/**/*.*', '!src/js/**/*.*'], ['copy']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('server', function() {
    return connect.server({
        root: 'dist'
    });
});

// gh-pages

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('dist', function(cb) {
    runSeq('clean', ['copy', 'frontend', 'scripts'], cb);
});

gulp.task('default', function(cb) {
    runSeq('clean', ['copy', 'frontend', 'scripts'], 'watch', 'server', cb);
});
