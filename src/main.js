import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  provide: createProvider().provide(),
  render: h => h(App)
}).$mount('#app')
