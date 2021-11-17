<template>
	<div class="loginBox" v-title data-title="登录">
		<div class="logCent">
			<div class="logB">
				<h3>基于物联网智能工具检测平台</h3>
				<el-form :model="Form" ref="Form" class="demo-ruleForm" label-position="left">
				  <el-form-item prop="name">
				    <el-input v-model="Form.account" placeholder="请输入登录账号"></el-input>
				  </el-form-item>
					<el-form-item prop="name">
					  <el-input v-model="Form.password" type="password" placeholder="请输入账号密码" @keyup.enter.native="login"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="primary" style="width:100%" :loading="loadings" @click="login">登录</el-button>
				<span>v1.0</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default{
		data(){
			return {
				Form: {
					account: '',
					password:'',
				},
				loadings:false
			}
		},
		 methods: {
			// 登录
			login(){
				let Base64 = require('js-base64').Base64
				if(this.Form.account==''){
					this.$message({
						message: '请输入登录账号！',
						type: 'error',
						center: true
					});
				}else if(this.Form.password==''){
					this.$message({
						message: '请输入登录密码！',
						type: 'error',
						center: true
					});
				}else{
					this.loadings=true
					// Cookies.set('isAuth', 'yes', { expires: 1 });
					// Cookies.set('info', res.data.results, { expires: 1 });
					Cookies.set('isAuth',1)
					this.$router.push({path:'/'})
				}
			}
		},
		mounted (){
			// console.log(JSON.parse(Cookies.get('info')))
			// console.log(this.$route.query.redirect)
		}
	}
</script>

<style lang="scss" scoped>
	.loginBox{
		width:100%;
		height:100vh;
		background-color: #20222a;
		position: fixed;
		top:0;
		left:0;
		.logCent{
			width:400px;
			height:320px;
			position: fixed;
			top:50%;
			left:50%;
			margin:-160px 0 0 -200px;
			.logB{
				width:100%;
				height:100%;
				background: #fff;
				border-radius: 5px;
				box-shadow: 0px 0px 9px -1px #ced0d2;
				padding:10px 50px 0px 50px;
				box-sizing: border-box;
				h3{
					width:100%;
					line-height: 40px;
					text-align: center;
					color:#444;
					font-size:20px;
					font-weight: bold;
				}
				span{
					display: block;
					width:100%;
					font-size:13px;
					color:#9ca0a6;
					line-height: 30px;
					text-align: center;
					margin-top:20px;
				}
			}
		}
	}
	.el-form--label-left,.el-form-item__label,.el-form-item__label{
		font-weight: bold;
	}
	.el-input__inner{
		border:1px solid #409EFF;
	}
</style>
