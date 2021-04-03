import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
        },
    },
    {
        path: '/play',
        name: 'play',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/play.vue'),
    },
    {
        path: '/songlist',
        name: 'songlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/songList.vue'),
    },
    {
        path: '/myUser',
        name: 'myUser',
        component: () => import(/* webpackChunkName: "myUser" */ '../views/User.vue'),
        meta: {
            title: '',
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
