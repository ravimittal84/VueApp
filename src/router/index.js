import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

// Lazy Loading
// const Category = () => System.import('@/components/Category');
// const Login = () => System.import('@/components/Login');
// const NotFound = () => System.import('@/components/NotFound');

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { name: "category", path: '/category/:id', component: Category },
    { path: '/login', component: Login },
    { path: '/', redirect: '/category' },
    { path: "*", component: NotFound }
  ]
})
