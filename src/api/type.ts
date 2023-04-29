export interface AccessToken {
  access_token: string;
  expire_in: number;
}

export interface LoginRespose {
  data: AccessToken;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  role: string;
  status: string;
}

export interface UserResponse {
  data: User[];
}
