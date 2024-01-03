import { ILoginRespose, IUser } from './type';
import useMyFetch from '@/composable/useRequest';

export async function login(params: object) {
  return await useMyFetch<ILoginRespose>('/api/auth/login').post(params).json();
}

export async function fetchMe() {
  return await useMyFetch<IUser>('/api/me').get().json;
}
