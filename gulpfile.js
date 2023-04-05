const { src, dest, watch} = require ("gulp");
const sass = require("gulp-sass") (require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    src("src/scss/**/*.scss") // Identifica el archivo SASS
      .pipe( plumber())
      .pipe( sass() ) // Compilar
      .pipe (dest("build/css")) // Almacena en disco

    done (); // callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch("src/scss/**/*.scss", css)
}

exports.css = css;
exports.dev = dev;