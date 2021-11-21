const path = require('path');
const ReadableStream = require('../../src/streams/readable');

const rootFolder = path.dirname(path.dirname(__dirname));

test('Readable stream', () => {
    const stream = new ReadableStream(path.join(rootFolder, './input.txt'));

    let res = '';
    stream.on('data', (chunk) => {
        res += chunk.toString();
    });

    stream.on('end', () => {
        res = res.trim();
        expect(res).toBe('abc');
    });
});

test('Readable stream err', () => {
    const stream = new ReadableStream(path.join(rootFolder, './input1.txt'));

    stream.on('error', (err) => {
        expect(err.message).toMatch(/ENOENT: no such file or directory/);
    });
});
