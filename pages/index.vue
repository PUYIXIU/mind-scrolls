<script setup>

import {gotoPage} from "../utils/router.js";
import {useUserInfo} from "../composables/user.js";

const router = useRouter()
const userInfo = useUserInfo()
// 进入系统
async function intoSystem(){
  let token  = getStorage(token_key)
  if(token) {
    // 使用token登录
    let result = await $fetch('/api/user/login', {
      method: 'post',
      body: {token}
    })
    if (result.code == 200) {
      userInfo.value = result.data
      gotoPage(router,'/book/book-index')
      return
    }
  }
  gotoPage(router, '/user/login')
}
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="index-content">
        <div class="inter-box" @click="intoSystem">
          <img class="main-icon" src="@/assets/images/e-duck.png" alt="">
          <p class="inter-text">
            <span>立即进入</span>
            <span>Mind Scrolls</span>
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.index-content{
  width:100%;
  height:100vh;
  display: grid;
  place-items: center;
}
.inter-box{
  position:relative;
  padding:3rem;
  user-select: none;
  cursor:pointer;
  .main-icon{
    border:3px solid #d6c3b0;
    width:10rem;
    object-fit: contain;
    filter:drop-shadow(#130101 0px 0px 10px);
    border-radius:2rem;
    transform:translateY(0px);
    transition-duration: 0.3s;
    transition-property: border , filter, transform;

  }
  .inter-text{
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter:blur(5px);
    opacity: 0;
    text-shadow: 0px 0px 1px #000;
    transform:translateY(-1rem);
    transition-duration: 0.3s;
    transition-property: opacity , filter, transform;
    span{
      font-weight: bold;
      color:$light-color;
      font-family: Alibaba-Health-Bold;
      font-size: 1.2rem;
      &:last-child{
        font-size: 1.4rem;
        margin-top:3px;
        border-top: solid $light-color 3px;
      }
    }
  }

  &:hover{
    .main-icon{
      border:3px solid rgba(214, 195, 176, 0);
      filter:blur(5px) opacity(0.8) brightness(0.9) saturate(0.8);
      transform:scale(1.7);
    }
    .inter-text{
      filter:blur(0px);
      opacity: 1;
      transform:translateY(0rem);
    }
  }
}
</style>
