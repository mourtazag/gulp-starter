const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const app = require('../config.js');
const pathes = {
	html: app().pathes.src + '/html/**/*.html',
	scss: app().pathes.src + '/styles/**/*.scss',
	js: app().pathes.src + '/scripts/**/*.js',
	fonts: app().pathes.src + '/fonts/**/*',
	images: [app().pathes.src + '/images/**/*.{jpg,png,gif,svg,jpeg}', '!' + app().pathes.src + '/images/icons'],
	svg: app().pathes.src + '/images/icons/**/*.svg'
};

gulp.task('server', ['styles', 'html', 'scripts', 'fonts', 'images', 'svg'], function() {
	browserSync.init(app().browserSync);
	gulp.watch(pathes.html, [['styles', 'html'], reload]);
	gulp.watch(pathes.scss, ['styles', reload]);
	gulp.watch(pathes.js, ['scripts', reload]);
	gulp.watch(pathes.fonts, ['fonts', reload]);
	gulp.watch(pathes.images, ['images', reload]);
	gulp.watch(pathes.svg, ['svg', reload]);
	//gulp.watch(config.images.src, ['copy:images', reload]);
});
