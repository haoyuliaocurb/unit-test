import foo from './foo.utils';
import * as isNullishModule from '../isNullish/isNullish.utils';

test('foo()', () => {
    expect(jest.isMockFunction(isNullishModule.default)).toBe(false);

    expect(foo(null)).toBe(true);
    expect(foo(0)).toBe(false);
});