var isInteger = require( './../lib' );

console.log( isInteger( 5 ) );
// Returns true

console.log( isInteger( 5.256 ) );
// Returns false