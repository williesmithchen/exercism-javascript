export const factor = { Pling: 3, Plang: 5, Plong: 7 };
export const factorToString = (number, key) => number % factor[key] == 0 ? key : '';
export const convert = (number = 0) => Object.keys(factor).map((key) => factorToString(number, key)).join('') || number.toString();
