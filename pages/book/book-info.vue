<script setup>
definePageMeta({
  middleware:[
    async function(to, from){
      let bookId = to.query.id
      if(bookId == undefined){
        return navigatorTo('/')
      }
    }
  ],
})

const headers = useRequestHeaders(['cookie'])

const route = useRoute()
const bookId = route.query.id

const {data:bookIntro} = await useFetch(`/api/book/${bookId}`,{headers})
useSeoMeta({
  title:bookIntro.value.name,
  ogTitle:bookIntro.value.name,
  description:bookIntro.value.name,
  ogDescription:bookIntro.value.name,
})


const counter = ref(0)
const {data:hotLevel, status:hotStatus, panding:hotPending} = await useLazyFetch('/api/book/getHotLevel',{
  method:'get',
  query:{  // 监听到counter的变化，客户端重新fetch数据
    counter:counter
  },
  immediate: false, // 在定义时是否执行
  // watch:[counter], // 监听到counter的变化，服务端重新获取页面
})
</script>

<template>
  <div>
    <NuxtLayout>
      <BookIntro :book-data="bookIntro"></BookIntro>
      <div class="comment">
        <el-button @click="counter++">点赞
          <span v-if="hotStatus == 'success'">{{hotLevel}}</span>
          <span v-else-if="hotPending">...</span>
          <span v-else>X</span>

          <span>【{{typeof hotLevel}}】</span>
        </el-button>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">

</style>
