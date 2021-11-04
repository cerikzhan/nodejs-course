const upperAlphabetEnd = String.fromCharCode(...Array(91).keys()).slice(65).split('');
const lowerAlphabetEnd = String.fromCharCode(...Array(123).keys()).slice(97).split('');

const UPPER_START = 65;
const LOWER_START = 97;
const ALPHABET_LENGTH = 26;

function caesarCipher(str, shift = 1) {
    const result = [];

    if (shift < 0) {
        return caesarCipher(str, shift + 26);
    }

    for (let i = 0; i < str.length; i++) {
        let letter;
        const code = str.charCodeAt(i);

        if (code >= UPPER_START && code < (UPPER_START + ALPHABET_LENGTH)) {
            letter = String.fromCharCode(((code - UPPER_START + shift) % ALPHABET_LENGTH) + UPPER_START);
        } else if (code >= LOWER_START && code < (LOWER_START + ALPHABET_LENGTH)) {
            letter = String.fromCharCode(((code - LOWER_START + shift) % ALPHABET_LENGTH) + LOWER_START);
        } else {
            letter = String.fromCharCode(code);
        }

        result.push(letter);
    }

    return result.join('');
}

module.exports = caesarCipher;