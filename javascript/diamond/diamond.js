export default class Diamond {
  constructor (level) {
    this.codeA = 'A'.charCodeAt(0);
  }

  makeDiamond(maxChar) {
    const maxCharCode = maxChar.charCodeAt(0);
    const charOffset = maxCharCode - this.codeA;
    const diamondSize = charOffset * 2 + 1;
    let resultString = '';
    for (let y = 0; y < diamondSize; y++) {
      const distanceToCenterY = Math.abs(y - charOffset);
      const currentLetter = String.fromCharCode(maxCharCode - distanceToCenterY);
      for (let x = 0; x < diamondSize; x++) {
        const distanceToCenter = Math.abs(x - charOffset) + distanceToCenterY;
        const char = distanceToCenter === charOffset ? currentLetter : ' ';
        resultString += char;
      }
      resultString += '\n';
    }
    return resultString;
  }
}
