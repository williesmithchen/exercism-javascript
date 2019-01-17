export default class Hamming {
  static compute (dna, dnaTwo) {
    if (dna.length !== dnaTwo.length) throw new Error('left and right strands must be of equal length');
    let diff = 0;
    const dnaArray = dna.toString().toUpperCase().split('');
    const dnaTwoArray = dnaTwo.toString().toUpperCase().split('');
    dnaArray.map((char, index) => diff += char !== dnaTwoArray[index] ? 1 : 0);
    return diff;
  }
}
export const compute = (dna, dnaTwo) => Hamming.compute(dna, dnaTwo);
