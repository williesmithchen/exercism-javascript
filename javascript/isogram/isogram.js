export default class Isogram {
  static isIsogram (string) {
    return /^(?:([a-z])(?!.*\1))*$/ig.test(string.toLowerCase().replace(/\W/ig, ''));
  }
}
export const isIsogram = (string) => Isogram.isIsogram(string);
