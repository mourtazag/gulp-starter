const gulp = require('gulp');
const del = require('del');
const cache = require('gulp-cache');

const app = require('../config.js');
const pathes = {
	dest: app().pathes.dest,
	build: app().pathes.build,
	all: [app().pathes.dest, app().pathes.build]
};

gulp.task('clean', function() {
	return del(pathes.all, { force: true });
});

gulp.task('clearCache', function() {
	cache.clearAll();
});
