import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Message from 'primevue/message';
import ToastService from 'primevue/toastservice';

//in main.js
import 'primevue/resources/themes/lara-light-green/theme.css'


//createApp(App).mount('#app')
const app = createApp(App);
app.use(PrimeVue)
app.use(ToastService);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Message', Message);
app.mount('#app');
