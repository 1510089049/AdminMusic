<template>
    <div class="base-page-box" v-loading="loading">
      <Query :loading="loading" @handle="handle" @query="query(albumList, true)">
        <el-form-item label="艺术家名称">
          <el-input placeholder="请输入艺术家名称" clearable v-model="form.name" />
        </el-form-item>
      </Query>
      <BaseTable :table-data="tableData" :table-column-data="tableColumnData" border>
        <template #tableColumn="{ data: { row, item } }">
          <div v-if="item.prop === 'picUrl'">
            <el-image class="pic-url" :src="getUrl(row[item.prop])" :preview-src-list="[getUrl(row[item.prop])]" />
          </div>
          <div v-else-if="item.prop === 'status'">
            {{ statusOptions.find(v => v.value === row[item.prop])?.label }}
          </div>
          <div v-else-if="item.prop === 'handle'">
            <el-button type="text" @click="handle(row)">编辑</el-button>
            <el-button type="text" style="color: #f56c6c" @click="handleDelete(row, albumDelete, albumList, 'id')">删除</el-button>
          </div>
        </template>
      </BaseTable>
      <Paging :page="form.page" :size="form.size" :total="total" @update:page="form.page = $event" @update:size="form.size = $event" @change="query(albumList)" />
      <Handle :show="handleShow" :row="row" @update:show="handleShow = $event" @success="query(albumList)" />
    </div>
  </template>
  
  <script>
  import Query from './Query.vue'; // Assuming Query.vue is the component for Query
  import BaseTable from './BaseTable.vue'; // Assuming BaseTable.vue is the component for BaseTable
  import Paging from './Paging.vue'; // Assuming Paging.vue is the component for Paging
  import Handle from './Handle.vue'; // Assuming Handle.vue is the component for Handle
  
  export default {
    components: { Query, BaseTable, Paging, Handle },
    data() {
      return {
        loading: false,
        form: {
          name: '',
          page: 1,
          size: 10
        },
        albumList: [], // Assuming you have albumList data
        tableData: [], // Assuming you have tableData for BaseTable
        tableColumnData: [], // Assuming you have tableColumnData for BaseTable
        total: 0,
        statusOptions: [] // Assuming you have statusOptions data
      };
    },
    methods: {
      handle() {
        // Handle function logic
      },
      query(list, refresh) {
        // Query function logic
      },
      handleDelete(row, deleteFunc, list, idKey) {
        // Handle delete logic
      },
      getUrl(url) {
        // Get URL function logic
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
    /* Styles for pic-url class */
  }
  </style>
  