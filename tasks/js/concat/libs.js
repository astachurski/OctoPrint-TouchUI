module.exports = function (gulp, $, config) {

	return gulp.src([
			'source/vendors/keyboard/dist/js/jquery.keyboard.min.js',
			'source/vendors/jquery-fullscreen/jquery.fullscreen-min.js',
			'source/vendors/iscroll/build/iscroll.js',
			// 'source/vendors/tinycolorpicker/lib/jquery.tinycolorpicker.min.js',
			'source/vendors/Materialize/js/waves.js',
			'source/vendors/jquery-circle-progress/dist/circle-progress.js',
			'source/vendors/hammerjs/hammer.min.js',
			'source/vendors/OctoPrint-TouchUI/**/*.js'
		])
		.pipe($.if(["**/iscroll.js", "**/waves.js"], $.uglify()))
		.pipe($.concat(config.js.libs.output))
		.pipe(gulp.dest(config.js.path));

}
