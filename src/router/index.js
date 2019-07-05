import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    }
  ]
})
