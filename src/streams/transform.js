const { Transform } = require('stream');

class TransformStream extends Transform {
    constructor(opt) {
        super(opt);
    }
}