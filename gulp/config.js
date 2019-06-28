//Global config
// const app = {
// 	pathes: {
// 		src: '../src',
// 		dest: '../dest'
// 	},
// 	browserSync: {
// 		server: {
// 			baseDir: this.pathes.dest // serve with static server
// 		},
// 		notify: false
// 		//online: false, // if internet connection is not active
// 		//proxy: projectUrl,
// 		//tunnel: tunnelKey, // create a tunnel for public access
// 	}
// };

const app = () => {
	const src = '../src';
	const dest = '../dest';
	const build = '../build';

	return {
		pathes: {
			src,
			dest,
			build
		},
		browserSync: {
			server: {
				baseDir: dest,
				directory: true
			},
			notify: false,
			injectChanges: true
			//online: false, // if internet connection is not active
			//proxy: projectUrl,
			//tunnel: tunnelKey, // create a tunnel for public access
		}
	};
};

module.exports = app;
