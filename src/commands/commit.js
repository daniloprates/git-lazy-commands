const simpleGit = require('simple-git');
const git = simpleGit();

const { COMMIT_OPTIONS } = require('../constants/commit');

const commit = function(arguments) {
  console.log('COMMIT');
  const msg = arguments;
  console.log('msg', msg);
}


const clearRemoveList = (args) => {
  console.log('CLEAR_REMOVE_LIST');
  console.log('args', args);
}

const commitOptions = {
  [COMMIT_OPTIONS.CLEAR_REMOVE_LIST]: clearRemoveList
}

module.exports = {
  commit,
  commitOptions,
};
