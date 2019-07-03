import { FutureInstance as Future } from 'fluture';

export type FactsScraper = () => Future<any, string[]>;

export type QuotesScraper = () => Future<any, string[]>;