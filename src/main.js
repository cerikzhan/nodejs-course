const Command = require('./command');

function main() {
    const program = new Command();

    try {
        program.parse(process.argv);
    } catch(err) {
        process.stderr.write(err.message);
        process.exit(1);
    }

    const options = program.opts();

    console.log(options);
}

module.exports = main;
