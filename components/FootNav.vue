<script setup>
const props = defineProps({
  btnList:{
    type:Array,
    default:()=>[]
  }
})
</script>

<template>
  <div class="foot-wrapper">
    <div class="left">
      <p v-for="(btn,i) in btnList"  @click="btn.handle"
         class="btn-item" :style="{'--color':colorList[i%colorList.length]}">
        {{btn.title}}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.foot-wrapper{
  width:100%;
  height:$foot-page-height;
  position:fixed;
  bottom:0;
  box-shadow:
      0px -1px 0px 1px $main-middle-color,
      inset 0px 3px 10px 0px rgb(from $dark-color r g b / 25%)
;
  background:$main-dark-color;
  display: flex;
}
.left{
  display: flex;
  align-items: center;;
  line-height:$foot-page-height;
  .btn-item{
    user-select: none;
    cursor: pointer;
    font-size: 0.9rem;
    padding:0 0.5rem;
    background: var(--color);
    color:$light-color;
    box-shadow:
        inset 3px 3px 10px 0px rgb(from $light-color r g b /15%);
    transition-property: padding,background-color,color;
    transition-duration: 0.2s;
    &:hover{
      background:$second-light-color;
      color:var(--color);
      padding:0 1rem;
      font-weight: bold;
    }

  }
}
</style>
