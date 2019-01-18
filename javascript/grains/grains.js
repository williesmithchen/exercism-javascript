import BigInt from './lib/big-integer';

export default class Grains {
  square (number) {
    return BigInt(2).pow(number - 1).toString();
  }

  total () {
    return BigInt(this.square(65)).minus(1).toString();
  }
}
