<script setup>

const router = useRouter()
const toolBtns = [
  {id:0, title:'📘 字典管理',handle:()=>gotoPage(router, '/setting/setting-dict')},
]

</script>

<template>
  <div>
    <NuxtLayout>
      <ContentBody>
        <div>

        </div>
      </ContentBody>
      <FootNav :btn-list="toolBtns" />
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">

</style>
