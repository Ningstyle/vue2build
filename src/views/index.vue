<template>
	<div class="Menu" v-title data-title="物联网智能工具检测平台">
		<div class="leftMenu" :style="{background:menuColor,width:setWidth}">
			<div class="titles" :style="{width:setWidth,background:titleColor}">
				<div v-if="!isCollapse" class="tabResults.icon topTitle" :style="{color:textColor}"><i :class="tabResults.icon" :style="{color:textColor}"></i>{{tabResults.title}}</div>
				<i class="el-icon-s-home platform" v-if="isCollapse" :style="{color:textColor}"></i>
			</div>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				:background-color="menuColor"
				text-color="#fff"
				active-text-color="#409eff"
				:collapse="isCollapse"
				style="border-right:0;margin-top:50px"
				:unique-opened='true'
				>
				<!-- 无二级 -->
				<el-menu-item v-if="!item.children"  v-for="(item,index) in tabResults.tab" :key="index" :index="'1-'+(index+1)" @click="toPageview(item)">
					<i :class="item.icon"></i>
					<span slot="title">{{item.name}}</span>
				</el-menu-item>
				<!-- 有二级 -->
					<el-submenu v-if="item.children"  v-for="(item,index1) in tabResults.tab" :key="index1" :index="'2-'+index1+1">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</template>
						<div v-for="(item1,ins) in item.children" :key="ins">
							<el-menu-item :index="'3-'+(index1+1)+ins+1" @click="toPageview(item1)">{{item1.name}}</el-menu-item>
							<el-submenu v-if="item1.children" :index="'1-'+ins+1">
								<template slot="title">{{item1.name}}</template>
								<el-menu-item v-for="(item2,i) in item1.children" :index="'3-'+(index1+1)+ins+1+i+1" :key="i" @click="toPageview(item2)">{{item2.name}}</el-menu-item>
							</el-submenu>
						</div>
					</el-submenu>
			</el-menu>
		</div>
		<div class="rightContent" :style="{paddingLeft:setWidth}">
			<div class="navTab" :style="{background:navColor,paddingLeft:padds}">
				<div class="tools">
					<li class="isFlold" v-model="isCollapse" @click="isFold" :class="bindClass" title="展开/收起" :style="{color:navtitleColor}"></li>
					<li class="el-icon-refresh reload" @click="reload" title="刷新" :style="{color:navtitleColor}"></li>
				</div>
				<div class="infoGroup">
					<li class="" title="消息"  type="primary" :style="{color:navtitleColor}" style="line-height:20px;margin-top:14px">
						<el-badge is-dot class="item">
						  <i class="el-icon-bell"></i>
						</el-badge>
					</li>
					<li class="el-icon-full-screen" @click="Fullscreen" title="全屏"  type="primary" :style="{color:navtitleColor}"></li>
					<li class="el-icon-magic-stick" @click="setColor" style="margin:0 40px 0 10px;" title="配色方案"  type="primary" :style="{color:navtitleColor}"></li>
					<el-dropdown @command="slectDown">
						<span class="el-dropdown-link" :style="{color:navtitleColor}">
							{{info.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="" command="a">个人资料</el-dropdown-item>
							<el-dropdown-item icon="" command="b">修改密码</el-dropdown-item>
							<el-dropdown-item icon="" command="c">退出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="conentPage">
				<router-view v-if="isRouterAlive"></router-view>
			</div>
		</div>
		<el-dialog title="配色方案" :visible.sync="dialogFormVisible" :modal='true'>
					<div class="programme">
						<li @click="ChoiceColor('#20222a','#20222a','#fff','')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#2E241B','#2E241B','#fff','')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#50314F','#50314F','#fff','')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#344058','#344058','#1E9FFF','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#3A3D49','#3A3D49','#5FB878','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#28333E','#28333E','#AA3130','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#17341f','#17341f','#17341f','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#1E9FFF','#344058','#1E9FFF','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#5FB878','#3A3D49','#5FB878','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#AA3130','#28333E','#AA3130','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#1b0538','#1b0538','#1b0538','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
						<li @click="ChoiceColor('#E5860E','#001529','#E5860E','#fff')"><div class="leftP"><span></span></div><div class="rightP"><span></span></div></li>
					</div>
		</el-dialog>
	</div>
</template>

<script>
	import navConfig from'../nav.config'
	import screenfull from 'screenfull'
	import Cookies from 'js-cookie'
	export default{
		data(){
			return {
				tabResults:navConfig.results,
				activeIndex2: '1',
				activeColor:'#20222A',
				isCollapse:false,
				bindClass:'el-icon-s-fold',
				setWidth:'240px',
				isRouterAlive:this.reload,
				dialogFormVisible:false,
				textColor:'#fff',
				titleColor:localStorage.getItem("colorVal")?JSON.parse(localStorage.getItem("colorVal")).titleColor:'#20222a',
				menuColor:localStorage.getItem("colorVal")?JSON.parse(localStorage.getItem("colorVal")).menuColor:'#20222a',
				navColor:localStorage.getItem("colorVal")?JSON.parse(localStorage.getItem("colorVal")).navColor:'#fff',
				navtitleColor:localStorage.getItem("colorVal")?JSON.parse(localStorage.getItem("colorVal")).navtitleColor:'#838383',
				info:'',
				padds:'255px'
			}
		},
		methods: {
			// 子路由跳转页面
			toPageview(e){
				if(this.$route.path!=e.path){
					this.$router.push({path:e.path})
				}
			},
			isFold (){
				this.isCollapse=!this.isCollapse
				if(this.isCollapse){
					this.bindClass='el-icon-s-unfold';
					this.setWidth='64px'
					this.padds='80px'
				}else{
					this.bindClass="el-icon-s-fold";
					this.setWidth='240px'
					this.padds='255px'
				}
			},
			reload(){
				this.isRouterAlive=false
				this.$nextTick(function(){
					this.isRouterAlive=true
				})
			},
			setColor(){
				this.dialogFormVisible=!this.dialogFormVisible
			},
			ChoiceColor(titleColor,menuColor,navColor,navtitleColor){
				this.titleColor=titleColor
				this.menuColor=menuColor
				this.navColor=navColor
				this.navtitleColor=navtitleColor
				let colorVal = {
					titleColor: titleColor,
					menuColor: menuColor,
					navColor: navColor,
					navtitleColor: navtitleColor,
				};
				localStorage.setItem("colorVal", JSON.stringify(colorVal));
			},
			Fullscreen(){
				if(!screenfull.isEnabled){
					this.$message({
						message: '您的浏览器无法进入全屏模式',
						type: 'warning'
					})
				}else{
					screenfull.toggle();
				}
			},
			slectDown(command){
				if(command=='a'){
					
				}else if(command=='b'){
					
				}else if(command=='c'){
					this.$confirm('确定退出当前登录账号?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$message({
							type: 'success',
							message: '退出成功'
						});
						Cookies.remove('isAuth');
						this.$router.push({path:'/login'})
					}).catch(() => {
						         
					});
				}
			}
		},
		mounted (){
			let colorVal = {
				titleColor:'#20222a',
				menuColor:'#20222A',
				navColor:'#fff',
				navtitleColor:'#838383'
			};
			// this.info=JSON.parse(Cookies.get('info'))
			// localStorage.setItem("colorVal", JSON.stringify(colorVal));
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../public/css/index.scss'
</style>
