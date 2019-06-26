// @flow
import type { $Application } from 'express';
import cg from './cg';

const main: () => $Application = () => {
  const {
    startServer,
  } = cg();

  return startServer();
};

main();