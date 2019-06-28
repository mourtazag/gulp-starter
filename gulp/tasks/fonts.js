const gulp = require('gulp');

const app = require('../config.js');
const pathes = {
	src: app().pathes.src + '/fonts/**/*',
	dest: app().pathes.dest + '/static/fonts',
	build: app().pathes.build + '/static/fonts'
};

gulp.task('fonts', function() {
	console.log(global.build ? title('--- Copying FONTS files') : '');
	return gulp.src(pathes.src, { dot: true }).pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest));
});
