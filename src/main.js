import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/lara-light-green/theme.css'
const app = createApp(App);
app.use(PrimeVue)
app.use(ToastService);
app.mount('#app');
