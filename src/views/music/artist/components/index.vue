<template>
    <div class="base-page-box" v-loading="loading">
      <Query :loading="loading" @handle="handle" @query="query(artistList, true)">
        <el-form-item label="艺术家名称">
          <el-input
            placeholder="请输入艺术家名称"
            clearable
            v-model="form.name"
          />
        </el-form-item>
      </Query>
      <BaseTable
        :table-data="tableData"
        :table-column-data="tableColumnData"
        border
        v-slot="{ data: { row, item } }"
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
            <el-button type="text" @click="handle(row)">编辑</el-button>
            <el-button type="text" style="color: #f56c6c" @click="handleDelete(row, artistDelete, artistList, 'id')">删除</el-button>
          </div>
        </template>
      </BaseTable>
      <Paging
        :page="form.page"
        :size="form.size"
        :total="total"
        @update:page="$set(form, 'page', $event)"
        @update:size="$set(form, 'size', $event)"
        @change="query(artistList)"
      />
      <Handle
        :show="handleShow"
        :row="row"
        @update:show="handleShow = $event"
        @success="query(artistList)"
      />
    </div>
  </template>
  
  <script>
  import Query from './Query.vue'; // Assuming Query.vue is the component for Query
  import BaseTable from './BaseTable.vue'; // Assuming BaseTable.vue is the component for BaseTable
  import Paging from './Paging.vue'; // Assuming Paging.vue is the component for Paging
  import Handle from './Handle.vue'; // Assuming Handle.vue is the component for Handle
  
  export default {
    components: { Query, BaseTable, Paging, Handle },
    props: {
      loading: Boolean,
      artistList: Array,
      tableData: Array,
      tableColumnData: Array,
      statusOptions: Array,
      total: Number,
      form: Object,
      handleShow: Boolean,
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
  