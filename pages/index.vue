<script setup lang="ts">

import {ref} from 'vue'
import {testTsFun} from "../utils";
/**
 * 计数器
 */
const counter = ref<number>(0);
const testTs = ref<string>(testTsFun())

</script>

<template>

<div>
  <NuxtLayout>
    <NuxtLink to="/book/book-list">list</NuxtLink>
    <hr>
    <span class="text-4xl">{{testTs}}</span>
    <hr>
    <div>
      <button @click="counter--">-</button>
      <CustomCounter :counter="counter" />
      <button @click="counter++">+</button>
    </div>
    <BookServer/>
  </NuxtLayout>
</div>
</template>

<style scoped>

</style>
