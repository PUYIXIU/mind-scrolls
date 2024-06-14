<script setup>

const props = defineProps({
  error: Object
})

function handleError(){
  clearError({redirect:'/'})
}
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <h2>{{ error?.statusMessage }}</h2>
    <h2>{{ error?.data }}</h2>
    <button class="border-2 p-1" @click="handleError">清除错误</button>
  </div>
</template>
