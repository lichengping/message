import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/besa.css'
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
