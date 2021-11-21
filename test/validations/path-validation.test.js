const { FileNotExistsError, PermissionDeniedError } = require("../../src/errors");
const pathValidation = require('../../src/validations/path-validation');

test('Path validation error (output.json file does not exists)', () => {
    expect(() => {
        pathValidation('./input.json', '-i');
    }).toThrow(FileNotExistsError);
});

test('Permission denied error (output_only_read.txt file for only read)', () => {
    expect(() => {
        pathValidation('./output_only_read.txt', '-o');
    }).toThrow(PermissionDeniedError);
});