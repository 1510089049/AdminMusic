<template>
    <el-dialog
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :width="width"
      top="5%"
      @close="close"
      @open="open"
      v-loading="loading"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="轮播图名称" prop="bannerName">
          <el-input
            v-model="ruleForm.bannerName"
            maxlength="50"
          ></el-input>
        </el-form-item>
        <el-form-item label="轮播图列表" required>
          <div v-for="(item, index) in ruleForm.items" :key="index" class="item-box">
            <div class="item-column">
              <span class="item-name">序号：</span>
              <el-input-number
                v-model="item.order"
                :step="1"
                :precision="0"
                :min="1"
                :max="5"
              ></el-input-number>
            </div>
            <div class="item-column">
              <span class="item-name">标题：</span>
              <el-input
                v-model="item.title"
                placeholder="请输入"
                maxlength="50"
              ></el-input>
            </div>
            <div class="item-column">
              <span class="item-name">图片：</span>
              <ImgUpload
                style="width: 250px; height: 100px;"
                line-height="100px"
                resource-type="image"
                :image-url="item.imageShowUrl"
                @success="uploadSuccess($event, item)"
              />
            </div>
            <div class="item-column">
              <span class="item-name">音乐：</span>
              <el-select v-model="item.musicId" placeholder="请选择" filterable>
                <el-option
                  v-for="music in musicList"
                  :key="music.id"
                  :label="music.name"
                  :value="music.id"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-form-item>
        <div class="footer-box">
          <el-button @click="close">关闭</el-button>
          <el-button type="primary" :loading="confirmLoading" @click="confirm('ruleForm')">确认</el-button>
        </div>
      </el-form>
    </el-dialog>
  </template>
  
  <script>
  import { ElButton, ElCarousel, ElCarouselItem, ElDialog, ElForm, ElFormItem, ElInput, ElInputNumber, ElOption, ElSelect } from "element-ui"; // Assuming these are the correct imports
  import ImgUpload from "./ImgUpload.vue"; // Assuming this is the correct import
  
  export default {
    components: {
      ElButton,
      ElCarousel,
      ElCarouselItem,
      ElDialog,
      ElForm,
      ElFormItem,
      ElInput,
      ElInputNumber,
      ElOption,
      ElSelect,
      ImgUpload,
    },
    props: {
      title: {
        type: String,
        default: "标题",
      },
      visible: {
        type: Boolean,
        default: false,
      },
      width: {
        type: String,
        default: "50%",
      },
      loading: {
        type: Boolean,
        default: false,
      },
      confirmLoading: {
        type: Boolean,
        default: false,
      },
      ruleForm: {
        type: Object,
        default: () => ({
          bannerName: "",
          items: [],
        }),
      },
      rules: {
        type: Object,
        default: () => ({}),
      },
      musicList: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      open() {
        // Add your open logic
      },
      close() {
        // Add your close logic
      },
      uploadSuccess(event, item) {
        // Add your upload success logic
      },
      confirm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // Add your confirm logic
          }
        });
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .item-box {
    margin-bottom: 20px;
  }
  
  .item-column {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  
    .item-name {
      margin-right: 10px;
    }
  }
  
  .footer-box {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  </style>
  