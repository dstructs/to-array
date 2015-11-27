/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	matrix = require( 'dstructs-matrix' ),
	toArray = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'dstructs-to-array', function tests() {

	it( 'should export a function', function test() {
		expect( toArray ).to.be.a( 'function' );
	});

	it( 'should construct an array of arrays from a matrix', function test() {
		var nRows,
			nCols,
			data,
			mat,
			arr,
			i, j;

		data = new Float64Array( [ 2, 4, 3, 1, 1, 2, 2, 1, 7, 3, 9, 7, 11, 9, 9, 8 ] );

		nRows = 4;
		nCols = 4;

		mat = matrix( data, [nRows, nCols] );
		arr = toArray( mat );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( mat.get( i, j ), arr[ i ][ j ] );
			}
		}
	});

	it( 'should return an empty array if provided an empty matrix', function test() {
		var arr = [],
			mat;

		mat = matrix( [0,0] );
		assert.deepEqual( toArray( mat ), arr );

		mat = matrix( [0,10] );
		assert.deepEqual( toArray( mat ), arr );

		mat = matrix( [10,0] );
		assert.deepEqual( toArray( mat ), arr );
	});

});
