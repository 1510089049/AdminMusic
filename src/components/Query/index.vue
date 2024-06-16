<template>
    <el-card class="base-card-box" shadow="never">
      <el-form inline size="small" @submit.prevent="formSubmit">
        <slot></slot>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="formQuery">查询</el-button>
        </el-form-item>
        <el-form-item v-if="handleList.add" class="float-right">
          <el-button type="success" @click="handle">新增</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script>
  import { ElCard, ElForm, ElFormItem, ElButton } from "element-ui"; // Assuming these are the correct imports
  
  export default {
    components: {
      ElCard,
      ElForm,
      ElFormItem,
      ElButton,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      handleList: {
        type: Object,
        default: () => ({
          add: true,
        }),
      },
    },
    methods: {
      formSubmit() {
        // Add your form submit logic
      },
      formQuery() {
        // Add your form query logic
      },
      handle() {
        // Add your handle logic
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  .base-card-box {
    /* Styles for the card box */
  }
  
  .float-right {
    float: right;
  }
  </style>
  