var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sprite = require('gulp-sprite'),
    connect = require('gulp-connect'),
    Combine = require('stream-combiner'),
    jst = require('gulp-template-compile'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
    var combined = Combine(
        gulp.src('./app/css/less/main.less'),
        less({
            paths: [path.join(__dirname, 'app', 'assets', 'less')]
        }),
        //prefix("last 1 version", "> 1%", "ie 8", "ie 7"),
        gulp.dest('./app/css'),
        connect.reload()
    );
    combined.on('error', function(err) {
        console.warn(err.message);
    });

    return combined;
});

gulp.task('connect', connect.server({
    root: __dirname + '/app',
    port: 9000,
    livereload: true
}));

gulp.task('jst', function() {
    gulp.src('app/templates/**/*.html')
        .pipe(jst({
            name: function(file){
                return file.relative.replace('.html', '');
            },
            namespace: 'templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('sprites', function() {
    gulp.src('./app/images/ico/*.png')
        .pipe(sprite('sprites.png', {
            imagePath: '/images',
            cssPath: './app/css/less',
            prefix: '',
            preprocessor: 'less'
        }))
        .pipe(gulp.dest('./app/images'));
});

gulp.task('scripts', function() {
    gulp
        .src('./app/js/**/*.js')
        .pipe(connect.reload());
});

gulp.task('views', function() {
    gulp
        .src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp
        .src('./app/images/**/*.{png,jpg,gif}')
        .pipe(connect.reload());
});

// The default task (called when you run `gulp`)
gulp.task('default', ['connect'], function() {
    gulp.watch('app/css/less/**/*.less', ['styles']);
        gulp.watch('app/js/**/*.js', ['scripts']);
        gulp.watch('app/*.html', ['views']);
        gulp.watch('app/templates/*.html', ['jst']);
        gulp.watch('app/images/ico/*.png', ['sprites']);
        gulp.watch('app/images/**/*.{png,jpg,gif}', ['images']);
});
