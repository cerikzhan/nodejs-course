const { Readable } = require('stream');

class ReadableStream extends Readable {
    constructor(path) {
        super();
        this.readPath = path;
    }

    _read() {
        process.stdin.on('data', (data) => {
            this.push(data);
        })
    }
}

module.exports = ReadableStream;

