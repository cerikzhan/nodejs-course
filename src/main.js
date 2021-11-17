const Command = require('./command');
const streamify = require('./streams');

function main() {
    const program = new Command();

    program.parse(process.argv);

    const options = program.opts();

    streamify(options.config, options.input, options.output)
        .catch((err) => {
            throw new Error(err.message);
        });
}

module.exports = main;
