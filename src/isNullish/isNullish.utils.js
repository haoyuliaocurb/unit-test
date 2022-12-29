export const isNullish = (value) => [null, undefined].some((each) => each === value);

export default isNullish;
