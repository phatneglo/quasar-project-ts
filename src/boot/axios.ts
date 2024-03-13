import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { Cookies } from 'quasar';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get(process.env.COOKIES_TOKEN_NAME || 'app_token');
  if (token) {
    // Set Content-Type to a CORS-safelisted type
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    // Include Authorization header if necessary
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
