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

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class FileNotExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileNotExistsError';
    }
}

module.exports = {
    DuplicationError,
    RequiredOptionError,
    ValidationError,
    FileNotExistsError,
}