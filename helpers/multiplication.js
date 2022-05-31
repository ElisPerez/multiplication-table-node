const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, until = 10) => {
  try {
    let exit = '';
    let printConsole = '';

    for (let i = 1; i <= until; i++) {
      exit += `${base} x ${i} = ${base * i}\n`;
      printConsole += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
    }
    if (list) {
      console.log('==============='.green);
      console.log('   Table of:'.green, colors.red(base));
      console.log('==============='.green);

      console.log(printConsole);
    }

    fs.writeFileSync(`./exit/table-${base}.txt`, exit);

    return `table-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
