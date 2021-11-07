const Atbash = require('./atbash_cipher');
const Shift = require('./shift_cipher');

const ALPHABET_LENGTH = 26;

function ciphering (str, config) {
    let tool;
    switch(config) {
        case 'C1':
            tool = new Shift(1);
            break;
        case 'C0':
            tool = new Shift(ALPHABET_LENGTH - 1);
            break;
        case 'R1':
            tool = new Shift(8);
            break;
        case 'R0':
            tool = new Shift(ALPHABET_LENGTH - 8);
            break;
        case 'A':
            tool = new Atbash();
    }

    return tool.parse(str);
}

module.exports = ciphering;