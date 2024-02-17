import type { Except } from 'type-fest';

export interface ApiResp<T = never> {
  data: T;
}

export interface IErrorResp {
  errorCode: string;
  errorMessage: string;
}

export interface IAccessToken {
  access_token: string;
  expire_in: number;
}

export interface ILoginRespose {
  data: IAccessToken;
}

export interface IUserProfile {
  data: IUser;
}

export interface IUserResp {
  data: IUser[];
}

export type UserStatus = 'active' | 'inactive' | 'pending' | 'blocked';

export interface IUser {
  id: number;
  username: string;
  company: string;
  job: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  avatar: string;
  role: string;
  status: UserStatus;
  access_token?: string;
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

export interface IChatContact {
  id: number;
  username: string;
  role: string;
  about: string;
  avatar: string;
  status: ChatStatus;
}

export interface IChatMessage {
  message: string;
  time: string;
  senderId: number;
  sender?: IUser;
  feedback: {
    isSent: boolean;
    isDelivered: boolean;
    isSeen: boolean;
  };
}

export interface IChat {
  id: number;
  userId: number;
  user?: IUser;
  unseenMsgs: number;
  messages: IChatMessage[];
}

// ℹ️ This is chat type received in response of user chat
export interface IChatOut {
  id: IChat['id'];
  unseenMsgs: IChat['unseenMsgs'];
  messages: IChatMessage[];
  lastMessage: IChatMessage;
}

export interface ChatContactWithChat extends IChatContact {
  chat: IChatOut;
}

export type ActiveChat = {
  chat?: IChat;
  contact: IChatContact;
} | null;

export type IChatInit = {
  chats: IChat[];
  contacts: IChatContact[];
  profileUser: IChatContact & {
    settings: {
      isTwoStepAuthVerificationEnabled: boolean;
      isNotificationsOn: boolean;
    };
  };
};
