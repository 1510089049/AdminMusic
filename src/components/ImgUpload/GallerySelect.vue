<template>
    <el-dialog
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :width="width"
      append-to-body
      @update:visible="visible = $event"
      @close="close"
      @open="open"
    >
      <div v-loading="loading" class="content-box">
        <div v-for="(item, index) in list" :key="index" class="img" :class="{ active: index === activeIndex }">
          <el-image
            :src="getUrl(item)"
            lazy
            fit="cover"
            @click="choose(index)"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="footer-box">
          <el-button @click="close">关闭</el-button>
          <el-button type="primary" @click="confirm">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </template>
  
  <script>
  import { h } from 'vue';
  
  export default {
    props: {
      title: String,
      visible: Boolean,
      width: String,
      list: Array,
      loading: Boolean,
      activeIndex: Number,
    },
    methods: {
      close() {
        this.$emit('update:visible', false);
      },
      open() {
        // your open logic here
      },
      getUrl(item) {
        // your get URL logic here
        return item.url;
      },
      choose(index) {
        // your choose logic here
        this.$emit('choose', index);
      },
      confirm() {
        // your confirm logic here
        this.$emit('confirm');
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .content-box {
    /* your styles here */
  }
  
  .img {
    /* your styles here */
  }
  
  .active {
    /* your styles here */
  }
  
  .image-slot {
    /* your styles here */
  }
  
  .footer-box {
    /* your styles here */
  }
  </style>
  