// @flow
import express, { type $Application } from 'express';

export type ExpressServer = () => $Application;

export default () => express();
