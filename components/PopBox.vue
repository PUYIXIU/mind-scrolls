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
      <logo-title></logo-title>
    </div>
    <div class="pop-box-content">
      <slot></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.pop-box-wrapper{
  background-color: $second-light-color;
  display: flex;
  flex-direction: column;
  width:fit-content;
  padding:1rem;
  border-radius:0.7rem;
}

.pop-box-head{

}
.pop-box-content{

}
</style>
