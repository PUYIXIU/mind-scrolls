<script setup>
import {setPageLayout} from "nuxt/app";
import {onMounted} from "vue";
setPageLayout('list')

</script>

<template>
    <NuxtLayout>
      <div class="list-wrapper">
        <ul>
          <li><NuxtLink to="/book/book-intro?name=123">《123》</NuxtLink></li>
          <li><NuxtLink to="/book/book-intro?name=abc">《abc》</NuxtLink></li>
          <li><NuxtLink to="/book/book-intro?name=xyz">《xyz》</NuxtLink></li>
        </ul>
        <el-button>123</el-button>
      </div>
    </NuxtLayout>
</template>

<style scoped>

</style>
