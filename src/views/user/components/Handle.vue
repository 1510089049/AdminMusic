<template>
    <el-drawer :title="title" :visible="visible" :close-on-press-escape="false" :wrapperClosable="false" :size="size" :destroy-on-close="true" @update:visible="visible = $event" @close="close()" @open="open()">
      <div class="content-box">
        <el-form ref="ruleForm" :size="'small'" :model="ruleForm" :rules="rules" label-width="110px">
          <el-form-item label="用户名" prop="username">
            <el-input :disabled="disabled" maxlength="11" placeholder="请输入" v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" maxlength="18" placeholder="请输入" v-model="ruleForm.password" />
          </el-form-item>
          <el-form-item label="账户是否启用" prop="enabled">
            <el-switch :disabled="disabled" v-model="ruleForm.enabled" />
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input maxlength="10" placeholder="请输入" v-model="ruleForm.nickname" />
          </el-form-item>
          <el-form-item label="头像" prop="avatarUrl">
            <ImgUpload resource-type="avatar" :image-url="ruleForm.avatarUrl" @success="uploadSuccess($event, 'avatar', 'avatarUrl')" />
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-box">
        <el-button @click="close()">关闭</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="confirm('ruleForm')">确认</el-button>
      </div>
    </el-drawer>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean,
      size: String,
      confirmLoading: Boolean,
      disabled: Boolean,
      ruleForm: Object,
      rules: Object
    },
    methods: {
      close() {
        // Close logic
      },
      open() {
        // Open logic
      },
      confirm(formName) {
        // Confirm logic
      },
      uploadSuccess(event, type, field) {
        // Upload success logic
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
  