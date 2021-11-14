const { ValidationError } = require('../errors');
const VALID_CODES = ['A', 'C0', 'C1', 'R0', 'R1'];

function configValidation(str) {
    const arr = str.split('-');

    for(let i = 0; i < arr.length; i++) {
        if (!VALID_CODES.includes(arr[i])) throw new ValidationError(`"${arr[i]}" not valid ciphering code`);
    }

    return arr;
}

module.exports = configValidation;