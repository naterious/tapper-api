const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/Business';
const macUrl = 'mongodb://192.168.99.100:27017';

const dbName = 'TriviaTapper';

const client = new MongoClient(url);

client.connect(function(err, db) {
  if (err) {
    throw err;
  }


  const dbs = client.db(dbName);

  dbs.dropDatabase(function(err, result){
    if (err) {
      throw err;
    }
    console.log(`Dropped database: '${dbName}'`);
    db.close();
  });
});