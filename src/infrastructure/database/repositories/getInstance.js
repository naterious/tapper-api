// @flow
// import { Database } from 'arangojs';

// import { DatabaseConfig } from '../../../core/contracts';

// export default (config: DatabaseConfig) => () => {
//   const db = new Database(config.url);
//   db.useBasicAuth(config.username, config.password);
//   db.useDatabase(config.dbName);

//   return db;
// };

import { MongoClient } from 'mongodb';

export default (config) => () => {
  const client = new MongoClient(config.url);

  return client;
};