<template>
    <el-drawer
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :wrapper-closable="false"
      :size="size"
      :destroy-on-close="true"
      @update:visible="visible = $event"
      @close="close"
      @open="open"
    >
      <div class="content-box">
        <el-form
          ref="ruleForm"
          :size="'small'"
          :model="ruleForm"
          :rules="rules"
          label-width="110px"
        >
          <el-form-item label="专辑名" prop="name">
            <el-input
              maxlength="100"
              placeholder="请输入"
              v-model="ruleForm.name"
            />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              maxlength="2000"
              type="textarea"
              rows="5"
              placeholder="请输入"
              show-word-limit
              v-model="ruleForm.description"
            />
          </el-form-item>
          <el-form-item label="专辑封面" prop="picUrl">
            <ImgUpload
              resource-type="image"
              :image-url="ruleForm.picShowUrl"
              @success="uploadSuccess"
            />
          </el-form-item>
          <el-form-item label="发布时间" prop="publishTime">
            <el-date-picker
              type="datetime"
              placeholder="选择发布时间"
              value-format="yyyy-MM-ddTHH:mm:ss"
              v-model="ruleForm.publishTime"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-box">
        <el-button @click="close">关闭</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="confirm('ruleForm')">确认</el-button>
      </div>
    </el-drawer>
  </template>
  
  <script>
  import ImgUpload from './ImgUpload.vue'; // Assuming ImgUpload.vue is the component for ImgUpload
  
  export default {
    components: { ImgUpload },
    props: {
      title: String,
      visible: Boolean,
      size: String,
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
      uploadSuccess(event, prop, showProp) {
        // Upload success logic
        this.$emit('success', event, prop, showProp);
      },
      confirm(formName) {
        // Confirm logic
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            // Perform confirmation action
            this.$emit('success');
          }
        });
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .content-box {
    /* Your styles here */
  }
  
  .footer-box {
    /* Your styles here */
  }
  </style>
  