const main = require('./src/main');

const EXIT_CODE = 1;

try {
    main();
} catch(err) {
    process.stderr.write(err.message);
    process.exit(EXIT_CODE);
}
