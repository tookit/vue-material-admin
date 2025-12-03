import { createVuetify } from 'vuetify';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import i18n from '@/plugins/i18n';
import { useI18n } from 'vue-i18n';
import { VuetifyDateAdapter } from 'vuetify/date/adapters/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import theme from './theme';
import defaults from './defaults';

export default createVuetify({
  defaults,
  theme,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  },
  date: {
    adapter: VuetifyDateAdapter
  }
});
