const { spawn } = require('child_process');
const TransformStream = require('../../src/streams/transform');

test('Transform stream with Atbash ciphering', () => {
    const transform = new TransformStream('A');

    const cp = spawn('node', ['abc']);
    cp.stdin.pipe(transform).pipe(cp.stdout);

    cp.stdout.on('data', (chunk) => {
        expect(chunk.toString()).toBe('zyx');
    });
});

test('Transform stream with Shift ciphering', () => {
    const transform = new TransformStream('C1');

    const cp = spawn('node', ['abc']);
    cp.stdin.pipe(transform).pipe(cp.stdout);

    cp.stdout.on('data', (chunk) => {
        expect(chunk.toString()).toBe('bcd');
    });
});