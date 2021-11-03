const path = require('path');
const fs = require('fs');
const { FileNotExistsError } = require('../errors');

const rootFolder = path.dirname(path.dirname(__dirname));

function pathValidation (filename) {
    const fullPath = path.join(rootFolder, filename);

    if (fs.existsSync(fullPath)) {
        return fullPath;
    } else {
        throw new FileNotExistsError(`file "${ filename }" does not exists.`);
    }
}

module.exports = pathValidation;

