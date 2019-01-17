export default class ReverseString {
  static reverseString (str = '') {
    return str === '' ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
  }
}
export const reverseString = (str) => ReverseString.reverseString(str);
