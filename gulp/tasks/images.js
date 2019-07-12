const gulp = require('gulp');
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

const app = require('../config.js');
pathes = {
	src: [app().pathes.src + '/images/**/*.{jpg,png,gif,svg,jpeg}', '!' + app().pathes.src + '/images/icons'],
	dest: app().pathes.dest + '/static/images',
	build: app().pathes.build + '/static/images'
};

gulp.task('images', ['svg', 'videos'], function() {
	if (global.build) console.log(global.build ? title('--- Building IMAGES') : '');
	console.log(title('--- - Images processing'));

	return gulp
		.src(pathes.src)
		.pipe(
			plumber({
				errorHandler: customErrorHandler
			})
		)
		.pipe(
			cache(
				imagemin(
					[
						imagemin.gifsicle({
							interlaced: true,
							optimizationLevel: 5
						}),
						imagemin.jpegtran(),
						imagemin.optipng({ optimizationLevel: 5 }),
						imagemin.svgo({
							plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
						})
					],
					{
						verbose: true
					}
				)
			)
		)
		.pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest));
});
