// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import  axios from 'axios'

//配置全局的axios
axios.defaults.baseURL = 'https://wd5847396083nhawzb.wilddogio.com'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

/*自定义指令*/
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8);
  }
})

/*自定义过滤器*/
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase().slice(0,30)+"...";

})

Vue.filter("snippet",function(value){
  return value.slice(0,100) + "...";
})

/*创建路由*/
const router = new VueRouter({

  routes: Routes,
  mode:"history"
})


/* 导航守卫 :利用该特性，可以使用下面的代码端解决未匹配路由的问题*/
router.beforeEach((to, from, next) => {
  // ...
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.path? next({ path:from.path}) : next('/');   //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
