<template>
  <div class="songList fl iconfont">
    <h2 class="icon-yinle">{{name}}</h2>
    <ul class="clearfix">
      <li v-for="(item, index) in lists" :key="index" @click.prevent="open($event,item)">
        <a class="zhuanji" href>
          <img :src="item.coverImgUrl" alt />
          <div class="player">
            <a href class="playCount">{{item.playCount}}</a>
          </div>
        </a>
        <a class="songName">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    open (e, song) {
      if (song.album) {
        // 如果song中含有album信息就是单曲，否则为歌单
        this.$store.commit('changeSongId', song.id)
        this.$router.push('/play')
      } else {
        console.log(song.id)
        this.$store.commit('changeSongId', song.id)
        this.$router.push('/songlist')
      }
    }
  },
  props: ['lists', 'name']
}
</script>

<style >
/* 歌单推荐 */
.songList {
  margin: 40px;
  margin-top: 0px;
  width: 350px;
  text-align: center;
}
.songList h2.icon-yinle {
  font-size: 20px;
  color: rgb(12, 99, 99);
}
.songList ul li {
  margin: 10px;
  margin-left: 20px;
  width: 140px;
  position: relative;
  overflow: hidden;
  float: left;
}
.songList ul li .zhuanji {
  display: block;
  width: 140px;
  height: 140px;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
}
.songList ul li img {
  width: 140px;
  height: 140px;
  transition: transform 0.6s;
  border-radius: 5px;
}

.songList ul li:hover img {
  transform: scale(1.2);
}

.songList ul li .songName {
  display: inline-block;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.songList a:hover {
  text-decoration: none;
  cursor: pointer;
}
.songList ul li .playCount {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 12;
  padding: 0 5px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.445);
  text-align: left;
  color: rgb(150, 149, 149);
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
.songList ul li .playCount::before {
  content: '\e627';
  text-align: left;
  width: 50%;
  left: 0;
  border-bottom-left-radius: 5px;
}
.songList ul li .playCount::after {
  content: '\e696 ';
  position: absolute;
  text-align: right;
  width: 50%;
  right: 10px;
  border-bottom-right-radius: 5px;
}
</style>