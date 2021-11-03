class Encryption {
    constructor(config) {
        this.config = config;
    }

    parse() {
        return this.config.split('-');
    }


}

module.exports = Encryption;