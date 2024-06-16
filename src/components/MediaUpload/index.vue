<template>
    <el-upload
      :action="uploadAction"
      :limit="1"
      :before-upload="beforeAvatarUpload"
      :http-request="httpRequest"
      :file-list="fileList"
      @on-remove="onRemove"
      v-loading="loading"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </template>
  
  <script>
  import { ElUpload, ElButton } from "element-ui"; // Assuming these are the correct imports
  
  export default {
    components: {
      ElUpload,
      ElButton,
    },
    data() {
      return {
        uploadAction: "/", // Update with your upload action URL
        fileList: [], // Update with your file list data
        loading: false,
      };
    },
    methods: {
      beforeAvatarUpload(file) {
        // Add your logic for before upload
      },
      httpRequest(params) {
        // Add your HTTP request logic
      },
      onRemove(file, fileList) {
        // Add your logic for removing a file
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  