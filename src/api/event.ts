import axios from 'axios';
import { ICalendarEvent } from './type';

export async function fetchEvents(params: object) {
  const options = {
    method: 'GET',
    url: '/api/event',
    params: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios.request<Array<ICalendarEvent>>(options);
}
