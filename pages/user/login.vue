<script setup>

import PopBox from "../../components/PopBox.vue";
import {useUserInfo} from "../../composables/user.js";
import {gotoPage} from "../../utils/router.js";

const router = useRouter()

useHead({
  title:'登录'
})
const loginForm = ref({
  username:'',
  password:''
})
const rules = {
  username:[{required:true, message:'请确认正确填入用户名',trigger:'blur'}],
  password:[{required:true, message:'请确认正确填入密码',trigger:'blur'}],
}
const LoginFormRef = ref()
const userInfo = useUserInfo()
function login(){
  LoginFormRef.value.validate(valid=>{
    if(valid){
      $fetch('/api/user/login',{
        method:'post',
        body:loginForm.value
      }).then(res=>{
        if(res.code == 200){
          userInfo.value = res.data
          setStorage(token_key, res.data._id)
          gotoPage(router,'/book/book-index')
          return
        }
        ElMessage.warning(res.data)
      })
    }
  })
  return false
}

</script>

<template>
  <div>
    <NuxtLayout>
      <div class="login-content">
        <pop-box title="登录">
            <div class="login-body">
              <el-form :model="loginForm" :rules="rules" ref="LoginFormRef">
                <el-form-item label="账号" prop="username" class="name">
                  <el-input v-model="loginForm.username" clearable placeholder="请输入账号名称">
                  </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="password">
                  <el-input v-model="loginForm.password" type="password" show-password placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="foot">
                  <login-button :handle-click="login" style="margin-top:0.5rem">
                    登录👉
                  </login-button>
                </el-form-item>
              </el-form>
              <div class="foot-box">
                <span class="foot-item" @click="gotoPage(router, '/user/regist')">没有账号？注册一个🐾</span>
                <span class="foot-item">忘记密码🧠</span>
              </div>
            </div>
        </pop-box>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.login-content{
  user-select: none;
  min-height:100vh;
  display: grid;
  place-items: center;
  .login-body{
    min-width:250px;
    width:35vw;
    max-width:40vw;
    padding-top:1rem;
  }
}
.foot-box{
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-top:0.3rem;
  .foot-item{
    font-size: 0.7rem;
    color:$main-middle-color;
    text-decoration: underline;
    cursor:pointer;
    &:hover{
      color:$main-light-color;
    }
  }
}
</style>
