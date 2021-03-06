const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://test:test123@cluster0-4xd31.mongodb.net/test?retryWrites=true&w=majority';
const macUrl = 'mongodb://192.168.99.100:27017';

const dbName = 'TriviaTapper';

//const client = new MongoClient(macUrl);
const client = new MongoClient(url);

client.connect((err) => {
  assert.equal(null, err);
  console.log(`Successfully created database: '${dbName}'`);

  const db = client.db(dbName);

  const factsCollection = db.collection('Facts');

  const userCollection = db.collection('users');

  const quotesCollection = db.collection('Quotes');

  client.close();
});