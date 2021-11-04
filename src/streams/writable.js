const { Writable } = require('stream');

class WritableStream extends Writable {
    constructor(path) {
        super();
        this.writePath = path;
    }
    
    _write(chunk, encode, callback) {
        process.stdout.write(chunk);
        callback();
    }
}

module.exports = WritableStream;