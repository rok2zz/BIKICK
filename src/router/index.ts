import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bi from '../views/Bi.vue'
import Sale from '../views/Sale.vue'
import AppDownload from '../views/AppDownload.vue'
import ProductsInformation from '../views/ProductsInformation.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/bi',
		name: 'bi',
		component: Bi
	},
	{
		path: '/sale',
		name: 'sale',
		component: Sale
	},
	{
		path: '/download',
		name: 'download',
		component: AppDownload
	},
	{
		path: '/info',
		name: 'info',
		component: ProductsInformation
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.NODE_ENV === 'production' ? '/bikick/' : '/',
	routes
  })

export default router
