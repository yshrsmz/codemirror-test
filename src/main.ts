import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { basicSetup } from 'codemirror'
import VueCodemirror from 'vue-codemirror'

const vueApp = createApp(App)

vueApp.use(VueCodemirror, {
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  extensions: [basicSetup]
})

vueApp.mount('#app')
