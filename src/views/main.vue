<template>
  <div class="animated-container" v-if="userInfo && userInfo.code === 0">
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
            <router-view></router-view>
          </div>
        </el-main>
      </div>
    </el-container>
  </div>
  <el-dialog v-else :visible.sync="showDialog">
    <span slot="title">提示</span>
    <p>您需要登录后才能查看内容。</p>
    <div slot="footer">
      <el-button @click="showDialog = false">取消</el-button>
      <el-button type="primary" @click="redirectToLogin">去登录</el-button>
    </div>
  </el-dialog>
</template>

<script>
import SidebarMenu from "@/components/tourMenu/sidebar.vue";
import { mapState } from "vuex";

export default {
  components: {
    SidebarMenu,

  },
  computed: {
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
  watch: {
    userInfo: {
      handler(newValue) {
        if (!newValue || newValue.code !== 0) {
          this.showDialog = true;
        }
      },
      immediate: true, // Trigger the handler immediately on component mount
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
