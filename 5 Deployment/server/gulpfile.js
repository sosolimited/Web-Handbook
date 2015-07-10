var gulp = require('gulp'),
	traceur = require('gulp-traceur'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	es6Path = 'es6/*.js',
	compiledPath = '.';


gulp.task('traceur', function() {
	gulp.src([es6Path])
		.pipe(plumber())
		.pipe(traceur({ blockBinding: true }))
		.pipe(gulp.dest(compiledPath));
});

gulp.task('babel', function() {
	gulp.src([es6Path])
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest(compiledPath));
});

gulp.task('watch', function() {
	
	gulp.watch([es6Path], ['traceur', 'babel']);

});

gulp.task('default', ['traceur', 'babel', 'watch']);