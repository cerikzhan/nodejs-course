const Command = require('../src/command');
const {
    RequiredOptionError,
    DuplicationError,
    FileNotExistsError,
    ValidationError,
    PermissionDeniedError,
} = require('../src/errors');

describe('Command argv tests', () => {
    let program;

    beforeEach(() => {
        program = new Command();
    });

    afterEach(() => {
        program = null;
    })

    test('Should be output equal { config: ["C1", "R0", "A"], input: null, output: null }', () => {
        program.parse(['process', 'path', '-c', 'C1-R0-A']);
        const options = program.opts();

        expect(options).toMatchObject({ config: ['C1', 'R0', 'A'], input: null, output: null });
    });

    test('Should be input not null', () => {
        program.parse(['process', 'path', '--config', 'C1', '-i', './input.txt']);
        const options = program.opts();

        expect(options.input).not.toBeNull();
        expect(options.output).toBeNull();
    });

    test('Should be output not null', () => {
        program.parse(['process', 'path', '--config', 'C1', '--output', './output.txt']);
        const options = program.opts();

        expect(options.output).not.toBeNull();
        expect(options.input).toBeNull();
    });

    test('Should be contains input.txt and output.txt', () => {
        program.parse(['process', 'path', '-c', 'C1', '-i', './input.txt', '-o', './output.txt']);
        const options = program.opts();

        expect(options.input).toMatch(/input.txt$/);
        expect(options.output).toMatch(/output.txt$/);
    });
});

describe('Command errors test', () => {
    let program;

    beforeEach(() => {
        program = new Command();
    });

    afterEach(() => {
        program = null;
    });

    test('Validation error (C1-C1-A-B1 wrong config argument)', () => {
        expect(() => {
            program.parse(['process', 'path', '--config', 'C1-C1-A-B1']);
        }).toThrow(ValidationError);
    });

    test('Duplication error (--config, -c)', () => {
        expect(() => {
            program.parse(['process', 'path', '--config', 'C1-C1', '-c', 'C0-C0']);
        }).toThrow(DuplicationError);
    });

    test('Required option error (config not send)', () => {
        expect(() => {
            program.parse(['process', 'path', '-i', './input.txt', '-o', './output.txt']);
        }).toThrow(RequiredOptionError);
    });

    test('Path validation error (output.json file does not exists)', () => {
        expect(() => {
            program.parse(['process', 'path', '-c', 'C1-C1', '-o', './output.json']);
        }).toThrow(FileNotExistsError);
    });

    test('Permission denied error (output_only_read.txt file for only read)', () => {
        expect(() => {
            program.parse(['process', 'path', '-c', 'C1-C1', '-o', './output_only_read.txt']);
        }).toThrow(PermissionDeniedError);
    });

    test('Validation error key value does not exists (-d something)', () => {
        expect(() => {
            program.parse(['process', 'path', '--config', 'C1-C1-A-B1', '-d', 'something']);
        }).toThrow(ValidationError);
    });
});

