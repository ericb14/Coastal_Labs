var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var paths = {
   	sass: [
        'css/coastal.scss',
    ]
};



gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('css/coastal.scss',['sass']);
    gulp.watch('css/samson.scss', ['sass']);

});

    // === samson ===

// gulp.task('sass', function() {
//     gulp.src('css/samson.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('css/'));
// });
