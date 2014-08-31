
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isInteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-integer', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isInteger ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isInteger( 5 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5.5,
				true,
				[],
				'5',
				function(){},
				null,
				{},
				NaN,
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isInteger( values[i] ) );
		}
	});

});