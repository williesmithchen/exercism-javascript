export default class PrimeFactors {
  static recursion (num) {
    let result = [];
    let i = 2;
    if (num <= 1 || !num) return result;

    while (num % i) i++;
    result.push(i);

    const next = this.recursion(num / i);
    if (!!next.length) result = result.concat(next);

    return result;
  }
};
export const primeFactors = (number) => PrimeFactors.recursion(number);
