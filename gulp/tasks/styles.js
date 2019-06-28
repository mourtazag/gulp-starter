const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const util = require('gulp-util');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const cssnano = require('gulp-cssnano');
const gulpStylelint = require('gulp-stylelint');
//const purgecss = require('gulp-purgecss');

const app = require('../config.js');
const pathes = {
	src: app().pathes.src + '/styles/styles.scss',
	dest: app().pathes.dest + '/static/css',
	build: app().pathes.build + '/static/css',
	dev: '../../thermacell-project/src/THRBundle/Resources/public/css/'
};
const sassOptions = {
	includePaths: []
};
const autoprefixerOptions = {
	browsers: ['last 2 versions', 'ie >= 11']
};

gulp.task('styles', function() {
	console.log(global.build ? title('--- Building CSS files') : '');

	return (
		gulp
			.src(pathes.src)
			.pipe(global.build ? sourcemaps.init() : util.noop())
			.pipe(plumber({ errorHandler: customErrorHandler }))
			.pipe(sass(sassOptions))
			.pipe(autoprefixer(autoprefixerOptions))
			.pipe(global.build ? sourcemaps.write() : util.noop())
			.pipe(
				gulpStylelint({
					reporters: [{ formatter: 'string', console: true }]
				})
			)
			.pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest))
			.pipe(cssnano())
			.pipe(rename({ suffix: '.min' }))
			.pipe(global.build ? gulp.dest(pathes.build) : gulp.dest(pathes.dest))
			//.pipe(gulp.dest(pathes.dev))
			.pipe(browserSync.stream())
	);
});
