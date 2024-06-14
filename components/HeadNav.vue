<script setup>
import {menuItemsEnum} from "../composables/index.js";

const menuItems = menuItemsEnum

const currentMenu = useMenu()


</script>

<template>
  <div class="wrap">
    <div class="head-wrapper">
      <div class="left">
        <logo-title :size="`1.5rem`"/>
      </div>
      <div class="right">
      </div>
    </div>
    <ul class="menu-bar">
      <li v-for="(item,index) in menuItems" :key="index" @click="currentMenu = item"
          :style="{'--color':item.color}"
          :class="{'active':currentMenu.id == item.id}">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.wrap{
  width:100vw;
  height:100vh;
  position:relative;
  pointer-events: none;
  user-select: none;
  overflow-x: hidden;
  position:absolute;
  z-index:2;
}
.head-wrapper{
  height:$head-nav-height;
  background: #6d5583;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left:$page-left-gap;
  padding-right:0.5rem;
}
.right{
}
.menu-bar{
  position:absolute;
  right:0;
  top:calc($head-nav-height + 1rem);
  li{
    font-size:0.9rem;
    height:2rem;
    line-height: 2rem;
    margin-bottom:1rem;
    width:5.5rem;
    background: var(--color);
    color:#fff;
    padding-left:0.7rem;
    position:relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%,0% 100%, 10% 50%);
    transform:translateX(3.5rem);
    cursor:pointer;
    pointer-events: all;
    box-shadow:inset -10px 0px 0px var(--color);
    transition-property: transform, box-shadow;
    transition-duration:0.2s;
    &.active,&:hover{
      transform:translateX(0rem);
      box-shadow:inset -10px 0px 30px var(--color);
    }
  }
}
</style>
