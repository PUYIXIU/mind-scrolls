<script setup>

import {useToken} from "../../composables/user.js";
import {setStorage, token_key} from "../../utils/storage.js";
const router = useRouter()
useHead({
  title:'注册'
})
const form = ref({
  username:'admin',
  email:'1597167270@qq.com', // 邮箱
  password:'admin#123',
  confirmPassword:'admin#123', // 再次确认密码
})
const rules = {
  username:[{required:true, message:'请确认正确填入用户名(1-15个字符)',trigger:'blur',min:1,max:15}],
  email:[{required:true, message:'请输入正确的邮箱',trigger:'blur',validator:IsEmail}],
  password:[{required:true, message:'a-Z/0-9/特殊符号/8~16位',trigger:'blur',validator:validatePwd}],
  confirmPassword:[{required:true, message:'两次输入不一致',trigger:'blur',validator:validateAgainPwd}],
}
const formRef = ref()
function validateAgainPwd(rule, value, callback){
  if(form.value.password == form.value.confirmPassword){
    callback()
  }else{
    callback(new Error('两次输入不一致'));
  }
}

function login(){
  formRef.value.validate(valid=>{
    if(valid){
      $fetch('/api/user/regist',{
        method:'post',
        body:form.value
      }).then(res=>{
        if(res.success){
          ElMessage.success('注册成功！')
          setStorage(token_key, res.token)
          // 跳转主页
          setTimeout(()=>{
            gotoPage(router, '/book/book-index')
          },3000)
        }else{
          ElMessage.error(res.message)
        }
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
        <pop-box title="注册">
          <div class="login-body">
            <el-form :model="form" :rules="rules" ref="formRef">
              <el-form-item label="账号名称" prop="username" class="name">
                <el-input v-model="form.username" clearable placeholder="请输入账号名称"></el-input>
              </el-form-item>
              <el-form-item label="个人邮箱" prop="email" class="email">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="账号密码" prop="password" class="password">
                <el-input v-model="form.password" type="password" show-password placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmPassword" class="confirmPassword">
                <el-input v-model="form.confirmPassword" type="password" show-password placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item class="foot">
                <login-button :handle-click="login" style="margin-top:0.5rem">
                  注册👉
                </login-button>
                <login-button :handle-click="()=>gotoPage(router,'/user/login')" style="margin-top:0.5rem" type="second">
                  返回👈
                </login-button>
              </el-form-item>
            </el-form>
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
