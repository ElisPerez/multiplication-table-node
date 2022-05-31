const { createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');

require('colors');

console.clear();

createFile(argv.b, argv.l, argv.u)
  .then(fileName => console.log(fileName.rainbow, 'created'))
  .catch(error => console.error(error));
