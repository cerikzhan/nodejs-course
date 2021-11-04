const { Transform } = require('stream');
const caesarCipher = require('../ciphering/caesar');

class TransformStream extends Transform {
    constructor(config) {
        super();
        this.config = config;
    }

    _transform(chunk, encode, callback) {
        const shift = this.config[0] === 'C1' ? 1 : -1;
        const res = caesarCipher(chunk.toString(), shift);
        callback(null, res);
    }
}

module.exports = TransformStream;