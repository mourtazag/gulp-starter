// Require plugins
const gulp = require('gulp');
const notify = require('gulp-notify');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const clc = require('cli-color');

// Colors
global.title = clc.bgGreen.black;
global.errorText = clc.bgRed.black;

// Global function
global.customErrorHandler = function(err) {
	var isLinux = /^linux/.test(process.platform);
	if (!isLinux) {
		notify.onError({ message: '<%= error.name %> (<%= error.plugin %>): <%= error.message %>' })(err);
	} else {
		console.log(errorText(err));
	}
	this.emit('end');
};

// Load tasks
requireDir('./tasks');

gulp.task('default', () => {
	runSequence('clean', 'clearCache', 'server');
});

gulp.task('build', () => {
	console.log(title('Starting build process'));

	global.build = true;
	runSequence('clean', 'clearCache', 'html', 'styles', 'scripts', 'fonts', 'images', () => {
		global.build = false;
	});
});
