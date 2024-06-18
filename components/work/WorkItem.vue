<script setup>
const props = defineProps({
  data:{
    type:Object,
    default:()=>{}
  }
})
</script>

<template>
  <div class="work-item">
    <h3>{{data.title}}</h3>
    <div class="work-content">
      <div class="left">
        <img src="@/assets/images/TestBookFace.jpg" alt="">
      </div>
      <div class="right">
        <div class="meta work">
          <div class="meta-entry">
            <p class="key pp1">类型</p>
            <p class="value">
              <span :style="{'--color':'#95aaef'}">信仰</span>
              <span :style="{'--color':'#80d9d1'}">心理</span>
              <span :style="{'--color':'#d98080'}">犯罪</span>
            </p>
          </div>
          <div class="meta-entry">
            <p class="key pp1">年代</p>
            <p class="value">十八世纪末</p>
          </div>
        </div>
        <div class="meta author">
          <div class="meta-entry">
            <p class="key pp2">作者</p>
            <p class="value">陀思妥耶夫斯基</p>
          </div>
          <div class="meta-entry">
            <p class="key pp2">国籍</p>
            <p class="value">俄罗斯</p>
          </div>
        </div>
        <div class="meta status">
          <div class="meta-entry">
            <p class="key pp3">状态</p>
            <p class="value">待看</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-item{
  user-select: none;
  border:2px solid rgb(from $main-light-color r g b / 15%);
  box-shadow:
      0px 0px 0.3rem $dark-color;
  border-radius: 0.3rem;
  padding:0.5rem;
  display: flex;
  flex-direction: column;
  $lw:7.5rem;
  $rw:10rem;
  $r:0.7;
  min-width:calc($lw + $rw);
  @media screen and (min-width: 1024px) {
    max-width:calc(20% - 0.3rem * 2);
  }
  @media screen and (min-width: 400px) and (max-width: 999px){
    max-width:calc(50% - 0.3rem * 2);
  }
  @media screen and (max-width: 550px) {
    max-width: calc(100% - 0.3rem * 2);
  }
  flex:1;

  h3{
    color:$light-purple;
    font-weight: bold;
    font-size:0.9rem;
    height:1.5rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    background: #6d5583;
    padding-right:1rem;
    padding-left:0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%);
    box-shadow:
        inset 5px  0px 0px 0px $main-middle-dark-color,
        inset 2px  0px 0px 0px $main-middle-light-color;
  }
  .work-content{
    display: flex;
  }

  .left{
    display: flex;
    align-items: center;
    img{
      width:$lw;
      height:calc($lw / $r);
      object-fit: contain;
      box-shadow:0px 0px 0.3rem #000;
      cursor:pointer;
    }
  }
  .right{
    flex:1;
    padding:0.3rem;
    padding-top:0.1rem;

  }
  margin:0.3rem;
}

.meta{
  margin-bottom:0.5rem;
  &:last-child{margin-bottom:0}
  padding:0.3rem 0.5rem;
  color:$light-purple;
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content: space-around;
  &.work{background:rgb(from $pp-1 r g b /30% );}
  &.author{background:rgb(from $pp-2 r g b /30% );}
  &.status{background:rgb(from $pp-3 r g b /30% );}
  .meta-entry{
    display: flex;
    margin-bottom:0.3rem;
    &:last-child{margin-bottom: 0}
    line-height: 1.3rem;
    .key{
      font-size:0.85rem;
      padding:0rem 0.3rem;
      padding-left:0.1rem;
      border-radius: 0.3rem;
      color:$light-purple;
      text-align: center;
      white-space: nowrap;
      &.pp1{color:$pp-7}
      &.pp2{color: $main-light-color;}
      &.pp3{color:$second-light-color;}
    }

    .value{
      font-size:0.85rem;
      margin-left:0.3rem;
      overflow-x: hidden;
      span{
        font-size:0.85rem;
        margin-right:0.3rem;
        padding:0.1rem 0.3rem;
        border-radius: 0.3rem;
        background-color:rgb(from var(--color) r g b / 20%);
        color:var(--color);
      }
    }
  }
}
</style>
