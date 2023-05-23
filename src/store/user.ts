import { defineStore } from 'pinia';
import { login } from '@/api/user';

export interface IUserState {
  token: string;
  expire_in: number;
  username: string;
  avatar: string;
  permissions: any[];
}
/** User Store */
export const useUserStore = defineStore('user', {
  // Default Config State
  state: () => ({
    token: '',
    expire_in: 0,
    username: '',
    avatar: '',
    permissions: [],
    roles: [
      { title: 'Admin', value: 'admin' },
      { title: 'Author', value: 'author' },
      { title: 'Editor', value: 'editor' },
      { title: 'Maintainer', value: 'maintainer' },
      { title: 'Subscriber', value: 'subscriber' }
    ],
    statusOptions: [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' }
    ]
  }),
  // Getters
  getters: {
    getRoles(state) {
      return state.roles;
    },
    getUsername(state) {
      return state.username;
    },
    getStatusOptions(state) {
      return state.statusOptions;
    }
  },
  // Actions
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUsername(username: string) {
      this.username = username;
    },
    async login(params) {
      try {
        const response = await login(params);
        const { data } = response;
        const { access_token } = data;
        this.setUsername(params.username);
        this.setToken(access_token);
        return Promise.resolve(response);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  },
  // Data persistence destination
  persist: {
    key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
    storage: window.sessionStorage
  }
});
