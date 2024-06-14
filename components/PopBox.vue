<script setup lang="ts">
// 弹窗组件
const props = defineProps({
  title:{
    type:String,
    default:''
  }
})
</script>

<template>
  <div class="pop-box-wrapper">
    <div class="pop-box-head">
      <logo-title :title="title"></logo-title>
      <p class="split-line"></p>
    </div>
    <div class="pop-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pop-box-wrapper{
  cursor: pointer;
  background-color: $second-light-color;
  display: flex;
  flex-direction: column;
  padding:1rem;
  padding-bottom:1.3rem;
  border-radius:0.7rem;
  min-width:300px;
  width:fit-content;
  max-width:70%;
  transform:translateY(0);
  transition-property: transform;
  transition-duration: 0.2s;
  &:hover{
    transform:translateY(-3px);
  }
}

.pop-box-head{
  height:1.7rem;
  position:relative;
  .split-line{
    position:absolute;
    height:0.2rem;
    width:100%;
    bottom:0;
    border-radius: 0.1rem;
    background: linear-gradient(-90deg,
        $main-middle-dark-color 0%,
        $main-middle-color 50%,
        $main-light-color 100%,
    );
  }
}
</style>
