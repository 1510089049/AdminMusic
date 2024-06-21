<template>
  <div>
    <h1>你来到了音乐列表页面</h1>

    <el-table :data="musicList" stripe>
      <el-table-column prop="picUrl" label="封面" width="180">
        <template slot-scope="scope">
          <img :src="`${baseUrl}resource${scope.row.picUrl}?Authorization=${getToken()}`" alt="avatar" class="pic-url">
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="resourceUrl" label="播放">
        <template slot-scope="scope">
          <el-button type="primary" @click="playMusic(scope.row.resourceUrl,scope.row)">播放</el-button>
        </template>
<!--        <template slot-scope="scope">-->
<!--          &lt;!&ndash; 使用插值表达式拼接音频路径 &ndash;&gt;-->
<!--          <audio :src="`${baseUrl}resource${scope.row.resourceUrl}?Authorization=${getToken()}`" controls class="audio-player"></audio>-->
<!--        </template>-->
      </el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="publishTime" label="发布时间"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      <el-table-column prop="album.name" label="专辑名称"></el-table-column>
      <el-table-column prop="album.description" label="专辑描述"></el-table-column>
      <el-table-column prop="artist.name" label="艺术家名称"></el-table-column>
      <el-table-column prop="artist.description" label="艺术家描述"></el-table-column>
    </el-table>
    <!-- 添加分页导航 -->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    <div v-if="!musicList.length">
      <p>没有找到音乐。</p>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <MusicPlayer v-if="playingUrl" :url="playingUrl" :lyrics="playingLyrics" :albumCover="playingAlbumCover" />
    </el-dialog>
  </div>
</template>

<script>
import { GetMusicList, GetLrc } from '../../../api/SvtccMusic';
import store from "@/store"; // 根据实际路径引入
import MusicPlayer from '../../../components/MusicPlayer.vue'; // 引入音乐播放器组件

export default {
  name: 'MusicList',
  components: {
    MusicPlayer
  },
  data() {
    return {
      musicList: [],
      baseUrl: "https://svtcc.dyw770.top:4431/",
      currentPage: 1,
      pageSize: 10,
      total: 0,
      playingUrl: '', // 当前播放的音乐 URL
      playingLyrics: '', // 当前播放的歌词
      playingAlbumCover: '', // 当前播放的专辑封面
      dialogVisible: false // 控制对话框显示
    };
  },
  created() {
    this.fetchMusicList();
  },
  methods: {
    async fetchMusicList() {
      try {
        const response = await GetMusicList(this.currentPage, ''); // 使用当前页数作为参数
        this.musicList = response.data.records;
        this.total = response.data.total;
      } catch (error) {
        console.error("获取音乐列表出错:", error);
      }
    },
    getToken() {
      const res = store.state.userInfo.data
      return res
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1; // 重置当前页数
      this.fetchMusicList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fetchMusicList();
    },
 //   ==============================================================
    async playMusic(url,row) {
      this.playingUrl = `${this.baseUrl}resource${row.resourceUrl}?Authorization=${this.getToken()}`;
      this.playingAlbumCover = `${this.baseUrl}resource${row.picUrl}?Authorization=${this.getToken()}`;
      try {
        console.log("下面是歌词文件数据返回")
        console.log(row.id)
        console.log(GetLrc(row.id))
        const response = await GetLrc(row.id); // 假设GetLrc接口需要音乐的ID
        this.playingLyrics = response.data.lyric;
      } catch (error) {
        console.error("获取歌词出错:", error);
        this.playingLyrics = "未找到歌词";
      }
      this.dialogVisible = true; // 显示对话框
    }
  }
};
</script>

<style lang="scss" scoped>
.pic-url {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.audio-player {
  width: 100%;
  max-width: 600px;
}
</style>