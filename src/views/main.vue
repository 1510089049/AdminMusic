<template>
  <div class="animated-container">
    <el-container>
      <div>
        <sidebar-menu />
      </div>

      <div>
        <el-header class="animated-header" style="text-align: left; font-size: 12px" background-color="#545c64">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
      </div>

      <div>
        <el-main class="animated-main">
          <!-- 根据路由动态渲染组件 -->
          <div>
            <el-tooltip><Test/></el-tooltip>
            <router-view></router-view></div>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animated-container {
  animation: fadeIn 1s ease-in-out;
}

.animated-header {
  animation: fadeIn 1.5s ease-in-out;
}

.animated-main {
  animation: fadeIn 2s ease-in-out;
}
</style>

<script>
import SidebarMenu from "@/components/tourMenu/sidebar.vue";

import user from "@/views/user/index.vue";
import Test from "@/views/Test.vue";

export default {
  computed: {
    user() {
      return user;
    }
  },
  components: {
    Test,
    SidebarMenu
  }
};
</script>
