<template>
  <div id="play" class="mian">
    <img :src="(songInfor.al.picUrl)" alt v-if="isShow" />
    <div class="songInfor">
      <h3 v-if="isShow">{{songInfor.al.name}}</h3>
      <span class="commit">我穿过所有星河</span>
      <div class="songUser">
        <div class="songer">
          <span class="sta">歌手：</span>
          <a href v-if="isShow">{{songInfor.ar[0].name}}</a>
        </div>
        <div class="album">
          <span class="sta">专属专辑：</span>
          <a href v-if="isShow">{{this.$store.state.songAlbum.name}}</a>
        </div>
      </div>

      <div class="control">
        <button class="btn-player" @click="play">暂停</button>
        <button>收藏</button>
        <button>分享</button>
        <button>下载</button>
      </div>
      <div class="tiao"></div>
    </div>
    <div class="lyric_area">
      <ul id="lyric"></ul>
    </div>
  </div>
</template>

<script>
import { getSongInfor, getSongAlbum, getSongUrl, getSongLrc, getSongSucc } from '@/api/songList'
// import bus from '@/bus/bus.js'
// 加载配置信息
import config from '../config';
// 加载路由
// import router from '@/router';



// 获取配置地址
const { createLrcObj, lyricmove, showLRC } = config;

export default {
  methods: {
    play (e) {
      if (this.isPlaying) {
        this.audio.pause();
        e.target.innerHTML = '播放'
        this.isPlaying = false
      } else {
        this.audio.play()
        e.target.innerHTML = '暂停'
        this.isPlaying = true
      }
    },
    error () {
      this.$message.error('目前还没有版权哦');
      this.$router.push('/')
    },
  },
  data () {
    return {
      songId: "",
      audio: '',
      songInfor: {},
      songAlbum: {},
      songLrc: {},
      playTime: 10,
      isShow: false,
      isPlaying: false
    }
  },
  watch: {
    // 当songInfor的状态发生改变时，会改变页面的显示内容
    // 如果 `songInfor` 发生改变，这个函数就会运行
    songInfor: function () {
      this.isShow = true;
    },
  },
  created () {
    // 由于vuex的状态信息刷新就会失效。将存入到localstorage
    // localStorage永久有效，sessionStorage只在窗口存活期有效
    this.songId = this.$store.state.songId

    getSongInfor(this.songId).then(value => {
      this.songInfor = value.data.songs[0]
      getSongAlbum(this.songInfor.al.id).then(value => {
        this.songAlbum = value.data.album
        this.$store.commit('changeSongAlbum', value.data.album)
      }).catch(() => {
        this.error()
      })
    })
  },
  mounted () {
    getSongSucc(this.songId).then(() => {
      getSongUrl(this.songId).then(value => {
        if (!this.audio) {
          this.audio = document.createElement('audio');
          this.audio.src = value.data.data[0].url
          this.audio.autoplay = true
          this.isPlaying = true
        }
      }).catch(reason => {
        console.log(reason)
      })
    }).catch(() => {
      this.error()
    })

  },
  beforeUpdate () {
    getSongLrc(this.songId).then(value => {
      this.songLrc = createLrcObj(value.data.lrc.lyric)
      showLRC(this.songLrc, document.getElementById('lyric'))
      lyricmove(this.audio, document.getElementById('lyric'), this.songLrc)
    })

  },
}
</script>

<style scoped>
img {
  height: 260px;
  border-radius: 50%;
}
#play {
  display: flex;
  justify-content: space-around;
}
#play h3 {
  margin: 10px 0 0 0;
}
#play .commit {
  display: inline-block;
  font-size: 12px;
  color: #bababa;
  margin-bottom: 20px;
}
#play .sta {
  font-weight: 600;
}
#play .control {
  padding-top: 30px;
}
#play .control button {
  border: 1px solid #166363;
  margin-left: 10px;
  width: 68px;
  height: 30px;
  letter-spacing: 3px;
  font-weight: 600;
  border-radius: 5px;
}
#play .control button.btn-player {
  margin-left: 0;
  background: #166363;
  color: #fff;
}
#play #lyric .lrc {
  float: none;
}
.lyric_area {
  /*歌词显示区域*/
  height: 300px; /*歌词区域高度*/
  overflow: hidden; /*隐藏超出部分*/
  margin-top: 15px;
}
#lyric {
  /*歌词列表*/
  line-height: 20px; /*行高，这个值要用在歌词滚动距离上*/
  transition-duration: 600ms; /*滚动速度*/
}
#lyric .lineHigh {
  /*高亮行*/
  font-size: 20px;
  color: red;
}
</style>