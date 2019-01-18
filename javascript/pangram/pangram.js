export default class Pangram {
  static isPangram (string) {
    return (string.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26;
  }
}

export const isPangram = (string) => Pangram.isPangram(string);
