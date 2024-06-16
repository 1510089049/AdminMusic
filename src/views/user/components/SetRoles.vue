<template>
    <el-dialog :title="title" :visible="visible" :close-on-press-escape="false" :close-on-click-modal="false" :width="width" :destroy-on-close="true" @update:visible="visible = $event" @close="close()" @open="open()">
      <div class="content-box">
        <el-select v-model="roleNames" multiple placeholder="请选择" clearable style="width: 100%">
          <el-option v-for="item in roleList" :key="item.roleName" :label="item.describe" :value="item.roleName" />
        </el-select>
      </div>
      <div class="footer-box">
        <el-button @click="close()">关闭</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="confirm()">确认</el-button>
      </div>
    </el-dialog>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean,
      width: String,
      confirmLoading: Boolean,
      roleList: Array
    },
    data() {
      return {
        roleNames: []
      };
    },
    methods: {
      close() {
        // Close logic
      },
      open() {
        // Open logic
      },
      confirm() {
        // Confirm logic
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .content-box {
    /* Your styles for content-box class here */
  }
  
  .footer-box {
    /* Your styles for footer-box class here */
  }
  </style>
  