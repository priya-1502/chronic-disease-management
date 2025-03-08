import axios from 'axios';
import qs from 'query-string';
import { get, merge } from "lodash-es"


const instance = axios.create({
  baseURL: 'https://2fcc-192-8-190-154.ngrok-free.app',
  paramsSerializer: qs.stringify,
});

instance.interceptors.request.use((config) => {
  const token = "token";
  const Authorization = `Bearer ${token}`;

  return merge({}, config, {
    headers: {
      Authorization,
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true'
    },
  });
});


instance.interceptors.response.use(
  (config) => {
    const status = get(config, ['data', 'status'], true);

    if (status === false) {
      return Promise.reject(config);
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location = '/auth/login';
    }
    return Promise.reject(new Error('401 Unauthorized Error'));
  },
);

const getInstance = () => instance;

export default getInstance;
