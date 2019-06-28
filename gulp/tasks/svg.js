const gulp = require('gulp');
const rename = require('gulp-rename');
const svgSymbols = require('gulp-svg-symbols');
const svgmin = require('gulp-svgmin');
const config = require('../config');

const app = require('../config.js');
const pathes = {
	src: app().pathes.src + '/images/icons/**/*.svg',
	dest: app().pathes.src + '/images'
};

gulp.task(`svg`, function() {
	return gulp
		.src(pathes.src)
		.pipe(
			svgmin(file => {
				return {
					plugins: [
						{
							removeViewBox: false
						},
						{
							removeAttrs: {
								attrs: '*:(fill|stroke|style)'
							}
						},
						{
							removeTitle: true
						}
					]
				};
			})
		)
		.pipe(
			svgSymbols({
				slug: name => 'icon-' + name,
				templates: [`default-demo`, 'default-svg', 'default-css']
			})
		)
		.pipe(
			rename(path => {
				if (path.extname === '.css') {
					path.dirname = '../styles/scss/modules';
					(path.basename = '_icons'), (path.extname = '.scss');
				}

				if (path.extname === '.svg') {
					path.basename = 'sprite';
				}

				if (path.extname === '.html') {
					path.dirname = '../html';
					path.basename = 'sprite';
				}
			})
		)
		.pipe(gulp.dest(pathes.dest));
});
