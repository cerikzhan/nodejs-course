const { ValidationError } = require('../errors');
const AVAILABLE_CONFIGS = ['A', 'C', 'R'];
const AVAILABLE_CODES = ['0', '1'];

function configValidation(str) {
    const arr = str.split('-');

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            throw new ValidationError('config length more than two');
        }

        if (!AVAILABLE_CONFIGS.includes(arr[i][0])) {
            throw new ValidationError(`"${arr[i][0]}" unknown encrypting tag. Should be A, C or R"`);
        }

        if (arr[i][1] && !AVAILABLE_CODES.includes(arr[i][1])) {
            throw new ValidationError(`"${arr[i][1]}" unknown encrypting code. Should be 0 or 1`);
        }
    }

    return true;
}

module.exports = configValidation;