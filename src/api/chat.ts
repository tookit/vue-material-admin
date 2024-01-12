import axiosIns from '@/plugins/axios';
import { IChatInit } from './type';

/**
 * Init Chat
 */
export async function initChat() {
  const options = {
    method: 'get',
    url: '/api/chat',
    delay: 2000,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return await axiosIns.request<IChatInit>(options);
}
