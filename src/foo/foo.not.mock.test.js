import foo from './foo.utils';
import isNullish from '../isNullish/isNullish.utils';

test('foo()', () => {
    expect(jest.isMockFunction(isNullish)).toBe(false);
    
    expect(foo(null)).toBe(true);
    expect(foo(0)).toBe(false);
});