const gulp = require('gulp');
var postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const tailwindcss = require('tailwindcss');


gulp.task( 'styles', () => {
    return gulp
      .src('./src/css/tailwind.css')
      
      .pipe( postcss([
        tailwindcss('./tailwind.config.js'),
        require( 'autoprefixer' )
        
      ]))
      .pipe(gulp.dest("dist/css"))   
  });
gulp.task('watch',()=>{
  gulp.watch('./tailwind.config.js',gulp.series('styles'));
});
gulp.task('default', gulp.series(['styles'],['watch']));
