<template>
  <div id="songList" v-if="isShow">
    <div class="mian">
      <img :src="songListInfor.playlist.coverImgUrl" alt="歌单图片" />
      <div class="songInfor">
        <h3 class="titile">{{songListInfor.playlist.name}}</h3>
        <div class="user">
          <span>作者：</span>
          <span>{{songListInfor.playlist.creator.nickname}}</span>
          <br />
          <span>创建时间：</span>
          <span>{{createDate}}</span>
        </div>
        <div class="control">
          <button>播放</button>
          <button>收藏</button>
          <button>分享</button>
          <button>下载</button>
        </div>
        <div class="label">
          <el-tag
            v-for="(tags,index) in songListInfor.playlist.creator.expertTags"
            :key="index"
          >{{tags}}</el-tag>
        </div>
        <div class="direction">
          <span style="font-weight:700">描述：</span>
          <span>{{songListInfor.playlist.description}}</span>
        </div>
        <div class="songs">
          <div v-for="item in trackIds" :key="item.id">{{item.id}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongDetail } from '../api/songList'
export default {
  data () {
    return {
      songListId: undefined,
      songListInfor: {},
      isShow: false,
      trackIds: []
    }
  },
  computed: {
    createDate () {
      return this.$moment(this.songListInfor.playlist.createTime).format("YYYY年MM月D日")
    }
  },
  created () {
    // this.songListId = this.$store.state.songId
    this.songListId = sessionStorage.getItem('songListId')
    getSongDetail(this.songListId).then(value => {
      this.songListInfor = value.data
      this.isShow = true;
      console.log(value.data)
      this.trackIds = value.data.playlist.trackIds.slice(0, 20)
    });

  },
  mounted () {
  },
}
</script>

<style>
#songList .mian img {
  width: 180px;
}
</style>