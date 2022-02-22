const cipher = {
  encode: (offset, msg) => {
    if (typeof msg !== 'string' || !offset) {
      throw TypeError('invoked with wrong argument types')
    }
    const charArr = msg.toUpperCase();
    let cipherWord = '';
    for (let i = 0; i < charArr.length; i++) {
      let character = charArr[i];
      let asciiPos = character.charCodeAt(0);
      let offsetFormula = ((asciiPos - 65 + parseInt(offset)) % 26) + 65;
      if (asciiPos >= 65 && asciiPos <= 90) {
        cipherWord += String.fromCharCode(offsetFormula);
      } else {
        cipherWord += character;
      }
    }
    return cipherWord;
  },
  decode: (offset, msg) => {
    if (typeof msg !== 'string' || !offset) {
      throw TypeError('invoked with wrong argument types')
    }
    const charArr = msg.toUpperCase();
    let decodedWord = '';
    for (let i = 0; i < charArr.length; i++) {
      let character = charArr[i];
      let asciiPos = character.charCodeAt(0);
      let offsetFormula = ((asciiPos + 65 - parseInt(offset)) % 26) + 65;
      if (asciiPos >= 65 && asciiPos <= 90) {
        decodedWord += String.fromCharCode(offsetFormula);
      } else {
        decodedWord += character;
      }
    }
    return decodedWord;
  }
}

export default cipher;
