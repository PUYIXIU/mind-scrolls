<script setup >
</script>

<template>
  <div class="default-layout-wrapper">
      <HeadNav/>
      <slot/>
  </div>
</template>

<style scoped lang="scss">
.default-layout-wrapper {
  background: repeating-linear-gradient(
          45deg,
          $dark-color 0,
          $main-dark-color 50%,
          $main-middle-color 100%,
  );
  min-height:100vh;
  display: flex;
  justify-content: center;
  position:relative;
}
</style>
