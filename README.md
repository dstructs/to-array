to-array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Construct an array of arrays from a [Matrix][matrix].


## Installation

``` bash
$ npm install dstructs-to-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var toArray = require( 'dstructs-to-array' );
```

#### toArray( x )

Constructs an `array` of `arrays`. To convert a [matrix][matrix],

``` javascript
var mat = matrix( [ 2, 2 ] );

var arr = toArray( mat )
// returns [ [ 0, 0 ], [ 0, 0 ] ]
```

If provided an empty [matrix][matrix], the function returns an empty `array`.

``` javascript
var mat, arr;

mat = matrix( [0,0] );
arr = toArray( mat );
// returns []

mat = matrix( [0,10] );
arr = toArray( mat );
// returns []

mat = matrix( [10,0] );
arr = toArray( mat );
// returns []
```


## Examples

``` javascript
var toArray = require( 'dstructs-to-array' ),
	matrix = require( 'dstructs-matrix' );

var data, mat;

data = new Int32Array( [ 1, 2, 3, 4 ] );
mat = matrix( data, [ 2, 2 ] );

console.log( toArray( mat ) );
// returns [ [ 1, 2 ], [ 3, 4 ] ]
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-to-array.svg
[npm-url]: https://npmjs.org/package/dstructs-to-array

[travis-image]: http://img.shields.io/travis/dstructs/to-array/master.svg
[travis-url]: https://travis-ci.org/dstructs/to-array

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/to-array/master.svg
[codecov-url]: https://codecov.io/github/dstructs/to-array?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/to-array.svg
[dependencies-url]: https://david-dm.org/dstructs/to-array

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/to-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/to-array

[github-issues-image]: http://img.shields.io/github/issues/dstructs/to-array.svg
[github-issues-url]: https://github.com/dstructs/to-array/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[matrix]: https://github.com/dstructs/matrix
