import { MongoClient } from 'mongodb';

import { DatabaseConfig } from '../../../core/contracts';

export type Client = MongoClient;

export default (config: DatabaseConfig) => () => {
  const client = new MongoClient(config.url, { useNewUrlParser: true });

  return client;
};