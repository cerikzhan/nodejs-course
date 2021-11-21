jest.mock('../src/command.js');
jest.mock('../src/streams/index.js');
const Command = require('../src/command');
const streamify = require('../src/streams');
const main = require('../src/main');

beforeEach(() => {
    Command.mockClear();
    streamify.mockClear();

    const parseMock = jest.fn();
    const optsMock = jest.fn();
    optsMock.mockReturnValue({
        config: 'C1',
        input: null,
        output: null,
    });

    Command.mockImplementation(() => {
        return {
            parse: parseMock,
            opts: optsMock,
        };
    });
});

test('Streamify function calls', () => {
    streamify.mockImplementation((a, b, c) => {
        return Promise.resolve();
    });

    main();

    expect(streamify).toHaveBeenCalledTimes(1);
    expect(streamify).toHaveBeenCalledWith('C1', null, null);
});

test('Command class implementation', () => {
    main();
    
    expect(Command).toHaveBeenCalledTimes(1);
});
