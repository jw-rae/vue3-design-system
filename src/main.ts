import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import { useTheme } from './composables/useTheme'

// Initialize theme before mounting app
const { initializeTheme } = useTheme()
initializeTheme()

createApp(App).mount('#app')
