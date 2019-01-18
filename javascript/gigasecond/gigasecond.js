export default class Gigasecond {
  static gigasecond (date) {
    return new Date(date.getTime() + Math.pow(10, 9) * 1000);
  }
}
export const gigasecond = (date) => Gigasecond.gigasecond(date);
