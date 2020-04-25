const Database = require('arangojs').Database;

const options = {
  url: 'http://127.0.0.1:8529',
  dbName: 'tapperDb',
  username: 'root',
  password: 'myPassword',
  name: 'facts',
};

db = new Database(options.url);

db.useBasicAuth(options.username, options.password);

db.useDatabase(options.dbName);

const graph = db.graph(options.name);

return graph.create({
  edgeDefinitions: [
    {
      collection: 'seen',
      from: ['user'],
      to: ['fact']
    },
    {
      collection: 'liked',
      from: ['user'],
      to: ['fact']
    }
  ]
})
  .then(() => console.log('Graph created'))
  .catch((err) => console.log('Graph not created', err))