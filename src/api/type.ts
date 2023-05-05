import type { Except } from 'type-fest';

export interface IAccessToken {
  access_token: string;
  expire_in: number;
}

export interface ILoginRespose {
  data: IAccessToken;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  avatar: string;
  role: string;
  status: string;
}

export interface ICalendarEvent {
  id: string;
  url: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendedProps: Record<string, any>;
}

export interface IEvent extends ICalendarEvent {
  extendedProps: {
    calendar?: string;
    location: string;
    description: string;
    guests: string[];
  };
}
export type INewEvent = Except<IEvent, 'id'>;
