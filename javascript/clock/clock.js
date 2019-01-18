class clock {
  constructor (hour = 0, mins = 0) {
    this.now = typeof hour === 'object' && this.isClock() === 'isClock' ? hour : new Date(2000, 1, 1, hour, mins);
  }

  isClock () {
    return 'isClock';
  }

  changeMins (now, mins = 0) {
    const newNow = new Date(now);
    newNow.setMinutes(now.getMinutes() + mins);
    this.now = newNow;
    return new clock(this.now);
  }

  plus (mins) {
    return this.changeMins(this.now, mins);
  }

  minus (mins) {
    return this.changeMins(this.now, 0 - mins);
  }

  equals (time) {
    return this.formatString(this.now) === time.toString();
  }

  padStart (num) {
    return `${num < 10 ? '0': ''}${num}`;
  }

  formatString (now = this.now) {
    return `${this.padStart(now.getHours() % 24)}:${this.padStart(now.getMinutes() % 60)}`;
  }

  toString () {
    return this.formatString(this.now);
  }
}

export default (hour, mins) => new clock(hour, mins)
