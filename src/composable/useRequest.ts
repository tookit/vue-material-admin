import { createFetch } from '@vueuse/core';
import { useSnackbarStore } from '@/store';
const snackbarStore = useSnackbarStore();

const useMyFetch = createFetch({
  baseUrl: 'http://localhost:9527',
  combination: 'overwrite',
  options: {
    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    beforeFetch({ options }) {
      const myToken = window.localStorage.getItem('token');
      console.log(myToken, options.headers);
      // options.headers.Authorization = `Bearer ${myToken}`;

      return { options };
    },
    onFetchError(ctx) {
      // ctx.data can be null when 5xx response
      const { response } = ctx;
      const statusCode = response?.status;
      switch (statusCode) {
        case 400:
          snackbarStore.showMessage('Auth Failed');
          break;
        default:
          break;
      }

      return ctx;
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
});

export default useMyFetch;
