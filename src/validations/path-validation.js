const path = require('path');
const fs = require('fs');
const { FileNotExistsError, PermissionDeniedError } = require('../errors');

const rootFolder = path.dirname(path.dirname(__dirname));

function pathValidation (filename, config) {
    const fullPath = path.join(rootFolder, filename);

    if (fs.existsSync(fullPath)) {
        const constant = config === '-i' || config === '--input' ? fs.constants.R_OK : fs.constants.W_OK;

        try {
            fs.accessSync(fullPath, constant);
            return fullPath;
        } catch(err) {
            throw new PermissionDeniedError(`${config === '-i' || config === '--input' ? 'Read' : 'Write'} permission denied to the file ${fullPath}`);
        }
    } else {
        throw new FileNotExistsError(`File "${ filename }" does not exists.`);
    }
}

module.exports = pathValidation;

