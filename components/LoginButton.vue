<script setup>

const props = defineProps({
  handleClick:{
    type:Function,
    default:undefined
  },
  type:{
    // main | second | third
    type:String,
    default:'main',
  }
})

</script>

<template>
  <button @click.prevent="handleClick" :class="[type]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button{
  background: $main-middle-light-color;
  &.second{
    background: $main-light-color;
    color:$main-middle-color;
  }
  width:100%;
  border-radius:0.3rem;
  color:$light-color;
  margin-bottom:0.3rem;
  letter-spacing: 0.3rem;
  transform:translateY(0);
  transition-property: transform, box-shadow, filter;
  transition-duration:0.2s;
  box-shadow: 0px 0px 2px $main-middle-light-color;
  &:hover{
    transform:translateY(-2px);
    box-shadow: 0px 0px 5px $main-middle-dark-color;
    filter:brightness(1.05);
  }
}
</style>
