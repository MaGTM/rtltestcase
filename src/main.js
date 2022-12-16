import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/index'

let app = createApp(App)

components.forEach(item => {
    app.component('close-icon', item)
})


app.mount('#app')
