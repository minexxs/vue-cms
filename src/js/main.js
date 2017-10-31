// 项目的JS打包入口文件
//  导入 Vue
import Vue from 'vue'
// import Vue from '../../node_modules/vue/dist/vue'
// 导入自己的路由模块
import router from './router.js'
//. 在项目中引入自己的 store 模块

//  引入vue-resource包用来实现数据请求
import VueResource from 'vue-resource'
// 将 VueResource 注册到 Vue上
Vue.use(VueResource);

import config from './globalConfig.js'
Vue.http.options.root = config.baseUrl;


// 导入全局过滤器
import './globalFilters.js'


//  导入 Mint-UI 组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

// 导入 mui 的样式
import '../lib/mui/css/mui.css'
// 导入扩展图标
import '../lib/mui/css/icons-extra.css'

//  引入要展示的 app.vue 根组件
import App from '../components/App.vue'
// var App = {
//   template: '<h1>这是来捣乱的H1</h1>'
// }

//  创建VM的实例
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router //  挂载路由规则

});