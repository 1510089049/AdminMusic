<template>
    <div class="base-page-box">
      <Query :loading="loading" @handle="handle" @query="query(userList, true)">
        <el-form-item label="昵称">
          <el-input placeholder="请输入昵称" clearable v-model="form.nickname" />
        </el-form-item>
      </Query>
      <BaseTable :table-data="tableData" :table-column-data="tableColumnData" border>
        <template v-for="({ data: { row, item } }) in $scopedSlots.tableColumn({ data: { row, item } })" :key="item.prop">
          <div v-if="item.prop === 'accountNonLocked'">
            <el-tag :type="row[item.prop] ? 'success' : 'danger'">{{ row[item.prop] ? '否' : '是' }}</el-tag>
          </div>
          <div v-else-if="item.prop === 'enabled'">
            <el-switch :value="row.enabled" @change="changeEnabled($event, row)" />
          </div>
          <div v-else-if="item.prop === 'roles'">
            <div v-if="row.roles?.length > 0">
              <el-tag v-for="roleItem in row.roles" :key="roleItem.roleName" style="margin-right: 8px">{{ roleItem.describe }}</el-tag>
            </div>
            <i class="el-icon-edit" @click="setRoles(row)"></i>
          </div>
          <div v-else-if="item.prop === 'avatar'">
            <el-avatar size="40" :src="getUrl(row[item.prop])" />
          </div>
          <div v-else-if="item.prop === 'handle'">
            <el-button type="text" @click="handle(row)">编辑</el-button>
            <el-button type="text" style="color: #f56c6c" @click="handleDelete(row, deleteUser, userList)">删除</el-button>
          </div>
        </template>
      </BaseTable>
      <Paging :page="form.page" :size="form.size" :total="total" @update:page="form.page = $event" @update:size="form.size = $event" @change="query(userList)" />
      <Handle v-if="handleShow" :show.sync="handleShow" :row="row" @success="query(userList)" />
      <SetRoles v-if="setRolesShow" :show.sync="setRolesShow" :row="row" :role-list="roleList" @success="query(userList)" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      loading: Boolean,
      userList: Array,
      tableData: Array,
      tableColumnData: Array,
      total: Number,
      form: Object,
      handleShow: Boolean,
      setRolesShow: Boolean,
      row: Object,
      roleList: Array
    },
    methods: {
      handle() {
        // Handle logic
      },
      query(userList, update) {
        // Query logic
      },
      changeEnabled(event, row) {
        // Change enabled logic
      },
      setRoles(row) {
        // Set roles logic
      },
      handleDelete(row, deleteUser, userList) {
        // Handle delete logic
      },
      getUrl(url) {
        // Get URL logic
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .base-page-box {
    /* Your styles for base-page-box class here */
  }
  </style>
  