<script setup>

import {ref} from 'vue'
const route = useRoute()
// 自定义路由中间件
definePageMeta({
  middleware:[
      function(to, from){
        console.log('2-定义在页面内的路由中间件')
      },'auth','named-test'
  ],
  // validate:async(route)=>{ // 路由验证
  //   return /^\d+$/.test(route.query.name)
  // }
})
const bookName = ref('')

// 动态组件
const InputComp = resolveComponent('BookIntroInput')

onMounted(()=>{
  bookName.value = route.query.name
})
</script>

<template>
  <div class="book-intro-wrapper">
    <h3>《{{bookName}}》</h3>
    <LazyBookIntroButton :name="bookName"/>
    <component :is="InputComp"/>
    <BookClient/>
    <BookServer/>
    <Comments/>
  </div>
</template>

<style scoped>

</style>
