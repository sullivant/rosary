import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Icon imports
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { OiSun, OiMoon } from 'oh-vue-icons/icons'

addIcons(OiSun, OiMoon)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')

//createApp(App).mount('#app')
