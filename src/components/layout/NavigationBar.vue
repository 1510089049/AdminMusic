<template>
    <div class="navigation-bar-box">
      <el-dropdown class="user-box">
        <div class="user-info-box">
          <span>{{ userInfo.nickname }}</span>
          <el-avatar :size="34" :src="getUrl(userInfo.avatar)"></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </template>
  
  <script>
  import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar } from "element-ui"; // Assuming these are the correct imports
  
  export default {
    components: {
      ElDropdown,
      ElDropdownMenu,
      ElDropdownItem,
      ElAvatar,
    },
    props: {
      userInfo: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getUrl(avatar) {
        // Add your logic to get the avatar URL
      },
      logout() {
        // Add your logout logic
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Add your component styles here */
  .navigation-bar-box {
    /* Styles for the navigation bar box */
  }
  
  .user-box {
    /* Styles for the user box */
  }
  
  .user-info-box {
    /* Styles for the user info box */
  }
  </style>
  