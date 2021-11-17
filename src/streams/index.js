const stream = require('stream');
const { promisify } = require('util');
const { stdin, stdout } = require('process');
const ReadableStream = require('./readable');
const WritableStream = require('./writable');
const TransformStream = require('./transform');

const pipeline = promisify(stream.pipeline);

async function streamify(config, input, output) {
    const readable_stream = input ? new ReadableStream(input) : stdin;
    const writable_stream = output ? new WritableStream(output) : stdout;

    const transform_stream = [];
    for (let i = 0; i < config.length; i++) {
        transform_stream.push(new TransformStream(config[i]));
    }

    await pipeline(
        readable_stream,
        ...transform_stream,
        writable_stream,
    );
}

module.exports = streamify;
