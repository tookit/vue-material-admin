import axios from 'axios';
import { ILoginRespose, IUser } from './type';

/**
 * Login
 */
export async function login(params: object): Promise<ILoginRespose> {
  const options = {
    method: 'POST',
    url: '/api/login',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return await axios.request(options);
}

export async function fetchUsers(params: object) {
  const options = {
    method: 'GET',
    url: '/api/user',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios.request<Array<IUser>>(options);
}
