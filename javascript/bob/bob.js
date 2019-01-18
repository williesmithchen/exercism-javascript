export default class Bob {
  static hey (string) {
    const str = string.trim();

    if (str === '') return 'Fine. Be that way!';

    if (str.toUpperCase() === str && str.match(/[A-Z]/)) {
      if (/\?$/.test(str)) {
        return 'Calm down, I know what I\'m doing!';
      } else {
        return 'Whoa, chill out!';
      }
    }

    if (/[a-z]*\?$/ig.test(str)) return 'Sure.';

    return 'Whatever.';
  }
}

export const hey = (string) => Bob.hey(string);
