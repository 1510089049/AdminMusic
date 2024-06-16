<template>
  <el-drawer
    :title="title"
    :visible="visible"
    :close-on-press-escape="false"
    :wrapperClosable="false"
    :size="size"
    :destroy-on-close="true"
    @update:visible="visible = $event"
    @close="close()"
    @open="open()"
  >
    <div class="container-box">
      <div class="content-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="歌曲名：">
            <span>{{ form.name }}</span>
          </el-form-item>
          <el-form-item label="描述：">
            <span>{{ form.description }}</span>
          </el-form-item>
          <el-form-item label="封面：">
            <el-image
              class="cover-img"
              :src="getUrl(form.picUrl)"
              :preview-src-list="[getUrl(form.picUrl)]"
            />
          </el-form-item>
          <el-form-item label="歌曲状态：">
            <span>{{ statusOptions.find(v => v.value === form.status)?.label }}</span>
          </el-form-item>
          <el-form-item label="发布时间：">
            <span>{{ formatTime(form.publishTime) }}</span>
          </el-form-item>
          <el-form-item label="创建时间：">
            <span>{{ formatTime(form.createTime) }}</span>
          </el-form-item>
          <el-form-item label="更新时间：">
            <span>{{ formatTime(form.updateTime) }}</span>
          </el-form-item>
          <el-form-item label="艺术家姓名：">
            <div>{{ form?.artist?.name }}</div>
          </el-form-item>
          <el-form-item label="艺术家描述：">
            <div>{{ form?.artist?.description }}</div>
          </el-form-item>
          <el-form-item label="专辑名：">
            <div>{{ form?.album?.name }}</div>
          </el-form-item>
          <el-form-item label="专辑描述：">
            <div>{{ form?.album?.description }}</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer-box">
        <el-button @click="close()">关闭</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean,
    size: String,
    form: Object,
    statusOptions: Array
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
    open() {
      // Open logic
    },
    getUrl(url) {
      // Get URL logic
    },
    formatTime(time) {
      // Format time logic
    }
  }
};
</script>

<style lang="scss" scoped>
/* Scoped styles for this component */
.container-box {
  /* Your styles for container-box class here */
}

.content-box {
  /* Your styles for content-box class here */
}

.footer-box {
  /* Your styles for footer-box class here */
}

.cover-img {
  /* Your styles for cover-img class here */
}
</style>
