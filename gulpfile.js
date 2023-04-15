const { src, dest, watch, parallel} = require ("gulp");
const sass = require("gulp-sass") (require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    src("src/scss/**/*.scss") // Identifica el archivo SASS
      .pipe( plumber())
      .pipe( sass() ) // Compilar
      .pipe (dest("build/css")) // Almacena en disco

    done (); // callback que avisa a gulp cuando llegamos al final
}

function javascript( done ) {
  src('src/js/**/*.js')
      .pipe(dest('build/js'));
      
  done();
}

function dev( done ){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel(javascript, dev);

