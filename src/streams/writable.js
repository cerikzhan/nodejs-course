const { Writable } = require('stream');

class WritableStream extends Writable {
    _write(chunk, encode, callback) {
        process.stdout.write(chunk);
        callback();
    }
}

module.exports = WritableStream;