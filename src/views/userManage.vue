<template>
	<div class="userManageBox">
		<navTab title="乘客管理" borderColor="#00aaff"></navTab>
		大叔大婶所多所
	</div>
</template>

<script>
	import navTab from '@/components/navTab.vue'
	import Util from '@/utils/util.js'
	export default{
		components:{
			navTab
		},
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.tablist{
		width:100%;
		height:auto;
		overflow: hidden;
		border: 1px solid #eee;
		border-bottom: 0;
	}
	.pageFull{
		margin-top:10px;
		text-align: right;
	}
</style>
