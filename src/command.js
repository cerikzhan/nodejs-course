const { RequiredOptionError, DuplicationError } = require('./errors');
const configValidation = require('./validations/config-validation');
const pathValidation = require('./validations/path-validation');

class Command {
    constructor() {
        this.options = {
            config: '',
            input: '',
            output: '',
        }
    }

    parse(argv) {
        const operations = argv.slice(2);
        for (let i = 0; i < operations.length; i += 2) {
            const valueIndex = i + 1;
            switch(operations[i]) {
                case '-c':
                case '--config':
                    if (this.options.config) throw new DuplicationError('-c, --config options duplicated');
                    this.options.config = configValidation(operations[valueIndex]);
                    break;
                case '-i':
                case '--input':
                    if (this.options.input) throw new DuplicationError('-i, --input options duplicated');
                    this.options.input = pathValidation(operations[valueIndex]);
                    break;
                case '-o':
                case '--output':
                    if (this.options.output) throw new DuplicationError('-o, --output options duplicated');
                    this.options.output = pathValidation(operations[valueIndex]);
                    break;
            }
        }

        if (!this.options.config) throw new RequiredOptionError('-c, --config required option.');
    }

    opts() {
        return this.options;
    }
}

module.exports = Command;