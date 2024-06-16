<template>
    <el-pagination
      class="base-paging-box"
      :current-page="page"
      :page-size="size"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </template>
  
  <script>
  import { ElPagination } from "element-ui"; // Assuming this is the correct import
  
  export default {
    components: {
      ElPagination,
    },
    props: {
      page: {
        type: Number,
        required: true,
      },
      size: {
        type: Number,
        required: true,
      },
      pageSizes: {
        type: Array,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    methods: {
      handleSizeChange(size) {
        // Add your size change logic
        this.$emit("size-change", size);
      },
      handleCurrentChange(page) {
        // Add your current page change logic
        this.$emit("current-change", page);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  .base-paging-box {
    /* Styles for the pagination box */
  }
  </style>
  