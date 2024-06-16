<template>
    <el-dialog
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :width="width"
      :destroy-on-close="true"
      top="5%"
      @update:visible="visible = $event"
      @close="close()"
      @open="open()"
    >
      <div class="content-box" v-loading="loading">
        <el-form ref="ruleForm" size="small" :model="ruleForm" :rules="rules">
          <el-form-item label="歌词" prop="lyric">
            <el-input
              maxlength="100000"
              type="textarea"
              rows="30"
              placeholder="请输入歌词"
              show-word-limit
              v-model="ruleForm.lyric"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-box">
        <el-button @click="close()">关闭</el-button>
        <el-button
          type="primary"
          :loading="confirmLoading"
          @click="confirm('ruleForm')"
        >
          确认
        </el-button>
      </div>
    </el-dialog>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean,
      width: String,
      loading: Boolean,
      confirmLoading: Boolean,
      ruleForm: Object,
      rules: Object
    },
    methods: {
      close() {
        this.$emit('update:visible', false);
      },
      open() {
        // Open logic
      },
      confirm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // Confirmation logic
          }
        });
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
  