const path = require("path");
const streamify = require('../../src/streams');
const ReadableStream = require('../../src/streams/readable');
const WritableStream = require('../../src/streams/writable');
const TransformStream = require('../../src/streams/transform');

jest.mock('../../src/streams/readable.js');
jest.mock('../../src/streams/writable.js');
jest.mock('../../src/streams/transform.js');

const rootFolder = path.dirname(path.dirname(__dirname));

beforeEach(() => {
    ReadableStream.mockClear();
    WritableStream.mockClear();
    TransformStream.mockClear();
})

test('Streamify', (done) => {
    expect.assertions(1);
    streamify(
        ['C1', 'C1', 'C1'],
        path.join(rootFolder, './input.txt'),
        path.join(rootFolder, './output.txt'),
    ).then(callback);

    function callback() {
        expect(ReadableStream).toHaveBeenCalledTimes(1);
        expect(WritableStream).toHaveBeenCalledTimes(1);
        expect(TransformStream).toHaveBeenCalledTimes(3);
        done();
    }
})