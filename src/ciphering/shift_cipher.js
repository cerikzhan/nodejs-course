const Cipher = require('./cipher');

class Shift extends Cipher {
    constructor(shift) {
        super();
        this.shift = shift;
    }

    _upperReformat(code) {
        return String.fromCharCode(((code - this.upper_letters_start + this.shift) % this.alphabet_length) + this.upper_letters_start);
    }

    _lowerReformat(code) {
        return String.fromCharCode(((code - this.lower_letters_start + this.shift) % this.alphabet_length) + this.lower_letters_start);
    }
}

module.exports = Shift;