const { Transform } = require('stream');

const ALPHABET_LENGTH = 26;

const upperAlphabet = String.fromCharCode(...Array(91).keys()).slice(65).split('');
const lowerAlphabet = upperAlphabet.map((letter) => letter.toUpperCase());

class TransformStream extends Transform {
    constructor(config) {
        super();
        this.config = config;
    }

    _transform(chunk, encode, callback) {
        const result = `*${chunk}`;
        callback(null, result);
    }
}

module.exports = TransformStream;