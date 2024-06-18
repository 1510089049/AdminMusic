
import vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/main.vue'


vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'start',
            component: () => import('@/views/login/index.vue'),
            redirect: '/login',
            children:[{
                path: '/login',
                name: 'login',
                component: () => import('@/views/login/components/login.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/views/login/components/register.vue'),
                }]
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                path: '/index/user',
                name: 'user',
                component: () => import('@/views/user/index.vue'),
            },
           {
                    path: '/index/music',
                    name: 'music',
                    component: () => import('@/views/music/index.vue'),
                    children: [
                        {
                            path: '/index/music/artist',
                            name: 'artist',
                            component: () => import('@/views/music/artist/index.vue'),
                        },
                        {
                            path: '/index/music/album',
                            name: 'album',
                            component: () => import('@/views/music/album/index.vue'),
                        },
                        {
                            path: '/index/music/musicList',
                            name: 'musicList',
                            component: () => import('@/views/music/musicList/index.vue'),
                        },
                    ]
                },
                {
                    path: '/index/advertising',
                    name: 'advertising',
                    component: () => import('@/views/advertising/index.vue'),
                    children: [
                        {
                            path: '/index/advertising/launchAdvertising',
                            name: 'launchAdvertising',
                            component: () => import('@/views/advertising/launchAdvertising/index.vue'),
                        },
                        {
                            path: '/index/advertising/banner',
                            name: 'banner',
                            component: () => import('@/views/advertising/banner/index.vue'),
                        },
                    ]
                },
                ]
        },
    ]
})


const routeList =  [
    {
        path: '/music',
        name: 'music',
        component: () => import('@/views/music/index.vue'),
        redirect: '/music/artist',
        meta: {
            title: '音乐管理',
            icon: 'el-icon-headset',
        },
        children: [
            {
                path: '/music/artist',
                name: 'artist',
                component: () => import('@/views/music/artist/index.vue'),
                meta: {
                    title: '艺术家列表',
                    icon: "el-icon-star-on"
                }
            },
            {
                path: '/music/album',
                name: 'album',
                component: () => import('@/views/music/album/index.vue'),
                meta: {
                    title: '专辑列表',
                    icon: "el-icon-star-on"
                }
            },
            {
                path: '/music/musicList',
                name: 'musicList',
                component: () => import('@/views/music/musicList/index.vue'),
                meta: {
                    title: '音乐列表',
                    icon: "el-icon-star-on"
                }
            },
        ]
    },
        {
            path: '/advertising',
            name: 'advertising',
            component: () => import('@/views/advertising/index.vue'),
            redirect: '/advertising/launchAdvertising',
            meta: {
                title: '广告管理',
                icon: 'el-icon-picture-outline',
            },
            children: [
                {
                    path: '/advertising/launchAdvertising',
                    name: 'launchAdvertising',
                    component: () => import('@/views/advertising/launchAdvertising/index.vue'),
                    meta: {
                        title: '启动广告配置',
                        icon: "el-icon-star-on"
                    }
                },
                {
                    path: '/advertising/banner',
                    name: 'banner',
                    component: () => import('@/views/advertising/banner/index.vue'),
                    meta: {
                        title: '轮播图配置',
                        icon: "el-icon-star-on"
                    }
                },
            ]
        },
    ]