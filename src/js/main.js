// 项目的JS打包入口文件
// 1.1 导入 Vue
import Vue from 'vue'
// import Vue from '../../node_modules/vue/dist/vue'
// 4.1 导入自己的路由模块
import router from './router.js'


// 5.1 引入vue-resource包用来实现数据请求
import VueResource from 'vue-resource'
// 5.2 将 VueResource 注册到 Vue上
Vue.use(VueResource);
// 5.3 设置请求的baseURL
import config from './globalConfig.js'
Vue.http.options.root = config.baseUrl;


// 导入全局过滤器
import './globalFilters.js'


// 2.1 导入 Mint-UI 组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

// 3.1 导入 mui 的样式
import '../lib/mui/css/mui.css'
// 导入扩展图标
import '../lib/mui/css/icons-extra.css'

// 1.2 引入要展示的 app.vue 根组件
import App from '../components/App.vue'
// var App = {
//   template: '<h1>这是来捣乱的H1</h1>'
// }

// 1.3 创建VM的实例
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 4.5 挂载路由规则
});