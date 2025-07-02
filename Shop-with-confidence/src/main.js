import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// require('./assets/css/base.css')