<template>
<div>
  <h1>你来到了音乐列表页面</h1>
    <Details/>
    <Handle/>
    <LyricSet/>
    <Player/>

  </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'MusicList',
  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .base-page-box {
    /* Your styles here */
  }
  
  .pic-url {
    /* Your styles for pic-url class here */
  }
  </style>
  