import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
<<<<<<< HEAD
      requiresAuth: true
=======
      meta: {
        requiresAuth: true
      }
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
    }
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      //user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
<<<<<<< HEAD
      next({ name: 'Login'})
=======
      next({name: 'Login'})
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
    }
  } else {
    next()
  }
})

export default router