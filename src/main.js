import './styles/index.scss'
// 导入权限控制模块
import './permission'
import i18n from '@/i18n'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

import installIcons from '@/icons'

import installFilter from '@/filters'

const app = createApp(App)

installFilter(app)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
