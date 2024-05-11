import { Map } from 'immutable';
import * as apiConfig from '../app/api/api-config';

let configuration = Map();

export const domain = "https://time.uro-solution.info";

export const ApiServerKey = {
  APP_API_ROOT: 'API_ROOT',
};

export const TokenPrefix = 'Bearer';
export const APIUrlDefault = apiConfig.api;

export function setConfiguration(name, value) {
  configuration = configuration.set(name, value);
}

export function getConfiguration(key) {
  if (!configuration.has(key)) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration.get(key);
}