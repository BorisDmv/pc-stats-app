import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import PCMonitor from './components/PCMonitor.vue'
import PCStats from './components/PCStats'
import About from './components/About.vue'

const routes = [
    { path: '/', component: PCMonitor },
    { path: '/pcstats', component: PCStats },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

    


const app = createApp(App);

app.use(router);
app.mount('#app');