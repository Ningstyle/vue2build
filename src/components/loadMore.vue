<template>
	<div class="loadmore" @click="loadmore" :class="{noclick:status=='loading'||status=='nomore'?true:false}">
		<i class="el-icon-loading" v-if="status=='loading'"></i>
		<span>{{status=='loadmore'?statusText.loadMore:status=='loading'?statusText.loaDing:statusText.noMore}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			status:{
				type:String,
				default:"loadmore"
			},
			statusText:{
				type:Object,
				default:{
					loadMore:'点击加载更多',
					loaDing:'正在加载...',
					noMore:'没有更多数据了'
				}
			}
		},
		methods:{
			loadmore(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loadmore{
		width:100%;
		height:30px;
		line-height: 30px;
		text-align: center;
		font-size:13px;
		color:#666;
		cursor: pointer;
		i{
			line-height: 30px;
			font-size:15px;
			margin-right:5px;
		}
	}
	.noclick{
		 pointer-events:none;
		 -moz-user-select:none;/*火狐*/
		 -webkit-user-select:none;/*webkit浏览器*/
		 -ms-user-select:none;/*IE10*/
		 -khtml-user-select:none;/*早期浏览器*/
			 user-select:none;
	}
</style>
