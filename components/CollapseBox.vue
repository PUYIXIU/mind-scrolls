<script setup>
const props = defineProps({
  title:{
    type:String,
    default:'折叠框标题'
  }
})
</script>

<template>
  <div class="collapse-box">
    <div class="head">
      <p class="title">{{title}}</p>
      <p class="collapse-btn"></p>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.collapse-box{
  background: $main-middle-color;
  padding:0.3rem;
  font-size:0.8rem;
  border-radius: 0.3rem;
}
.head{
  background: $main-middle-color;
  color:$second-light-color;
  .title{
    padding-bottom:0.3rem;
    padding-left:0.3rem;
  }
  .collapse-btn{

  }
}
.box-body{
  background: $main-dark-color;
  padding:0.5rem;

}
</style>
