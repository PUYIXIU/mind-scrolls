<script setup>
const props = defineProps({
  title:{
    type:String,
    default:''
  }
})
</script>

<template>
  <div class="content-body">
    <div class="title">
      <p v-if="title" >{{title}}</p>
    </div>
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
.title{
  p{
    color:rgb(from $second-light-color r g b / 90%);
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    padding: 0.2rem 0.3rem;
    border: 2px solid rgb(from $second-light-color r g b / 25%);
  }
}
</style>
