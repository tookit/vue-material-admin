import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    color: 'error',
    message: '',
    showSnackbar: false
  }),
  actions: {
    showMessage(message, color = 'error') {
      this.color = color;
      this.message = message;
      this.showSnackbar = true;
    }
  }
});
