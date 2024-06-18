<script setup lang="ts">

</script>

<template>
  <div class="content-body">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.content-body{
  //position:absolute;
  width:100%;
  padding-left:$page-left-gap;
  padding-right:2rem;
  padding-top:calc($head-nav-height + 1rem);
  padding-bottom:calc($foot-page-height + 1rem);
}
</style>
