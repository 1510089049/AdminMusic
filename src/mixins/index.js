import settings from '@/settings'
import { getToken } from '@/utils/auth'

export default {
  // 弹窗/抽屉prop
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      // 页面data
      form: {
        page: 1,
        size: 10,
        orders: [
          {
            asc: false,
            column: 'createTime',
          },
        ],
      },
      total: 0,
      loading: false,
      tableData: [],
      handleShow: false,
      statusOptions: [
        { label: '正常', value: 1 },
        { label: '下架', value: 2 },
        { label: '删除', value: 3 },
      ],
      // 弹窗/抽屉data
      confirmLoading: false,
      title: '',
      size: '40%',
      visible: false,
    }
  },
  // 弹窗/抽屉 显示状态 监听
  watch: {
    show: {
      handler (val) {
        this.visible = val
      },
      immediate: true,
    },
  },
  computed: {
    baseUrl () {
      return settings.baseUrl
    }
  },
  methods: {
    // 下载文件
    downloadFile (url, fileName) {
      let link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.target = "_blank";
      link.click();
      link = null
    },
    // 时间格式化
    formatTime (time) {
      if (time) {
        const timeArr = time.split('T')
        return timeArr[0] + ' ' + timeArr[1]
      }
    },
    // 获取图片完整路径
    getUrl (url) {
      return `${this.baseUrl}resource${url}?Authorization=${getToken()}`
    },
    // 点击新增/编辑
    handle (row) {
      this.row = row;
      this.handleShow = true
    },
    // 图片上传成功回调
    uploadSuccess (url, key, showKey) {
      this.ruleForm[key] = url
      this.ruleForm[showKey] = this.getUrl(url)
      this.ruleForm = JSON.parse(JSON.stringify(this.ruleForm))
    },
    // 弹窗/抽屉确认成功
    success () {
      this.$emit('success')
      this.close()
      this.$message.success('操作成功!')
    },
    // 关闭弹窗/抽屉
    close () {
      this.visible = false
      this.$emit('update:show', false)
    },
    // 默认弹窗/抽屉open打开方法
    defaultOpen (titleName, defaultForm) {
      if (!this.row) {
        this.title = `新增${titleName}`
        this.ruleForm = JSON.parse(JSON.stringify(defaultForm))
      } else {
        this.title = `编辑${titleName}`
        this.ruleForm = JSON.parse(JSON.stringify(this.row))
      }
    },
    // 删除
    handleDelete (row, handleDeleteFn, queryFn, key = 'username') {
      this.$confirm('确认删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          this.loading = true
          handleDeleteFn(row[key])
            .then((res) => {
              if (res.code === 0) {
                this.$message.success('操作成功')
                if (
                  this.tableData.length <= 1 &&
                  this.form.page > 1
                ) {
                  this.form.page--
                }
                this.query(queryFn)
              } else {
                this.loading = false
              }
            })
            .catch(() => (this.loading = false))
        })
        .catch(() => { })
    },
    // 查询
    query (queryFn, isInit, loading = true) {
      return new Promise((resolve, reject) => {
        if (isInit) this.form.page = 1
        if (loading) this.loading = true
        queryFn(this.form)
          .then((res) => {
            if (res.code === 0) {
              const data = res.data.records || []
              this.tableData = data
              this.total = res.data.total
              resolve(res.msg)
            } else {
              reject(res.msg)
            }
          })
          .catch((err) => reject(err))
          .finally(() => {
            if (loading) {
              this.loading = false
            }
          })
      })
    },
  }
}