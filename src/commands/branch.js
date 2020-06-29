const simpleGit = require('simple-git');
const git = simpleGit();

const branch = function(arguments) {
  console.log('BRANCH');
  console.log('arguments', arguments);
}
module.exports = branch;
