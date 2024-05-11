import axios from 'axios';
import * as apiConfig from './api-config';

export default axios.create({
  withCredentials: true,
  baseURL: apiConfig.api,
});