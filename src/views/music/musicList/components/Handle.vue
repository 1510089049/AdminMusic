<template>
    <el-drawer
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :wrapperClosable="false"
      :size="size"
      :destroy-on-close="true"
      @update:visible="visible = $event"
      @close="close()"
      @open="open()"
    >
      <div class="content-box" v-loading="loading">
        <el-form
          ref="ruleForm"
          size="small"
          :model="ruleForm"
          :rules="rules"
          label-width="110px"
        >
          <el-form-item label="歌曲名" prop="name">
            <el-input
              maxlength="64"
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
          <el-form-item label="专辑选择" prop="album">
            <el-select
              v-model="ruleForm.album"
              filterable
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="item in albumOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="艺术家选择" prop="artist">
            <el-select
              v-model="ruleForm.artist"
              filterable
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="item in artistOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="封面" prop="picUrl">
            <ImgUpload
              resource-type="image"
              :image-url="ruleForm.picShowUrl"
              @success="uploadSuccess($event, 'picUrl', 'picShowUrl')"
            />
          </el-form-item>
          <el-form-item label="音频文件上传" prop="resourceUrl">
            <MediaUpload
              :fileList="fileList"
              @success="mediaUploadSuccess"
              @remove="(event) => { ruleForm.resourceUrl = '' }"
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
        <el-button @click="close()">关闭</el-button>
        <el-button
          type="primary"
          :loading="confirmLoading"
          @click="confirm('ruleForm')"
        >
          确认
        </el-button>
      </div>
    </el-drawer>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean,
      size: String,
      loading: Boolean,
      confirmLoading: Boolean,
      ruleForm: Object,
      rules: Object,
      albumOptions: Array,
      artistOptions: Array,
      fileList: Array
    },
    methods: {
      close() {
        this.$emit('update:visible', false);
      },
      open() {
        // Open logic
      },
      uploadSuccess(event, field1, field2) {
        // Upload success logic
      },
      mediaUploadSuccess(event) {
        // Media upload success logic
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
  