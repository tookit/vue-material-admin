// import { ILoginRespose, IUser } from './type';
import useMyFetch from '@/composable/useRequest';

/**
 * Login
 */
export async function login(params: object) {
  return await useMyFetch('/api/auth/login').post(params).json();
}

export async function fetchMe() {
  return await useMyFetch('/api/me').get().json();
}
