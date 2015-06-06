'use strict';

// TOARRAY //

/**
* FUNCTION: toArray( matrix )
*	Construct an array of arrays from a matrix.
*
* @param {Matrix} matrix - input matrix
* @returns {Array[]|Array} array of arrays or an empty array
*/
function toArray( mat ) {
	var nRows,
		nCols,
		out,
		arr,
		i, j;

	nRows = mat.shape[ 0 ];
	nCols = mat.shape[ 1 ];

	// Check if we were given an empty matrix; if so, return an empty array...
	if ( nRows === 0 || nCols === 0 ) {
		return [];
	}
	out = new Array( nRows );
	for ( i = 0; i < nRows; i++ ) {
		arr = new Array( nCols );
		for ( j = 0; j < nCols; j++ ) {
			arr[ j ] = mat.get( i, j );
		}
		out[ i ] = arr;
	}
	return out;
} // end FUNCTION toArray()


// EXPORTS //

module.exports = toArray;
