const {
  DB_NAME_NAME,
  DB_OPTIONS,
} = require('../constants/database');

const { Store } = require('data-store');

const db = function() {
  const store = new Store(DB_NAME_NAME, DB_OPTIONS);
  store.set('log.lastAccess', new Date().getTime());
}
module.exports = db();



