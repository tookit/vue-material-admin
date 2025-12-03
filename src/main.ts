import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import i18n from '@/plugins/i18n';
import msw from '@/plugins/msw';
import store from './store';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';

// Styles
import '@/scss/style.scss';
import 'vue3-perfect-scrollbar/style.css';

const app = createApp(App);

// Register plugins
app.use(store);
app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(PerfectScrollbarPlugin);
app.use(VueApexCharts);
app.use(msw);

app.mount('#app');
