const { Transform } = require('stream');
const ciphering = require('../ciphering');

class TransformStream extends Transform {
    constructor(config) {
        super();
        this.config = config;
    }

    _transform(chunk, encode, callback) {
        const res = ciphering(chunk.toString(), this.config);
        
        callback(null, res);
    }
}

module.exports = TransformStream;