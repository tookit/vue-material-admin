import { IAccessToken, IUser } from './type';
import axiosIns from '@/plugins/axios';

import useMyFetch from '@/composable/useRequest';

export async function login(params: object) {
  const options = {
    method: 'POST',
    url: `/api/auth/login`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<IAccessToken>(options);
}

export async function fetchMe() {
  return await useMyFetch('/api/me').get().json<IUser>();
}

export async function fetchUser(params) {
  const options = {
    method: 'GET',
    url: `/api/user`,
    params: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<Array<IUser>>(options);
}
