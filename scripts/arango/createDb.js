const Database = require('arangojs').Database;

const options = {
  url: 'http://127.0.0.1:8529',
  name: 'tapperDb',
  username: 'root',
  password: 'myPassword',
};

db = new Database(options.url);

db.useBasicAuth(options.username, options.password);

return db.createDatabase(options.name)
  .then(() => console.log('dB created'))
  .catch((err) => console.log('dB not created'))