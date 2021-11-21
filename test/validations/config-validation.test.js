const {ValidationError} = require("../../src/errors");
const configValidation = require('../../src/validations/config-validation');

test('Validate and return single config', () => {
    const configList = configValidation('A');
    expect(configList).toEqual(['A']);
});

test('Validate and return list of configs', () => {
    const configList = configValidation('C1-R1-A')
    expect(configList).toEqual(['C1', 'R1', 'A']);
})

test('Validation error (C1-C1-A-B1 wrong config argument)', () => {
    expect(() => {
        configValidation('C1-C1-A-B1');
    }).toThrow(ValidationError);
});