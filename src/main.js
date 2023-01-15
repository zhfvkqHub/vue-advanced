import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

const app = createApp(App)
app.use(store).use(router)
app.mount('#app')


