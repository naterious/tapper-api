import express, { Application } from 'express';

export type ExpressServer = () => Application;

export default () => express();
