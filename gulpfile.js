const { src, dest, watch} = require ("gulp");
const sass = require("gulp-sass") (require('sass'))

function css (done) {
    src("src/scss/app.scss") // Identifica el archivo SASS
      .pipe( sass() ) // Compilar
      .pipe (dest("build/css")) // Almacena en disco

    done (); // callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch("src/scss/app.scss", css)
}

exports.css = css;
exports.dev = dev;