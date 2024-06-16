<template>
    <div class="container-box">
      <el-button class="config" type="primary" plain @click="toSet">配置</el-button>
      <el-carousel class="banner-box" :interval="5000" type="card" trigger="click">
        <el-carousel-item v-for="item in list" :key="item.order">
          <el-image class="img" :src="getUrl(item.imageUrl)" fit="cover" />
        </el-carousel-item>
      </el-carousel>
      <Set :show="setShow" :row="row" @update:show="setShow = $event" @success="init" />
    </div>
  </template>
  
  <script>
  import { ElButton, ElCarousel, ElCarouselItem, ElImage } from "element-ui"; // Assuming these are the correct imports
  import Set from "./Set.vue"; // Assuming this is the correct import
  
  export default {
    components: {
      ElButton,
      ElCarousel,
      ElCarouselItem,
      ElImage,
      Set,
    },
    props: {
      list: {
        type: Array,
        required: true,
      },
      setShow: {
        type: Boolean,
        default: false,
      },
      row: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      toSet() {
        // Add your toSet logic
      },
      init() {
        // Add your init logic
      },
      getUrl(imageUrl) {
        // Add your get URL logic
        return imageUrl;
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .container-box {
    /* Styles for the container box */
  }
  
  .config {
    /* Styles for the config button */
  }
  
  .banner-box {
    /* Styles for the banner box */
  }
  
  .img {
    /* Styles for the carousel item image */
  }
  </style>
  