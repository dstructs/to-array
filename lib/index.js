'use strict';

// MODULES //

// var isMatrix = require( 'validate.io-matrix' );

// TOARRAY //

/**
* FUNCTION: toArray()
*	Construct an array of arrays from a matrix.
*
* @param {Matrix} mat - input matrix
* @returns {Array} array of arrays
*/
function toArray( mat ) {

	var ret, nRows, nCols, i, j;

	/*
	if ( !isMatrix( mat ) ) {
		throw new TypeError( 'to-array()::invalid input argument. The input must be an instance of Matrix. Value: `' + mat + '`.' );
	}
	*/

	nRows = mat.shape[ 0 ];
	nCols = mat.shape[ 1 ];

	ret = new Array( nRows );
	for ( i = 0; i < nRows; i++ ) {
		ret[ i ] = new Array( nCols );
		for ( j = 0; j < nCols; j++ ) {
			ret[ i ][ j ] = mat.get( i, j );
		}
	}

	return ret;

} // end FUNCTION toArray()


// EXPORTS //

module.exports = toArray;
