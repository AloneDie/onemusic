import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

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
