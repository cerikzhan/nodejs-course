const fs = require('fs');
const { Writable } = require('stream');

class WritableStream extends Writable {
    constructor(path) {
        super();
        this.writePath = path;
        this.fd = null;
    }

    _construct(callback) {
        fs.open(this.writePath, 'a', (err, fd) => {
            if (err) {
                callback(err);
            } else {
                this.fd = fd;
                callback();
            }
        })
    }
    
    _write(chunk, encode, callback) {
        fs.write(this.fd, chunk, callback);
    }

    _destroy(err, callback) {
        if (this.fd) {
            fs.closeSync(this.fd, (er) => callback(er || err));
        } else {
            callback(err);
        }
    }
}

module.exports = WritableStream;