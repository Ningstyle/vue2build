<template>
	<div>
		<nav class="noticeNav" :style="{borderLeft:'5px solid '+borderColor}">{{title}}<el-button :type="type" :icon="icon" v-if="isMore" class="button" size="mini" @click="btnclick">{{btnText}}</el-button></nav>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			title:{//nav标题
				default:''
			},
			borderColor:{//左侧border颜色
				default:"#00aaff"
			},
			// 是否显示右侧的按钮
			isMore:{
				default:false
			},
			// 右侧按钮文字
			btnText:{
				default:'添加'
			},
			// 右侧按钮icon
			icon:{
				default:'el-icon-plus'
			},
			// 右侧按类型,同element button的type,默认text类型
			type:{
				default:'text'
			}
		},
		methods:{
			btnclick(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.noticeNav{
		width:100%;
		height:40px;
		background-color: #f2f2f2;
		border-left:5px solid #ff6666;
		line-height: 40px;
		color:#444;
		padding:0 15px;
		box-sizing: border-box;
		margin-bottom:10px;
		font-weight: bold;
		.button{
			float: right;
			margin-top:7px;
			font-size:12px;
		}
	}
</style>
