var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browser_sync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer'); 
var rename 		 = require('gulp-rename');//Require all gulp files


gulp.task('sass', function() {
     gulp.src('./app/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browser_sync.reload({stream: true})); 
});

gulp.task('browser_sync', function(){
	browser_sync({
		server: {
			baseDir: 'app' 
		},
		notify: false
	});
});

gulp.task('autoprefixer', function(){
	    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.pref'}))
        .pipe(gulp.dest('app/css/'))

	})

gulp.task('watch', ['browser_sync','sass', 'autoprefixer'] ,  function() {
	gulp.watch('./app/sass/**/*.sass', ['sass']);
	gulp.watch('./app/*.html', browser_sync.reload);
	gulp.watch('./app/js/*.js', browser_sync.reload);
	gulp.watch('./app/css/**/*.css', ['autoprefixer']);
	gulp.watch('./app/css/**/*.css', browser_sync.reload);
	
});
