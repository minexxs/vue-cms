<template>
	<div class="list">
		<!-- 左 -->
		<div class="left">
				<router-link to="/home/newslist">
					<li class="pic">白酒</li>
				</router-link>
			<router-link to="/member/commodity">
					<li>红酒</li>
				</router-link>
		</div>
		 <!-- 右 -->
		 <div class="right">

		 </div>
	</div>
</template>

 <script>
	import mui from "../../lib/mui/js/mui.js";
</script>


<style lang="scss" scoped>
		.list{
			.left{
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
				width: 75%;
			}
		}
</style>
