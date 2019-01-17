const rnaReg = /[^G|C|U|A]+/ig;
const dnaMap = { C: 'G', G: 'C', A: 'U', T: 'A' };
class RnaTranscription {
  static toRna (dna) {
    const rna = [];
    dna.toString().toUpperCase().split('').map((c, i) => {
      if (!!dnaMap[c]) {
        rna[i] = dnaMap[c] || c;
      } else {
        throw new Error('Invalid input DNA.');
      }
    });
    return rna.join('');
  }
}

export default RnaTranscription;
export const toRna = (dna) => RnaTranscription.toRna(dna);
