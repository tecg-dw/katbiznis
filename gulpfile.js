/* leny/katbizniss
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by leny@flatLand!
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
    image = require( "gulp-image" ),
    pug = require( "gulp-pug" );

// --- Task for images
gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Task for pug

gulp.task( "html", function() {
    gulp.src( "src/pug/**/*.pug" )
        .pipe( pug( {} ) )
        .pipe( gulp.dest( "." ) );
} );

// --- Task for styles


// --- Task for js

// --- Watch tasks

// --- Aliases
