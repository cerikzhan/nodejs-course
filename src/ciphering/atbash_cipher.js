const Cipher = require('./cipher');

class Atbash extends Cipher {
    _upperReformat(code) {
        return String.fromCharCode(this.upper_letters_start + this.alphabet_length - (code - this.upper_letters_start + 1));
    }

    _lowerReformat(code) {
        return String.fromCharCode(this.lower_letters_start + this.alphabet_length - (code - this.lower_letters_start + 1));
    }
}

module.exports = Atbash;