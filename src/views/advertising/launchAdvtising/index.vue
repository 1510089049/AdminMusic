<template>
    <el-card :shadow="shadow" class="box">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="110px">
        <el-form-item label="启动广告名称" prop="splashName">
          <el-input v-model="ruleForm.splashName" placeholder="请输入" maxlength="50" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="启动广告图" prop="splashPath">
          <ImgUpload
            :line-height="'300px'"
            resource-type="image"
            :image-url="ruleForm.splashUrl"
            @success="uploadSuccess('splashPath', 'splashUrl')"
            style="width: 300px; height: 300px;"
          ></ImgUpload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="confirmLoading" @click="confirm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script>
  import ImgUpload from './ImgUpload.vue'; // Assuming there's a component named ImgUpload
  
  export default {
    name: 'ExampleComponent',
    components: {
      ImgUpload,
    },
    data() {
      return {
        shadow: 'never',
        ruleForm: {
          splashName: '',
          splashPath: '',
          splashUrl: '',
        },
        rules: {
          splashName: [{ required: true, message: '请输入启动广告名称', trigger: 'blur' }],
          splashPath: [{ required: true, message: '请上传启动广告图', trigger: 'change' }],
        },
        confirmLoading: false,
      };
    },
    methods: {
      uploadSuccess(field, urlField) {
        // Handle upload success
        this.ruleForm[urlField] = field.imageUrl;
      },
      confirm(formName) {
        // Handle form submission
        this.$refs[formName].validate(valid => {
          if (valid) {
            // Form is valid, proceed with saving
            this.saveData();
          } else {
            // Form validation failed
            this.$message.error('表单验证失败');
          }
        });
      },
      saveData() {
        // Perform save operation
        this.confirmLoading = true;
        // Simulate save operation
        setTimeout(() => {
          this.confirmLoading = false;
          this.$message.success('保存成功');
        }, 1500);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .box {
    // Component styles
  }
  </style>
  