import axios from 'axios';
import useMyFetch from '@/composable/useRequest';
import { ICalendarEvent, IEvent } from './type';

export async function getEevents() {
  return await useMyFetch('/api/event').get().json();
}

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

export async function updateEvent(event: IEvent) {
  const options = {
    method: 'PUT',
    url: `/api/event/${event.id}`,
    data: event,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios.request<IEvent>(options);
}
