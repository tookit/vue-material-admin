import axiosIns from '@/plugins/axios';
import { ICalendarEvent, IEvent } from './type';

export async function fetchEvents(params: object) {
  const options = {
    method: 'GET',
    url: '/api/event',
    params: params,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axiosIns.request<Array<ICalendarEvent>>(options);
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
  return axiosIns.request<IEvent>(options);
}
