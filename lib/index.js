'use strict';

// MODULES //

var isMatrixLike = require( 'validate.io-matrix-like' );


// FUNCTIONS //

var fromMatrix = require( './matrix.js' );


// TOARRAY //

/**
* FUNCTION: toArray( x )
*	Construct an array of arrays from a data structure.
*
* @param {Matrix} x - input data structure
* @returns {Array[]|Array} output data structure
*/
function toArray( x ) {
	if ( !isMatrixLike( x ) ) {
		throw new TypeError( 'to-array()::invalid input argument. Must provide a matrix. Value: `' + x + '`.' );
	}
	return fromMatrix( x );
} // end FUNCTION toArray()


// EXPORTS //

module.exports = toArray;
