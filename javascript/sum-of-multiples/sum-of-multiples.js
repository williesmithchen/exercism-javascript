export default class SOM {
  constructor (factors = [], maxNum = 0) {
    this.factors = factors;
    this.maxNum = maxNum;
    this.total = 0;
    this.execute();
  }

  execute () {
    for (let i = 0; i < this.maxNum; i += 1) {
      let pass = false;
      this.factors.forEach((factor) => {
        if (!pass && i % factor === 0) {
          pass = true;
        }
      });
      if (pass) {
        this.total += i;
      }
    };
  }

  get result () {
    return this.total;
  }
}

export const sumOfMultiples = (factors, maxNum) => new SOM(factors, maxNum).result;

// export default class Atbash {
//   static encode (input) {
//     const baseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     const reverseArray = baseArray.slice().reverse();
//     let count = 0;
//     return input.toLowerCase().replace(/\W+/g, '').split('').map((s) => {
//         if (!/[a-zA-Z0-9]/ig.test(s)) return '';
//         if (/[0-9]/ig.test(s)) return s;
//         return reverseArray[baseArray.findIndex((b) => b === s)];
//       }).join('').match(/.{1,5}/g).join(' ');
//   }
// };
// export const encode = (input) => Atbash.encode(input);
