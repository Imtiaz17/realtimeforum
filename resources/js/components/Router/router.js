import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from '../Login/Login'
import signup from '../Login/signup'
import Forum from '../Forum/Forum'
import Ask from '../Forum/ask.vue'
import Read from '../Forum/Read.vue'
import logout from '../auth/logout.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: logout },
    { path: '/signup', component: signup },
    { path: '/forum', component: Forum,name:'Forum' },
    { path: '/ask', component: Ask},
    { path: '/question/:slug', component: Read, name:'Read' },
  ]


  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode :'history'
  })
  export default router