const { Transform } = require('stream');

const ALPHABET_LENGTH = 26;

const upperAlphabet = String.fromCharCode(...Array(91).keys()).slice(65).split('');
const lowerAlphabet = upperAlphabet.map((letter) => letter.toUpperCase());

class TransformStream extends Transform {
    constructor(code) {
        super();
        this.code = code;
    }
    _transform() {

    }
}