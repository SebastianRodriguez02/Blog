const { src, dest} = require ("gulp");
const sass = require("gulp-sass") (require('sass'))

function css (done) {
    src('src/scss/app.scss') // Identifica el archivo SASS
      .pipe( sass() ) // Compilar
      .pipe (dest("build/css")) // Almacena en disco

    done (); // callback que avisa a gulp cuando llegamos al final
}

exports.css = css;