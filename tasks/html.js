const gulp = require('gulp');
const plumber = require('gulp-plumber');
const twig = require('gulp-twig');
const browserSync = require('browser-sync').create();

const app = require('../config.js');

const pathes = {
	src: app().pathes.src + '/html/**/*.html',
	dest: app().pathes.dest,
	build: app().pathes.build
};

gulp.task('html', function() {
	console.log(global.build ? title('--- Building HTML files') : '');
	gulp.src(pathes.src)
		.pipe(
			plumber({
				errorHandler: err => console.log(errorText('Error', err))
			})
		)
		.pipe(
			twig({
				onError: err => console.log(errorText('Twig error', err))
			})
		)
		.pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest))
		.pipe(browserSync.stream());
});
