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

export type ChatStatus = 'online' | 'offline' | 'busy' | 'away';

export interface ChatContact {
  id: number;
  fullName: string;
  role: string;
  about: string;
  avatar: string;
  status: ChatStatus;
}

export interface ChatMessage {
  message: string;
  time: string;
  senderId: number;
  feedback: {
    isSent: boolean;
    isDelivered: boolean;
    isSeen: boolean;
  };
}

export interface Chat {
  id: number;
  userId: number;
  unseenMsgs: number;
  messages: ChatMessage[];
}

// ℹ️ This is chat type received in response of user chat
export interface ChatOut {
  id: Chat['id'];
  unseenMsgs: Chat['unseenMsgs'];
  messages: ChatMessage[];
  lastMessage: ChatMessage;
}

export interface ChatContactWithChat extends ChatContact {
  chat: ChatOut;
}

export type ActiveChat = {
  chat?: Chat;
  contact: ChatContact;
} | null;
