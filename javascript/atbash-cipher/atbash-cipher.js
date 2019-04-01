export default class Atbash {
  static encode (input) {
    const baseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const reverseArray = baseArray.slice().reverse();
    let count = 0;
    return input.toLowerCase().replace(/\W+/g, '').split('').map((s) => {
        if (!/[a-zA-Z0-9]/ig.test(s)) return '';
        if (/[0-9]/ig.test(s)) return s;
        return reverseArray[baseArray.findIndex((b) => b === s)];
      }).join('').match(/.{1,5}/g).join(' ');
  }
};
export const encode = (input) => Atbash.encode(input);
