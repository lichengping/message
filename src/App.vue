<template>
  <div class="loginic">
    <div class="form-container">
    <h2>用户登入</h2>
     <el-form label-position="top" :rules="rules" ref="formData" label-width="80px" :model="formData">
       <el-form-item label="用户名" prop="userName">
         <el-input v-model="formData.userName"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="password">
         <el-input v-model="formData.password"></el-input>
       </el-form-item>
       <!-- 按钮 -->
       <el-button class="but-log" type="primary" @click="submitForm('formData')">登录</el-button>
     </el-form>
     </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      formData: {
        userName: '',
        password: '', 
        //表单验证
        name: '',
        region: '',
      },
      //表单输入验证
         rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'change' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
         }
    }
  },
  methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
             console.log('error submit!!');
            return false;
          }
        });
       }
  },
}
</script>

<style lang="scss">
.loginic {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #324152;
  .form-container {
    background: #fff;
    width: 500px;
    height: 350px;
    padding: 0 40px;
    border-radius: 10px;
  }
  .but-log {
   width: 100%;
  }
}

</style>
