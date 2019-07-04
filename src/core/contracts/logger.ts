/* eslint-disable import/prefer-default-export */
export type Logger = {
  info: (message: string, data?: any) => void,
  error: (message: string, data?: any) => void,
  warn: (message: string, data?: any) => void,
};