import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { overlayObserverDirective } from './overlayObserverDirective';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.directive('overlay-observer', overlayObserverDirective);
app.mount('#app');
