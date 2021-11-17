import router from './router'
import Cookies from 'js-cookie'
router.beforeEach((to, from, next) => {
	console.log(to)
	// Cookies.set('isAuth',1)
	if (to.matched.some(record => record.meta.requireAuth)) {
    if (Cookies.get('isAuth')) { 
      if (to.fullPath == '/login') {
				
      } else {
        next()
      }
    } else {
      next({
        path: '/login',
      })
    }
  } else {
		Cookies.remove('isAuth');
    next()
  }
})