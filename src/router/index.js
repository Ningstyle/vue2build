import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterPage from './RouterPage/'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
})
router.addRoutes([...RouterPage]);
export default router
