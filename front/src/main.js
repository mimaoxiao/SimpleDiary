import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueAnime from 'vue-animejs';
Vue.use(VueAnime)

new Vue({
  render: h => h(App),
}).$mount('#app')
