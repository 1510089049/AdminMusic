<template>
    <div class="base-page-box" v-loading="loading">
      <Query :loading="loading" @handle="handle" @query="query(musicList, true)">
        <el-form-item label="歌曲名称">
          <el-input
            placeholder="请输入歌曲名称"
            clearable
            v-model="form.name"
          />
        </el-form-item>
      </Query>
      <BaseTable
        :table-data="tableData"
        :table-column-data="tableColumnData"
        border
        v-slot="{ data: { row, item, index } }"
      >
        <template v-if="item.prop === 'picUrl'">
          <div>
            <el-image
              class="pic-url"
              :src="getUrl(row[item.prop])"
              :preview-src-list="[getUrl(row[item.prop])]"
            />
          </div>
        </template>
        <template v-else-if="item.prop === 'status'">
          <div>{{ statusOptions.find(v => v.value === row[item.prop])?.label }}</div>
        </template>
        <template v-else-if="item.prop === 'handle'">
          <div>
            <el-button
              icon="el-icon-headset"
              circle
              type="success"
              size="small"
              @click="play(row, index)"
            />
            <el-button type="text" @click="handle(row)">编辑</el-button>
            <el-button type="text" @click="toDetails(row)">详情</el-button>
            <el-button type="text" @click="download(row)">下载</el-button>
            <el-button type="text" @click="lyricSet(row)">歌词设置</el-button>
            <el-button
              style="color: #f56c6c"
              type="text"
              @click="handleDelete(row, musicDelete, musicList, 'id')"
            >
              删除
            </el-button>
          </div>
        </template>
      </BaseTable>
      <Paging
        :page="form.page"
        :size="form.size"
        :total="total"
        @update:page="$set(form, 'page', $event)"
        @update:size="$set(form, 'size', $event)"
        @change="query(musicList)"
      />
      <Details
        :row="row"
        :show="detailsShow"
        @update:show="detailsShow = $event"
      />
      <Handle
        :row="row"
        :show="handleShow"
        @update:show="handleShow = $event"
        @success="query(musicList)"
      />
      <LyricSet
        :row="row"
        :show="lyricSetShow"
        @update:show="lyricSetShow = $event"
      />
      <Player
        ref="player"
        :row="row"
        :show="playerShow"
        @update:show="playerShow = $event"
        @switchSong="switchSong"
      />
    </div>
  </template>
  
  <script>
  import Query from './Query.vue'; // Assuming Query.vue is the component for Query
  import BaseTable from './BaseTable.vue'; // Assuming BaseTable.vue is the component for BaseTable
  import Paging from './Paging.vue'; // Assuming Paging.vue is the component for Paging
  import Details from './Details.vue'; // Assuming Details.vue is the component for Details
  import Handle from './Handle.vue'; // Assuming Handle.vue is the component for Handle
  import LyricSet from './LyricSet.vue'; // Assuming LyricSet.vue is the component for LyricSet
  import Player from './Player.vue'; // Assuming Player.vue is the component for Player
  
  export default {
    components: { Query, BaseTable, Paging, Details, Handle, LyricSet, Player },
    props: {
      loading: Boolean,
      musicList: Array,
      tableData: Array,
      tableColumnData: Array,
      statusOptions: Array,
      total: Number,
      form: Object,
      detailsShow: Boolean,
      handleShow: Boolean,
      lyricSetShow: Boolean,
      playerShow: Boolean,
      row: Object
    },
    methods: {
      handle() {
        // Handle logic
      },
      query(list, reload) {
        // Query logic
      },
      getUrl(url) {
        // Get URL logic
      },
      handleDelete(row, deleteFunc, list, idField) {
        // Handle delete logic
      },
      play(row, index) {
        // Play logic
      },
      toDetails(row) {
        // Details logic
      },
      download(row) {
        // Download logic
      },
      lyricSet(row) {
        // Lyric set logic
      },
      switchSong() {
        // Switch song logic
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .base-page-box {
    /* Your styles here */
  }
  
  .pic-url {
    /* Your styles for pic-url class here */
  }
  </style>
  