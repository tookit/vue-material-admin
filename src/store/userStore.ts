import { defineStore } from 'pinia';
import { fetchMe } from '@/api/user';

export interface IUserState {
  token: string;
  expire_in: number;
  username: string;
  avatar: string;
  permissions: [];
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
    },
    getAccessToken(state) {
      return state.token;
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
    async getProfile(): Promise<boolean> {
      try {
        const { data } = await fetchMe();
        console.log(data);
        // set user profile
        return Promise.resolve(true);
      } catch (e) {
        return Promise.reject(false);
      }
    }
  },
  // Data persistence destination
  persist: {
    key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
    storage: window.sessionStorage
  }
});
