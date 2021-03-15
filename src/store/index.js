import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 存入歌曲或歌单的id
        songId: '',
        // 存入专辑名称
        songAlbum:{},
    },
    mutations: {
        // 改变歌曲的id
        changeSongId(state, data) {
            // state为存放状态，data为歌曲id
            state.songId = data;
        },
        changeSongAlbum(state,data){
            state.songAlbum =data
        },
    },
    actions: {},
    modules: {},
});
