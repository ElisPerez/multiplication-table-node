const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of multiplication table',
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: 10,
    describe: 'This is the number until where the multiplication table will be printed',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Prints the multiplication table in a console',
  })
  .check((argv, options) => {
    if ( isNaN(argv.b)) {
      throw 'the base must be a number';
    }
    return true;
  })
  .argv;

  module.exports = argv;