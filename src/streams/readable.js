const { Readable } = require('stream');

class ReadableStream extends Readable {
    constructor(opt) {
        super(opt);
    }
}