import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

// Pinia Stores
import { useUserStore } from '@/store/user';
import { useSnackbarStore } from '@/store/snackbar';
import { useCalendarStore } from '@/store/event';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useUserStore, useCalendarStore, useSnackbarStore };
