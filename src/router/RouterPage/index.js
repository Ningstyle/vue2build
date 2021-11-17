/**路由页面配置文件**/
export default [
	{ path: "/", redirect: '/index',},
	{
		path: '/index',
		name: '首页',
		component: () => import( '@/views/index'),
		meta: { requireAuth: true},//是否检查登录，
		children:[          
			{
				path:'/',
				name:'主页',        
				component: () => import( '@/views/home'),
			},
			{
				path:'/userManage',
				name:'乘客',        
				component: () => import( '@/views/userManage'),
			},
		]
	},
	{
		path: '/login',
		name: '登录页',
		component: () => import( '@/views/login'),
		// meta: { requireAuth: false}
	},
]