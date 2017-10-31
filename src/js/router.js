import Vue from 'vue'


// 引入 组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContaner from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
  // 推文
import NewsList from '../components/news/NewsList.vue'
import NewsList1 from '../components/news/NewsList1.vue'
import NewsList2 from '../components/news/NewsList2.vue'
import NewsList3 from '../components/news/NewsList3.vue'
import NewsList4 from '../components/news/NewsList4.vue'
import NewsList5 from '../components/news/NewsList5.vue'
  // 白酒红酒
  import commodity from '../components/commodity/commodity.vue'
  import commodity1 from '../components/commodity/commodity1.vue'
//  导入路由模块
import VueRouter from 'vue-router'
//  注册 路由
Vue.use(VueRouter);
//  创建路由规则对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer }, // 首页 组件的路由规则
    { path: '/member', component: MemberContaner }, // 品类 组件的路由规则
    { path: '/shopcar', component: ShopcarContainer }, //购物车 组件的路由规则
    { path: '/search', component: SearchContainer }, // 我的组件的路由规则
              // 推文
    { path: '/home/newslist', component: NewsList },   // 推文列表组件路由规则
    { path: '/home/newslist1', component: NewsList1 }, // 推文列表组件路由规则
    { path: '/home/newslist2', component: NewsList2 }, // 推文列表组件路由规则
    { path: '/home/newslist3', component: NewsList3 }, // 推文列表组件路由规则
    { path: '/home/newslist4', component: NewsList4 }, // 推文列表组件路由规则
    { path: '/home/newslist5', component: NewsList5 }, // 推文列表组件路由规则  
      // 白酒红酒
    { path: '/member/commodity', component: commodity }, //红酒
    { path: '/member/commodity1', component: commodity1 }, //红酒
    
  ],
  linkActiveClass: 'mui-active'
});

export default router;