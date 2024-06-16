<template>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      :action="uploadAction"
      :before-upload="beforeAvatarUpload"
      :http-request="httpRequest"
      :show-file-list="false"
    >
      <div class="upload-hover-box" @click.stop>
        <div class="shade-box">
          <div class="btn-box">
            <el-button size="mini" type="primary" round @click.stop="handleButton(false)">
              图库选择
            </el-button>
          </div>
          <div>
            <el-button size="mini" type="primary" round @click.stop="handleButton(true)">
              上传图片
            </el-button>
          </div>
        </div>
        <img v-if="imageUrl" class="avatar" :src="imageUrl" />
        <i v-else class="el-icon-plus avatar-uploader-icon" :style="{ lineHeight: lineHeight }"></i>
      </div>
      <GallerySelect
        v-if="gallerySelectShow"
        :show="gallerySelectShow"
        :resourceType="resourceType"
        @update:show="gallerySelectShow = $event"
        @success="gallerySelectSuccess"
      />
    </el-upload>
  </template>
  
  <script>
  import { GallerySelect } from "@/components"; // Assuming this is the correct import path
  import { ElUpload, ElButton } from "element-ui"; // Assuming element-ui components are used
  
  export default {
    components: {
      GallerySelect,
      ElUpload,
      ElButton,
    },
    data() {
      return {
        uploadAction: "/", // Update with your upload action URL
        imageUrl: null,
        loading: false,
        gallerySelectShow: false,
        resourceType: "", // Update with your resource type
        lineHeight: "", // Update with your desired line height
      };
    },
    methods: {
      beforeAvatarUpload(file) {
        // Add your logic for before upload
      },
      httpRequest(params) {
        // Add your HTTP request logic
      },
      handleButton(upload) {
        // Add your button click logic
      },
      gallerySelectSuccess(data) {
        // Add your gallery select success logic
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Add your component styles here */
  .avatar-uploader {
    /* Styles for the uploader */
  }
  
  /* Other styles as needed */
  </style>
  