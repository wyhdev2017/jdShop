import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import category from '@/page/category/category'
import discover from '@/page/discover/discover'
import shoppingcart from '@/page/shoppingcart/shoppingcart'
import mine from '@/page/mine/mine'

Vue.use(Router)

export default new Router({
	routes: [{ //重定向 进入时默认进入首页
			path: '/',
			redirect: {
				name: 'home'
			}
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		}, {
			path: '/category',
			name: 'category',
			component: category
		}, {
			path: '/discover',
			name: 'discover',
			component: discover
		}, {
			path: '/shoppingcart',
			name: 'shoppingcart',
			component: shoppingcart
		}, {
			path: '/mine',
			name: 'mine',
			component: mine
		}
	]
})