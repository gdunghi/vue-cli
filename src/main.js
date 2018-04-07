import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Todo from './components/Todo'
import Nothing from './components/Nothing'
import store from './store.js'

Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  { path: '/todo', component: Todo },
  { path: '/todo', component: Nothing }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
