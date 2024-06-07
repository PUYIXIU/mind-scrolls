<script setup>
const props = defineProps({
  counter:{
    type:Number,
    default:0,
  }
})
</script>

<template>
    <span>{{counter}}</span>
</template>

<style scoped>

</style>
