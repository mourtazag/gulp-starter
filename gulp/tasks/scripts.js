const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

const app = require('../config.js');
const pathes = {
	src: app().pathes.src + '/scripts/**/*.js',
	dest: app().pathes.dest + '/static/js',
	build: app().pathes.build + '/static/js'
};

gulp.task('scripts', function() {
	console.log(global.build ? title('--- Building JS files') : '');
	return gulp
		.src(pathes.src)
		.pipe(
			plumber({
				errorHandler: customErrorHandler
			})
		)
		.pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest))
		.pipe(browserSync.stream());
});
