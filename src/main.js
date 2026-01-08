import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/style.css'

// Importe do CSS Responsivel
import './assets/css/Responsividade/Navbar-Resp.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
