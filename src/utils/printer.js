const p = require('chalk');
const log = console.log;

const chalk = require('chalk');


const printer = function(arguments) {
  console.log(chalk.blue(...arguments))
}
module.exports = printer;



// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

