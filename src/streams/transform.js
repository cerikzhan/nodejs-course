const { Transform } = require('stream');

const ALPHABET_LENGTH = 26;

// const upperAlphabetEnd = String.fromCharCode(...Array(91).keys()).slice(65).split('');
const upperAlphabetStart = 65;
const lowerAlphabetStart = 123;

class TransformStream extends Transform {
    constructor(config) {
        super();
        this.config = config;
    }

    _transform(chunk, encode, callback) {
        console.log('chunk', chunk);
        callback(null, chunk.toString('utf8'));
    }
}

module.exports = TransformStream;