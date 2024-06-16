<template>
    <div>
      <el-menu :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen">
        <template v-for="item in list">
          <template v-if="item.children && item.children.length">
            <el-submenu :key="item.path" :index="item.path" @click="handleMenu(item)">
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </template>
              <SideBar :list="item.children" />
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :key="item.path" :index="item.path" @click="handleMenu(item)">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </template>
  
  <script>
  import { ElMenu, ElMenuItem, ElSubmenu } from "element-ui"; // Assuming these are the correct imports
  
  export default {
    components: {
      ElMenu,
      ElMenuItem,
      ElSubmenu,
    },
    props: {
      list: {
        type: Array,
        required: true,
      },
      activePath: {
        type: String,
        default: "/",
      },
    },
    methods: {
      handleMenu(item) {
        // Add your menu item click logic
      },
      handleOpen(index, indexPath) {
        // Add your submenu open logic
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  .el-menu-vertical-demo {
    /* Styles for the vertical menu */
  }
  </style>
  