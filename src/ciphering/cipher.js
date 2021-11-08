class Cipher {
    constructor() {
        this.upper_letters_start = 65;
        this.lower_letters_start = 97;
        this.alphabet_length = 26;
    }

    parse(str) {
        const result = [];

        for (let i = 0; i < str.length; i++) {
            let letter;
            const code = str.charCodeAt(i);

            if (code >= this.upper_letters_start && code < (this.upper_letters_start + this.alphabet_length)) {
                letter = this._upperReformat(code);
            } else if (code >= this.lower_letters_start && code < (this.lower_letters_start + this.alphabet_length)) {
                letter = this._lowerReformat(code);
            } else {
                letter = str[i];
            }

            result.push(letter);
        }

        return result.join('');
    }

    _upperReformat(code) {
        throw new Error('Method "_upperReformat()" must be implemented.');
    }

    _lowerReformat(code) {
        throw new Error('Method "_lowerReformat()" must be implemented.');
    }
}

module.exports = Cipher;