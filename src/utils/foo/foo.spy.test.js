import foo from './foo.utils';
import * as isNullishModule from '../isNullish/isNullish.utils';

jest.spyOn(isNullishModule, 'default');

test('foo()', () => {
    expect(jest.isMockFunction(isNullishModule.default)).toBe(true);
    jest.mocked(isNullishModule.default).mockImplementation(() => true);

    expect(foo(null)).toBe(true);
    expect(foo(0)).toBe(true);
});