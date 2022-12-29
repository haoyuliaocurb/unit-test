// Credit: https://github.com/lodash/lodash

import lodash from 'lodash';
import { identity, falsey, stubArray, document } from './map.test.utils';
import map from './map.utils';

describe('map', function() {
  var array = [1, 2];

  it('should map values in `collection` to a new array', function() {
    var object = { 'a': 1, 'b': 2 },
        expected = ['1', '2'];

    expect(map(array, String)).toStrictEqual(expected);
    expect(map(object, String)).toStrictEqual(expected);
  });

  it('should work with `_.property` shorthands', function() {
    var objects = [{ 'a': 'x' }, { 'a': 'y' }];
    expect(map(objects, 'a')).toStrictEqual(['x', 'y']);
  });

  it('should iterate over own string keyed properties of objects', function() {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    var actual = map(new Foo(), identity);
    expect(actual).toStrictEqual([1]);
  });

  it('should use `_.identity` when `iteratee` is nullish', function() {
    var object = { 'a': 1, 'b': 2 },
        values = [undefined, null, undefined],
        expected = lodash.map(values, lodash.constant([1, 2]));

    lodash.each([array, object], function(collection) {
      var actual = lodash.map(values, function(value, index) {
        return index ? map(collection, value) : map(collection);
      });

      expect(actual).toStrictEqual(expected);
    });
  });

  it('should accept a falsey `collection`', function() {
    var expected = lodash.map(falsey, stubArray);

    var actual = lodash.map(falsey, function(collection, index) {
      try {
        return index ? map(collection) : map();
      } catch (e) {}
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should treat number values for `collection` as empty', function() {
    expect(map(1)).toStrictEqual([]);
  });

  it('should treat a nodelist as an array-like object', function() {
    if (document) {
      var actual = map(document.getElementsByTagName('body'), function(element) {
        return element.nodeName.toLowerCase();
      });

      // eslint-disable-next-line jest/no-conditional-expect
      expect(actual).toStrictEqual(['body']);
    }
  });

  it('should work with objects with non-number length properties', function() {
    var value = { 'value': 'x' },
        object = { 'length': { 'value': 'x' } };

    expect(map(object, identity)).toStrictEqual([value]);
  });
});
