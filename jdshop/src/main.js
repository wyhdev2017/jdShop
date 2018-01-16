// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 引入babel-polyfill解决为Babel 默认只转换新的 JavaScript 语法，而不转换新的 API的问题,不需要引入babel-runtime
import 'babel-polyfill'
// 引入fastclick-》解决300ms延迟的问题
import fastclick from 'fastclick'
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)
// vuex
import store from './store'
/**使用muse-ui开始*/
import MuseUI from 'muse-ui'
//import './css/muse-ui.css';
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
/**使用muse-ui结束*/
// rem初始化
//import 'common/reset'
// 引入通用样式
//import 'common/styles/index.less'
import 'common/less/main.less'
// 头部进度条插件->用于切换页面时候
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 引入axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
//Axios:默认配置
Axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5a4d85d3e5f9cd651a7fbe77/test/';
//Axios:拦截器操作loadding
Axios.interceptors.request.use(function (config) {
  //显示图标
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
Axios.interceptors.response.use(function (config) {
  //隐藏图标
  Indicator.close();
  //获取到config中的data，进行加工
  return config;
});
// 导航钩子控制headerBarShow的显示隐藏
router.beforeEach((to, from, next) => {
  NProgress.start()
if (to.path === '/' || to.path === '/home') {
    store.state.headerBarShow = true
} else {
    store.state.headerBarShow = false
}
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
//Moment:引入moment
import Moment from 'moment';
//定义成全局组件或过滤器
Vue.filter('convertDate', function (value) {
  return Moment(value).format('YYYY-MM-DD');
});


//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '../static/error.png',
  loading: '../static/loading.gif',
  attempt: 1,
  listenEvents: ['scroll']
})
import './css/index.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:c=>c(App)
})
