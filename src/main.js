import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 相關函式庫
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
//  自定義function
import ooxx from '../src/ooxxFunction.js'
import logger from '../src/logger.js'
Vue.prototype.ooxx = ooxx
Vue.prototype.logger = logger
//  firebase 設定
const firebaseConfig = {
  apiKey: 'AIzaSyCgW5dRMaPyjm_f2Q6_fo3UgLC7V2m-Ylg',
  authDomain: 'ooxx-73434.firebaseapp.com',
  databaseURL: 'https://ooxx-73434.firebaseio.com',
  projectId: 'ooxx-73434',
  storageBucket: '',
  messagingSenderId: '559671550450',
  appId: '1:559671550450:web:e1b9a6f3459c2dbb'
}
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
