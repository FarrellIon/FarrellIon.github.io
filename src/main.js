import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import axios from 'axios'

var baseUrl = window.location.origin
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://staging-api.kitaserbadigital.com/api/' : 'http://localhost:8000/api'

const app = createApp(App).use(router).mount('#app')