const stream = require('stream');
const { promisify } = require('util');
const ReadableStream = require('./readable');
const WritableStream = require('./writable');
const TransformStream = require('./transform');

const pipeline = promisify(stream.pipeline);

async function streamify(config, input, output) {
    const readable_stream = new ReadableStream(input);
    const writable_stream = new WritableStream(output);
    const transform_stream = new TransformStream(config);

    try {
        await pipeline(
            readable_stream,
            transform_stream,
            writable_stream,
        )
    } catch (err) {
        process.stderr.write(err.message);
        process.exit(1);
    }
}

module.exports = streamify;