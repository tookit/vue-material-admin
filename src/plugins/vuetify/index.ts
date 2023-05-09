import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import theme from './theme';
import defaults from './defaults';

export default createVuetify({
  components,
  directives,
  defaults,
  theme
});
