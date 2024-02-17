import axios from 'axios';
import { router } from '@/router';
import { useSnackbarStore } from '@/store';

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  // Retrieve token from sessionStorage
  const vma = sessionStorage.getItem('vma');
  // If token is found
  if (vma) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};
    const { token } = JSON.parse(vma);
    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  // Return modified config
  return config;
});

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response.status;
    const snackbarStore = useSnackbarStore();
    switch (statusCode) {
      case 401:
        // Remove "accessToken" from sessionStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userAbilities');
        // If 401 response returned from api
        router.push('/auth/login');
        break;
      case 400:
        snackbarStore.showMessage('Auth Failed');
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosIns;
