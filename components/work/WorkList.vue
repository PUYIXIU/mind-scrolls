<script setup>
const props = defineProps({
  data:{
    type:Array,
    default:()=>[]
  }
})
</script>

<template>
  <div class="work-list-wrapper">
    <work-item v-for="item in data" :data="item"/>
  </div>
</template>

<style scoped lang="scss">
.work-list-wrapper{
  display: flex;
  flex-wrap: wrap;
  width:100%;
}
</style>
