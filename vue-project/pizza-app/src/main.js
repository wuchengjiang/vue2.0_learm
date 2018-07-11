import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'



Vue.use(VueRouter)

//创建路由


//实例化路由
const router = new VueRouter({
  routes,
  mode:'history'
})

// 全局守卫
// to:指你要进入哪个路由里
//from:指你要从哪个路由离开
//next:指对应的函数,进入哪个页面

/*
router.beforeEach((to,from,next) =>{
   next();

  //当没有登录的时候选让用户登录才能看到
   if(to.path == '/login' || to.path =='/register'){
     next();
   }else{
     next('/login')
   }


})
*/


// 后置钩子
/*
router.afterEach((to,from) =>{
  alert('after each')
})
*/








new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
