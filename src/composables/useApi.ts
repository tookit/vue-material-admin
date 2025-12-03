import { ref, type Ref } from 'vue';
import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';

export interface UseApiOptions<T> {
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useApi<T = any>(
  url: string | (() => string),
  options: AxiosRequestConfig = {},
  apiOptions: UseApiOptions<T> = {}
) {
  const data: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const loading = ref(false);

  const execute = async (config?: AxiosRequestConfig) => {
    loading.value = true;
    error.value = null;

    try {
      const requestUrl = typeof url === 'function' ? url() : url;
      const response = await axios({
        url: requestUrl,
        ...options,
        ...config
      });

      data.value = response.data;
      apiOptions.onSuccess?.(response.data);
      return response.data;
    } catch (err) {
      const apiError = err as AxiosError;
      error.value = apiError as Error;
      apiOptions.onError?.(apiError as Error);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  if (apiOptions.immediate) {
    execute();
  }

  return {
    data,
    error,
    loading,
    execute
  };
}

export function useGet<T = any>(url: string | (() => string), options: UseApiOptions<T> = {}) {
  return useApi<T>(url, { method: 'GET' }, options);
}

export function usePost<T = any>(url: string | (() => string), options: UseApiOptions<T> = {}) {
  return useApi<T>(url, { method: 'POST' }, options);
}

export function usePut<T = any>(url: string | (() => string), options: UseApiOptions<T> = {}) {
  return useApi<T>(url, { method: 'PUT' }, options);
}

export function useDelete<T = any>(url: string | (() => string), options: UseApiOptions<T> = {}) {
  return useApi<T>(url, { method: 'DELETE' }, options);
}
