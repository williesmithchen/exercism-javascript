export class PhoneNumber {
  constructor (phoneNumber = null) {
    this.phoneNumber = phoneNumber === null ? phoneNumber : this.formatNumber(phoneNumber.replace(/[\D]+/ig, ''));
  }

  formatNumber (phoneNumber = '') {
    const result = phoneNumber.match(/^1?([2-9][0-9]{2}[2-9][0-9]{6})$/);
    return result === null ? result : result[0].length === 11 ? result[0].replace(/^[1]/ig, '') : result[0];
  }

  number () {
    return this.phoneNumber;
  }
};
