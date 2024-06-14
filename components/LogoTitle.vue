<script setup lang="ts">
const props = defineProps({
  title:{
    type:String,
    default:''
  },
  size:{
    type:String,
    default:'1rem'
  }
})
</script>

<template>
  <div class="logo-box" :style="{ '--size':size }">
    <img src="@/assets/images/e-duck.png" alt="">
    <p class="logo-title">Mind Scroll</p>
    <p class="split" v-if="title">|</p>
    <p class="title" v-if="title">{{title}}</p>
  </div>
</template>

<style scoped lang="scss">
.logo-box{
  user-select: none;
  cursor: pointer;
  --size:1rem;
  display: flex;
  height:var(--size);
  align-items: center;
  img{
    height:100%;
    margin-right:0.3rem;
  }
  p{
    &.logo-title{
      font-family: Sunflower-Bold;
      font-size:var(--size);
      color:$light-color;
      text-shadow:
          0px 0px 1px $main-middle-dark-color,
          0px 0px 5px $main-middle-light-color,
          0px 0px 10px $main-light-color;
      white-space: nowrap;
    }
    &.split{
      font-family: Sunflower-Bold;
      margin:0px 0.5rem;
      color:$light-purple;
      transform:translateY(-1px);
      text-shadow: none;
    }
    &.title{
      font-family: Alibaba-Health-Bold;
      color:$light-purple;
      background: linear-gradient(-90deg,
          $main-middle-dark-color 0%,
          $main-middle-color 50%,
          $main-middle-light-color 100%,
      );
      flex:1;
      text-align: center;
      margin-left:1rem;
      position:relative;
      box-shadow:
          inset 2px 0px 2px 0px $second-light-color,
          inset -2px 0px 2px 0px $second-light-color
    ;
      &::after{
        content:'';
        position:absolute;
        width:0.5rem;
        height:100%;
        right:0;
        background: $second-light-color;
        clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
      }
      &::before{
        content:'';
        position:absolute;
        width:0.5rem;
        height:100%;
        left:0;
        background: $second-light-color;
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
      }
    }
  }
}
</style>
