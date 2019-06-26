// @flow
export type Logger = {
  info: (message: string, data?: any) => void,
  error: (message: string, data?: any) => void,
  warn: (message: string, data?: any) => void,
};