const gulp = require('gulp');

const app = require('../config.js');
const pathes = {
	src: app().pathes.src + '/images/**/*.mp4',
	dest: app().pathes.dest + '/static/images'
};

gulp.task(`videos`, function() {
	return gulp.src(pathes.src).pipe(gulp.dest(pathes.dest));
});
