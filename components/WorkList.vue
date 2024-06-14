<script setup>
const props = defineProps({
  dataList:{
    type:Array,
    default:()=>[]
  }
})
</script>

<template>
  <div class="list-wrapper">
      <work-item v-for="item in dataList"></work-item>
  </div>
</template>

<style scoped lang="scss">

</style>
