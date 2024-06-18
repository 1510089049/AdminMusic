<template>
  <el-dialog>
    <div class="content-box">
      <audio ref="audio"></audio>
      <i class="el-icon-close"></i>
      <div class="cover-box">
        <img class="cover" />
      </div>
      <div class="lrc-box">
        <h2></h2>
        <div class="singer-intro">
          <span>歌手：</span>
          <span></span>
        </div>
        <div class="singer-intro">
          <span>专辑：</span>
          <span></span>
        </div>
        <div class="lrc-scroll-box">
          <span>暂无歌词</span>
          <div></div>
        </div>
      </div>
      <div class="slider-box">
        <el-slider style="width: 100%"></el-slider>
        <div class="play-button-box">
          <img class="switch-song" />
          <div class="play-button">
            <i class="el-icon-video-play"></i>
            <i class="el-icon-video-pause"></i>
          </div>
          <img class="switch-song" />
          <div class="volume-bar-box">
            <img class="volume-icon" />
            <img class="volume-icon" />
            <el-slider class="volume-bar"></el-slider>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style lang="scss" scoped>
  /* Scoped styles for this component */
  .content-box {
    /* Your styles for content-box class here */
  }
  
  .cover-box {
    /* Your styles for cover-box class here */
  }
  
  .lrc-box {
    /* Your styles for lrc-box class here */
  }
  
  .slider-box {
    /* Your styles for slider-box class here */
  }
  
  .volume-bar-box {
    /* Your styles for volume-bar-box class here */
  }
  </style>
  