import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 存入歌曲的id
        songId: '',
    },
    mutations: {
        // 改变歌曲的id
        changeSongId(state, data) {
            // state为存放状态，data为歌曲id
            state.songId = data;
        },
    },
    actions: {},
    modules: {},
});
