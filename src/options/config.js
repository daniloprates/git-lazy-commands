const simpleGit = require('simple-git');
const git = simpleGit();

const config = function(arguments) {
  console.log('CONFIG');
  console.log('arguments', arguments);
}
module.exports = config;
