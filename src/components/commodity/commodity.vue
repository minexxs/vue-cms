<template>
	<!-- 白酒 -->
	<div class="list">
		<!-- 左 -->
		<div class="left">
				<router-link to="member/commodity">
					<li class="pic">白酒</li>
				</router-link>
			<router-link to="member/commodity1">
					<li>红酒</li>
				</router-link>
		</div>
		 <!-- 右 -->
		 <div class="right">
			 我是白酒
		 </div>
	</div>
</template>

 <script>
	import mui from "../../lib/mui/js/mui.js";
</script>


<style lang="scss" scoped>
		.list{
			.left{
                float: left;
				width: 25%;
				li{
					list-style-type: none;
					text-align: center;
					height: 36px;
					line-height: 36px;
					color: #000;
					font-family: 楷体;
				}
				.pic{
					background-color: #fff;
					color: red;
				}
			}
			.right{
                float: right;
				width: 75%;
			}
		}
</style>