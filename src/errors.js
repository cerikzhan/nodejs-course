class DuplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DuplicationError';
    }
}

class RequiredOptionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RequiredOptionError';
    }
}

module.exports = {
    DuplicationError,
    RequiredOptionError,
}