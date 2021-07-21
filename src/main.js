import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, { ripple: true }).mount('#app');
