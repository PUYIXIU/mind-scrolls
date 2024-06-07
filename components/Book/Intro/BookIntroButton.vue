<script setup>
const props = defineProps({
  name:{
    type:String,
    default:""
  }
})
</script>

<template>
<button>{{name}}</button>
</template>

<style scoped>

</style>
