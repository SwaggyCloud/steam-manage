import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Edit from '../views/Edit.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/main'},
  {path: '/main', component: Main},
  {path: '/editGame', component: Edit}
]

const router = new VueRouter({
  routes
})

export default router
