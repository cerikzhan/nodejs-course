const { Transform } = require('stream');
const shiftCipher = require('../ciphering/caesar');

class TransformStream extends Transform {
    constructor(config) {
        super();
        this.config = config;
    }

    _transform(chunk, encode, callback) {
        let res;
        for (let i = 0; i < this.config.length; i++) {
            if (i === 0) res = chunk.toString();
            res = shiftCipher(res, this.config[i]);
        }
        
        callback(null, res);
    }
}

module.exports = TransformStream;