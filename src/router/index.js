import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/autentication/SignUp'
import Login from '@/components/autentication/Login'
import Home from '@/components/landingPage/Home'
import About from '@/components/landingPage/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/' ,
      name: 'Home',
      component: Home,
      // props: true,
      // beforeEnter: (to, from, next) => {
      //   if(to.params.name) {
      //     next();
      //   } else {
      //     next({name: 'Login'})
      //   }
      // }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    }
  ]
})
