export default class RotationalCipher {
  static rotate(str, rotateIndex) {
    const baseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return str.split('').map((s) => {
      if (!/[a-zA-Z]/ig.test(s)) return s;
      const isUpperCase = s == s.toUpperCase();
      let newIndex = baseArray.findIndex((b) => isUpperCase ? b.toUpperCase() === s : b === s);
      newIndex = (newIndex + rotateIndex) % baseArray.length;
      return isUpperCase ? baseArray[newIndex].toUpperCase() : baseArray[newIndex];
    }).join('');
  }
}
