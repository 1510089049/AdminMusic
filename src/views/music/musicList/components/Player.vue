<template>
    <el-dialog
      :title="title"
      :visible="visible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :width="width"
      top="5%"
      @update:visible="visible = $event"
      @close="close()"
      @open="open()"
    >
      <div class="content-box">
        <audio
          ref="audio"
          v-if="visible"
          :src="getUrl(row?.resourceUrl)"
          @timeupdate="timeupdate"
          @ended="ended"
          @loadedmetadata="loadedmetadata"
        ></audio>
        <i class="el-icon-close" @click="close()"></i>
        <div class="cover-box">
          <img
            class="cover"
            :class="{ 'cover-animation-start': isPlay, 'cover-animation-stop': !isPlay }"
            :src="getUrl(row?.picUrl)"
          />
        </div>
        <div class="lrc-box">
          <h2>{{ row?.name }}</h2>
          <div class="singer-intro">
            <span>歌手：</span>
            <span>{{ row?.artist?.name }}</span>
          </div>
          <div class="singer-intro">
            <span>专辑：</span>
            <span>{{ row?.album?.name }}</span>
          </div>
          <div ref="lrcScrollBox" class="lrc-scroll-box" @wheel="lrcScrollWheel">
            <span v-if="lyricList.length === 0">暂无歌词</span>
            <div v-for="(item, index) in lyricList" :key="index" :ref="'lyc'" :class="{ active: item.active }">
              {{ item.lyric }}
            </div>
          </div>
        </div>
        <div class="slider-box">
          <el-slider
            style="width: 100%"
            :max="totalTime"
            :format-tooltip="formatTimeStr"
            @change="timeChange"
            @mousedown="handleMouseDown"
            v-model="currentTime"
          ></el-slider>
          <div class="play-button-box">
            <img class="switch-song previous-song" src="@/assets/image/switch-song.png" @click="switchSong(-1)" />
            <div class="play-button" @click="handlePlay()">
              <i v-show="!isPlay" class="el-icon-video-play"></i>
              <i v-show="isPlay" class="el-icon-video-pause"></i>
            </div>
            <img class="switch-song next-song" src="@/assets/image/switch-song.png" @click="switchSong(1)" />
            <div class="volume-bar-box">
              <img
                v-if="muted || volume === 0"
                class="volume-icon"
                src="@/assets/image/24gl-volumeDisable.png"
                @click="handleMuted(false)"
              />
              <img
                v-else
                class="volume-icon"
                src="@/assets/image/24gl-volumeMiddle.png"
                @click="handleMuted(true)"
              />
              <el-slider
                class="volume-bar"
                @change="volumeChange"
                @input="volumeChange"
                v-model="volume"
              ></el-slider>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean,
      width: String,
      loading: Boolean,
      confirmLoading: Boolean,
      row: Object,
      getUrl: Function,
      isPlay: Boolean,
      muted: Boolean,
      volume: Number,
      lyricList: Array,
      totalTime: Number,
      currentTime: Number,
      formatTimeStr: Function
    },
    methods: {
      close() {
        this.$emit('update:visible', false);
      },
      open() {
        // Open logic
      },
      handleMouseDown(event) {
        // Handle mouse down event
      },
      handlePlay() {
        // Handle play logic
      },
      switchSong(offset) {
        // Switch song logic
      },
      handleMuted(muted) {
        // Handle mute logic
      },
      timeupdate(event) {
        // Time update logic
      },
      ended(event) {
        // Ended logic
      },
      loadedmetadata(event) {
        // Loaded metadata logic
      },
      timeChange(value) {
        // Time change logic
      },
      volumeChange(value) {
        // Volume change logic
      },
      lrcScrollWheel(event) {
        // Lrc scroll wheel logic
      }
    }
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
  