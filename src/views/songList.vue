<template>
  <div id="songList" v-if="isShow">
    <div class="mian">
      <!-- 歌单基本信息 -->
      <div class="songListInfor">
        <!-- 歌单图片 -->
        <div class="backImg">
          <img :src="songListInfor.playlist.coverImgUrl" alt="歌单图片" />
        </div>
        <!-- 歌单信息 -->
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
            <el-button>播放</el-button>
            <el-button>收藏</el-button>
            <el-button>分享</el-button>
            <el-button>下载</el-button>
          </div>
          <div class="label">
            <el-tag
              v-for="(tags,index) in songListInfor.playlist.creator.expertTags"
              :key="index"
            >{{tags}}</el-tag>
          </div>
          <div class="direction">
            <span style="font-weight:700">描述：</span>
            <span class="details">{{songListInfor.playlist.description}}</span>
          </div>
        </div>
      </div>
      <!-- 歌单歌曲 -->
      <div class="songs">
        <el-table :data="songsName" style="width: 100%" @cell-click="goPlay">
          <el-table-column prop="index" label="编号" width="180"></el-table-column>
          <el-table-column prop="songTitle" label="歌曲标题" width="auto"></el-table-column>
          <el-table-column prop="name" label="歌手" width="180"></el-table-column>
          <el-table-column prop="songList" label="专辑"></el-table-column>
          <el-table-column prop="duration" label="时长"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongDetail, getSongInfor } from '../api/songList'
export default {
  data () {
    return {
      songListId: undefined,
      songListInfor: {},
      isShow: false,
      trackIds: {},
      songsName: []
    }
  },
  computed: {
    createDate () {
      return this.$moment(this.songListInfor.playlist.createTime).format("YYYY年MM月D日")
    }
  },
  created () {
    this.songListId = sessionStorage.getItem('songListId')
    // 获取歌单详情
    getSongDetail(this.songListId).then(value => {
      this.songListInfor = value.data
      this.isShow = true;
      let songsId = value.data.playlist.trackIds.slice(0, 20).map(item => {
        return item.id
      })

      // 获取歌曲详情
      getSongInfor(songsId).then(value => {
        value.data.songs.forEach((item, index) => {
          this.trackIds = item
          this.songsName.push({
            index: index + 1,
            songTitle: item.name,
            name: item.ar[0].name,
            songList: item.al.name,
            songId: item.id,
            duration: this.$moment(item.dt).format("mm:ss")
          })
        })
      })

    });
  },
  mounted () {
  },
  methods: {
    goPlay (e) {
      // 将歌曲id存入sessionstorage
      sessionStorage.setItem('songId', e.songId)
      this.$router.push('/play')
    }
  }
}
</script>

<style>
#songList .songListInfor {
  width: 100%;
  height: 291px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid transparent;
  margin-bottom: 19px;
}

#songList .mian .backImg {
  width: 291px;
  height: 291px;
  padding: 3px;
  box-shadow: 0 0 0 3px #eee;
  border-radius: 15px;
}
#songList .backImg img {
  width: inherit;
  height: inherit;
  border-radius: 15px;
}

#songList .songInfor {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#songList .direction span.details {
  display: inline-block;
  width: 410px;
  /* 多行文本打点 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 行数 */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>