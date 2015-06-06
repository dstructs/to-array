'use strict';

var matrix = require( 'dstructs-matrix' ),
	toArray = require( './../lib' );

var data, mat;

data = new Int32Array( [ 1, 2, 3, 4 ] );
mat = matrix( data, [ 2, 2 ] );

console.log( toArray( mat ) );
// returns [ [ 1, 2 ], [ 3, 4 ] ]
