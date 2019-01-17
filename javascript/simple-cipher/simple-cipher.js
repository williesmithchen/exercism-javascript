export class Cipher {

  constructor (input) {
    if (input === '' || /[^a-z]+/g.test(input)) throw new Error('Bad key');
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
    this.key = !!input ? input : this.generateKey(this.lowercase);
    this.lowercaseArray = this.lowercase.split('');
  }

  random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  poker (sourceArray) {
    const pokerArray = sourceArray.split('');

    for (var i = 0; i < pokerArray.length; i++) {
      var j = this.random(0, pokerArray.length - 1);
      var temp = pokerArray[i];
      pokerArray[i] = pokerArray[j];
      pokerArray[j] = temp;
    }

    return pokerArray.join('');
  }

  generateKey (lowercase) {
    const charAt = this.random(0, lowercase.length - 1);
    const fakeKey = Array.apply(null, Array(100)).map(() => lowercase.charAt(charAt)).join('');

    return this.poker(fakeKey);
  }

  encode (input) {
    return input.split('').map((c, i) => {
      var keyOffset = this.lowercaseArray.indexOf(this.key[i % this.key.length]),
          charIndex = this.lowercaseArray.indexOf(c),
          newIndex = charIndex + keyOffset;
      if (charIndex + keyOffset > (this.lowercase.length - 1)) newIndex = newIndex - this.lowercase.length
      return this.lowercaseArray[newIndex];
    }).join('');
  }

  decode (input) {
    return input.split('').map((c, i) => {
      var keyOffset = this.lowercaseArray.indexOf(this.key[i % this.key.length]),
          charIndex = this.lowercaseArray.indexOf(c),
          newIndex = charIndex - keyOffset;
      if (newIndex < 0) newIndex = newIndex + this.lowercase.length
      return this.lowercaseArray[newIndex];
    }).join('');
  }
}
