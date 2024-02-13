import { defineStore } from 'pinia';
import { initChat } from '@/api/chat';
import { IChat, IUser } from '@/api/type';

export const useChatStore = defineStore('chat', {
  // ℹ️ arrow function recommended for full type inference
  state: () => ({
    chats: [] as IChat[],
    chatContacts: [] as IUser[],
    profile: null
  }),
  actions: {
    setChats(chats) {
      this.chats = chats;
    },
    setChatContacts(contacts) {
      this.chatContacts = contacts;
    },
    setProfile(profile) {
      this.profile = profile;
    },
    async initChat() {
      try {
        const response = await initChat();
        const { data } = response;
        const { chats, contacts } = data;
        this.setChats(chats);
        this.setChatContacts(contacts);
        this.setProfile(this.profile);
        return Promise.resolve(response);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
});
