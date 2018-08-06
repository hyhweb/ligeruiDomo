var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

gulp.task("script-build",function(){

    gulp.src(['./src/source/lib/ligerUI/js/core/*.js','./src/source/lib/ligerUI/js/plugins/*.js'])
        .pipe(concat('ligerui.all.1.3.3.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./src/source/lib/ligerUI/js'));
})

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload:true,
            port:8080,
           // host:'localhost',
            open:'./src/views/main/index.html'
        }));
});

gulp.task('watch',function () {
    gulp.watch(['./src/source/lib/ligerUI/js/core/*.js',
        './src/source/lib/ligerUI/js/plugins/*.js'],['script-build'])
})
gulp.task("default",['webserver','watch','script-build']);