<script setup>
import {ref} from 'vue'
useHead({
  titleTemplate:(titleChunck)=>{
    return titleChunck ? `${titleChunck} | 脑轴`: 'Mind Scrolls | 脑轴'
  },
  link:[
    {rel:'icon', type:'image/png', href:'/e-duck.png'}, // 配置头栏
  ]
})
// 设置seo元标签
useSeoMeta({
  ogTitle:'Mind Scrolls | 脑轴 | ogTitle',
  description: '测试seo标签 | description',
  ogDescription:'测试seo标签 | ogDescription',

})
</script>

<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<style lang="scss">

// 页面过渡效果自定义
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
