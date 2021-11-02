const { RequiredOptionError, DuplicationError } = require('./errors');

class Command {
    constructor() {
        this.options = [
            {
                key: 'config',
                keys: ['-c', '--config'],
                required: true,
                value: '',
            },
            {
                key: 'input',
                keys: ['-i', '--input'],
                required: false,
                value: '',
            },
            {
                key: 'output',
                keys: ['-o', '--output'],
                required: false,
                value: '',
            }
        ];
    }

    parse(argv) {
        const operations = argv.slice(2);
        for (let i = 0; i < this.options.length; i++) {
            const checkParams = operations.filter((o) => {
                return this.options[i].keys.includes(o);
            });

            if (checkParams.length > 1) {
                throw new DuplicationError(`${checkParams} options duplicated`);
            } else if (checkParams.length === 1) {
                const index = operations.findIndex((op) => op === checkParams[0]) + 1;
                this.options[i].value = operations[index];
            }
        }

        if (!this.options[0].value) {
            throw new RequiredOptionError('-c, --config required option');
        }
    }

    opts() {
        const obj = {};
        this.options
            .filter(opt => !!opt.value)
            .forEach(opt => {
                obj[opt.key] = opt.value;
            });
        return obj;
    }
}

module.exports = Command;