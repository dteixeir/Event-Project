var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	console.log('js uglify ran');
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/min_js'));

	console.log('starting - gulp watch');
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('js/**/*.js', ['uglify'])
});

gulp.task('styles', function()
{
	gulp.src('sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('./css'));
});

gulp.task('uglify', function(){
	gulp.src('js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/min_js'));
});
