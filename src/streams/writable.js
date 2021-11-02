const { Writable } = require('stream');

class WritableStream extends Writable {
    constructor(opt) {
        super(opt);
    }
}