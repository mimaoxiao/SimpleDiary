import Vue from 'vue'
import App from './App.vue'

import { Dialog } from 'element-ui';
Vue.use(Dialog);

import Link from './link';
Vue.prototype.$link=Link;

Vue.config.productionTip = false

import VueAnime from 'vue-animejs';
Vue.use(VueAnime);

new Vue({
  render: h => h(App),
}).$mount('#app')
