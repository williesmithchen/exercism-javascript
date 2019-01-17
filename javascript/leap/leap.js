class Leap {
  static isLeap (year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }
}

export const isLeap = (year) => Leap.isLeap(year);
