// Credit: https://github.com/lodash/lodash

export var identity = function(value) { return value; };

export var falsey = [undefined, null, undefined, false, 0, NaN, ''];

export var stubArray = function() { return []; };

var root = (typeof global === 'object' && global) || this;

export var document = root.phantom ? undefined : root.document;

export var noop = function() {};

export var LARGE_ARRAY_SIZE = 200;

export var square = function(n) { return n * n; };