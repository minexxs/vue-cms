<template>
  <div>

    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" >
             <router-link to="/home/newslist">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>
            <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>
        
                 </router-link>
              </li>
                   <li class="mui-table-view-cell mui-media mui-col-xs-6">
		         <router-link to="/home/newslist1">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>
                    
                     <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>
             </router-link>
              </li>
		     
              <li class="mui-table-view-cell mui-media mui-col-xs-6" id="list">
		             <router-link to="/home/newslist2">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>   
                <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>  
            </router-link>
              </li>
		     
              <li class="mui-table-view-cell mui-media mui-col-xs-6" id="list">
		          <router-link to="/home/newslist3">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>
                    <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>
               </router-link>
              </li>
		     
              <li class="mui-table-view-cell mui-media mui-col-xs-6" id="list">
		             <router-link to="/home/newslist4">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>
                    
                  <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>
               </router-link>
              </li>
		     
              <li class="mui-table-view-cell mui-media mui-col-xs-6" id="list">
		         <router-link to="/home/newslist5">
		                <img class="mui-media-object" src="../../images/1.png">
		                <div class="mui-media-body">来看看刘女士怎么给宝宝</div>
                    <div class="mui-media-body">定制满月酒</div>
                    <span id="left">满月</span>
                    <span class="mui-icon-extra mui-icon-extra-heart-filled" id="right">&nbsp;189</span>
            </router-link>
              </li>		     

		    </ul>    

  </div>
</template>

<script>
import config from "../../js/globalConfig.js";

export default {
  data() {
    return {
        baseUrl: config.baseUrl
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      var url = 'http://10.2.216.243:8080/zdz1-shop/api/story/list';

      this.$http.post(url).then(res => {
          alert(url);
        if (res.body.ret_flag === 1) {
            alert("获取成功了");
            }
         else {
          console.log('获取失败了！');
        }
      });
    }
  },

};
</script>

<style lang="scss" scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 10px;
  color: #999;
}
#list {
  margin-top: 20px;
  font-size: 13px;
}
#left {
  float: left;
  width: 50px;
  height: 50px;
  display: block;
  line-height: 50px;
  background: url(../../images/bg.png)no-repeat;
  font-size: 12px;
  border-radius: 50%;
}
#right {
  float: right;
  width: 66px;
  font-size: 18px;
  height: 40px;
  display: block;
  color: #999;
  line-height: 50px;
}
.mui-icon-extra .mui-icon-extra-heart-filled {
  color: red;
}
</style>
