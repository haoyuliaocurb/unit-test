import foo from './foo.utils';
// import { isNullish } from '../isNullish/isNullish.utils';
import isNullish from '../isNullish/isNullish.utils';

jest.mock('../isNullish/isNullish.utils', () => ({
    __esModule: true,
    isNullish: jest.fn(() => true),
    default: jest.fn(() => true),
}))

test('foo()', () => {
    expect(jest.isMockFunction(isNullish)).toBe(true);
    
    expect(foo(null)).toBe(true);
    expect(foo(0)).toBe(true);

    expect(isNullish).toBeCalledTimes(2);
});