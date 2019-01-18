export default class BeerSong {
  static bottleStr (bottle) {
    return bottle > 1 || bottle === 0 || bottle === 'No more' ? `${bottle || 'no more'} bottles` : `${bottle} bottle`;
  }

  static takeOneDown (bottle) {
    return bottle > 0 ? 'one' : 'it';
  }

  static verse (bottle = 0) {
    const bottles = parseInt(bottle, 10) || 'No more';
    const LineOne = `${this.bottleStr(bottles)} of beer on the wall, ${this.bottleStr(bottles).toLowerCase()} of beer.\n`;
    const LineTwo = `Take ${this.takeOneDown(bottles - 1)} down and pass it around, ${this.bottleStr(bottles - 1)} of beer on the wall.\n`;
    return `${LineOne}${bottle !== 0 ? LineTwo : 'Go to the store and buy some more, 99 bottles of beer on the wall.\n'}`;
  };

  static sing (start = 99, end = 0) {
    let result = '';
    while (start >= end) {
      result += `${verse(start)}${start !== end ? '\n' : ''}`;
      --start;
    }
    return result;
  };
}
export const verse = (bottle) => BeerSong.verse(bottle);
export const sing = (start, end) => BeerSong.sing(start, end);
