<script setup>
const props = defineProps({
  bookData:{
    type:Object,
    value:()=>{}
  }
})
</script>

<template>
  <div>
    <ul>
      <li>
        <span>编号：</span>
        <span>{{bookData.id}}</span>
      </li>
      <li>
        <span>详情：</span>
        <span>{{bookData.name}}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
