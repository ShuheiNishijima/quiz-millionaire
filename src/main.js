import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/styles/style.scss'

createApp(App).use(VueAxios, axios).use(router).mount('#app')
