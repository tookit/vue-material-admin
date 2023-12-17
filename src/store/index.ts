import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

// Pinia Stores
import { useUserStore } from '@/store/userStore';
import { useSnackbarStore } from '@/store/snackbarStore';
import { useCalendarStore } from '@/store/eventStore';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useUserStore, useCalendarStore, useSnackbarStore };
