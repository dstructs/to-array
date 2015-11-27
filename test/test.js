/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	matrix = require( 'dstructs-matrix' ),
	toArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'dstructs-to-array', function tests() {

	it( 'should export a function', function test() {
		expect( toArray ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided input which is not a matrix', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				toArray( value );
			};
		}
	});

	it( 'should construct an array of arrays from a matrix', function test() {
		var nRows,
			nCols,
			data,
			mat,
			arr,
			i, j;

		data = new Float64Array( [ 2, 4, 3, 1, 1, 2, 2, 1, 7, 3, 9, 7, 11, 9, 9, 8] );

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

});
