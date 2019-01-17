export default class Binary {
  constructor(bin) {
    const regex = /[^0-1]+/ig
    this.bin = regex.test(bin) ? 0 : parseInt(bin, 2);
  }

  toDecimal () {
    return this.bin;
  }
}
