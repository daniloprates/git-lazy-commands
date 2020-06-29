const os = require('os');
const path = require('path');

const DB_NAME_NAME = 'git-lazy-commands';
const DB_DIRECTORY_NAME = '.git-lazy-commands';
const DB_PATH = path.join(os.homedir(), DB_DIRECTORY_NAME, '/settings.json');
const DB_OPTIONS = {
  path: DB_PATH,
};
const COMMIT_BRANCH_DATA = {
  removeFromCommit: [],
  defaultCommitMessage: '',
}
const DB_DEFAULT_DATA = {
  branch: {
    prefix: '',
    sufix: '',
    gitFlow: false,
    gitFlowTag: false,
  },
  commit: {
    removeFromCommit: [],
    branches: {},
  }
};

module.exports = {
  DB_NAME_NAME,
  DB_DIRECTORY_NAME,
  DB_PATH,
  DB_OPTIONS,
  DB_DEFAULT_DATA
};
