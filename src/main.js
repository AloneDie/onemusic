import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导航守卫
router.beforeEach((to, from, next) => {
    // Ayyay.prototype.some()测试数组中是不是至少有1个元素通过了被提供的函数测试
    if (to.matched.some(record => record.meta.requireAuth)) {
        // 判断该路由是否需要登录权限
        if (!sessionStorage.getItem('token') && !localStorage.getItem('token')) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

// 引入moment
import moment from 'moment';
Vue.prototype.$moment = moment;

//引入bus
Vue.prototype.$EventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    store, // 使用vuex
    render: h => h(App),
}).$mount('#app');
