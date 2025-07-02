import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../views/homepage.vue';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';
import jingxuan from '../views/home/childern/jingxuan.vue'
import zhineng from '../views/home/childern/zhineng.vue'
import jujia from '../views/home/childern/jujia.vue'
import Category from '../views/category/Category.vue';
import Cart from '../views/cart/Cart.vue';
import Profile from '../views/profile/Profile.vue';
import music1 from '../views/category/childern/music1.vue'
import music2 from '../views/category/childern/music2.vue'
import nike from '../views/shop/nike.vue'
import zhuce from '../views/login/zhuce.vue'
import lianyiqun from '../views/shop/lianyiqun.vue';
// 安装插件
Vue.use(VueRouter)

// 创建路由对象
const routes =[
    {
        path:'/',
        name:'登录',
        component:Login
    },
    {
        path:'/zhuce',
        name:'注册',
        component:zhuce
    },
    {
        path:'/homepage',
        name:'导航',
        component:Homepage,
        children:[
            {
                path:'/home',
                name:'主页',
                component:Home,
                children:[
                    {
                        path:'/',
                        name:'精选',
                        component:jingxuan
                    },
                    {
                        path:'/zhineng',
                        name:'智能先锋',
                        component:zhineng
                    },
                    {
                        path:'/jujia',
                        name:'居家优品',
                        component:jujia
                    },
                ]
            },
            {
                path:'/category',
                name:'分类',
                component:Category,
                children:[
                    {
                        path:'/',
                        name:'音乐',
                        component:music1
                    },
                    {
                        path:'/music2',
                        name:'音乐',
                        component:music2
                    }
                ]
            },
            {
                path:'/cart',
                name:'购物车',
                component:Cart
            },
            {
                path:'/profile',
                name:'个人中心',
                component:Profile
            },
            {
                path:'/nike',
                name:'NIKE',
                component:nike
            },
            {
                path:'/lianyiqun',
                name:'连衣裙',
                component:lianyiqun
            }
        ]
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

// 导出router
export default router