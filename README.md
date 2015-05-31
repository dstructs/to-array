to-array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Construct an array-of-arrays from a matrix.


## Installation

``` bash
$ npm install compute-to-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var foo = require( 'compute-to-array' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-to-array' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-to-array.svg
[npm-url]: https://npmjs.org/package/compute-to-array

[travis-image]: http://img.shields.io/travis/compute-io/to-array/master.svg
[travis-url]: https://travis-ci.org/compute-io/to-array

[coveralls-image]: https://img.shields.io/coveralls/compute-io/to-array/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/to-array?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/to-array.svg
[dependencies-url]: https://david-dm.org/compute-io/to-array

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/to-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/to-array

[github-issues-image]: http://img.shields.io/github/issues/compute-io/to-array.svg
[github-issues-url]: https://github.com/compute-io/to-array/issues
