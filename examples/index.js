'use strict';

var toArray = require( './../lib' );
var matrix = require( 'compute-matrix' );

var mat = matrix( new Int32Array( [ 1, 2, 3, 4 ] ), [ 2, 2 ] );
console.log( toArray(mat) );
