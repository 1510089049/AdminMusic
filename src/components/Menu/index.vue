<template>
    <el-menu
      class="menu-box"
      :default-active="activeIndex"
      background-color="#32363c"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <SideBar :list="list" />
    </el-menu>
  </template>
  
  <script>
  import { ElMenu } from "element-ui"; // Assuming this is the correct import
  import SideBar from "./SideBar.vue"; // Assuming this is the correct import
  
  export default {
    components: {
      ElMenu,
      SideBar,
    },
    props: {
      list: {
        type: Array,
        required: true,
      },
      activeIndex: {
        type: String,
        default: "/",
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Add your component styles here */
  .menu-box {
    /* Styles for the menu box */
  }
  </style>
  