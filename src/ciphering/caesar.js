const UPPER_START = 65;
const LOWER_START = 97;
const ALPHABET_LENGTH = 26;

function shiftCipher(str, code) {
    const result = [];

    let shift;

    switch(code) {
        case 'C1':
            shift = 1;
            break;
        case 'C0':
            shift = 26 - 1;
            break;
        case 'R1':
            shift = 8;
            break;
        case 'R0':
            shift = 26 - 8;
            break;
    }

    for (let i = 0; i < str.length; i++) {
        let letter;
        const code = str.charCodeAt(i);

        if (code >= UPPER_START && code < (UPPER_START + ALPHABET_LENGTH)) {
            letter = String.fromCharCode(((code - UPPER_START + shift) % ALPHABET_LENGTH) + UPPER_START);
        } else if (code >= LOWER_START && code < (LOWER_START + ALPHABET_LENGTH)) {
            letter = String.fromCharCode(((code - LOWER_START + shift) % ALPHABET_LENGTH) + LOWER_START);
        } else {
            letter = str[i];
        }

        result.push(letter);
    }

    return result.join('');
}

module.exports = shiftCipher;