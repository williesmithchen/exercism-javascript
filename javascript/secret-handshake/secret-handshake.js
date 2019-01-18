export default class SecretHandshake {
  constructor (secret) {
    if (/[^0-9]+/ig.test(`${secret}`)) throw new Error('Handshake must be a number');
    this.bin = (+secret).toString(2);
    this.command = ['wink', 'double blink', 'close your eyes', 'jump'];
  }

  commands () {
    let result = [], resultReverse = false;
    this.bin.split('').reverse().forEach((c, i) => {
      if (i < this.command.length) {
        if (c === '1') result.push(this.command[i]);
      } else {
        resultReverse = true;
      }
    });
    if (resultReverse) result = result.reverse();

    return result;
  }
};
export const secretHandshake = (secret) => new SecretHandshake(secret).commands();
