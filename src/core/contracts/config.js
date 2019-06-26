// @flow
export type SystemConfig = {
  environment: string,
};

export type ServerConfig = {|
  port: number,
|};

export type ScraperConfig = {
  url: String,
};

export type DatabaseConfig = {
  url: string,
  dbName: string,
  username: string,
  password: string,
  graphName: string,
};