const { src, dest } = require('gulp)');
const sass = require('gulp-sass')(require('sass'));

function css( done ){
    
    src('src/scss/app.scss')//identificar el archivo .scss a compilar
        .pipe( sass() )//compilar
        .pipe( dest('build/css') )   //almacenarla

 

    done();
}

exports.css = css;