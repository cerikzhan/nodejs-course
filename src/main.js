const Command = require('./command');
const streamify = require('./streams');

const EXIT_CODE = 1;

async function main() {
    const program = new Command();

    try {
        program.parse(process.argv);
    } catch(err) {
        process.stderr.write(err.message);
        process.exit(EXIT_CODE);
    }

    const options = program.opts();
    console.log(options);

    await streamify(options.config, options.input, options.output);
}

module.exports = main;
