const { Readable } = require('stream');
const WritableStream = require('./writable');

let count = 1;

class ReadableStream extends Readable {
    _read() {
        process.stdin.on('data', (data) => {
            this.push(data);
        })
    }
}

const myReadable = new ReadableStream();

const myWritable = new WritableStream();

myReadable.pipe(myWritable);

// myReadable.on('data', (data) => {
//     console.log('readed data', data);
// })
//
// myReadable.on('end', () => {
//     console.log('read ended');
// })