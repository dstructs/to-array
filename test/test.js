/* global require, describe, it */
'use strict';

// MODULES //

var matrix = require( 'compute-matrix' );

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	toArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-to-array', function tests() {

	it( 'should export a function', function test() {
		expect( toArray ).to.be.a( 'function' );
	});

	it( 'should do something' );

});
