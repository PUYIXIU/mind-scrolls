<script setup>

import {copy} from "../../utils/index.js";

const title = ref('➕ 新 增 字 典')
const visible = ref(true)

function open(){
  visible.value = true
}

function close(){
  visible.value = false
  setTimeout(()=>{
    form.value = {}
  },200)
}


// 提交书本信息
async function submit(){
  await $fetch('/api/dict/dictAdd',{
    method:'post',
    body:form.value
  })
  ElMessage.success('新增成功')
}

const form = ref({})
defineExpose({
  open
})

const counter = 0;

// 字典模板
const dictDataTemp = {
  type_id:0,
  label:'新建字典项',
  value:'',
  is_Default:false,
  color:'#c0c0c0'
}


const dictData = ref([
  {type_id:0,label:'等待中',value:'pending',is_Default:true,color:'#ff9a9a'},
  {type_id:0,label:'接收',value:'accept',is_Default:true,color:'#9affe4'},
  {type_id:0,label:'拒绝',value:'refuse',is_Default:true,color:'#f2ff9a'},
])



// 添加字典项
function addDictData(){
  const newDictData = copy(dictDataTemp)
  if(newDictData.length == 0){
    newDictData.isDefault = false
  }
  dictData.value.unshift(newDictData)
}

</script>

<template>
  <el-dialog v-model="visible" :title="title" :show-close="false">
    <el-form :model="form">
      <el-form-item label="📖 字典名" prop="name">
        <el-input v-model="form.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="📖 默认值" prop="default">
        <el-select v-model="form.default" clearable>
          <el-option v-for="option in dictData" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <div class="dialog-form-module">
        <div class="dialog-form-module-title">
          <p class="title">字典项</p>
          <p class="tool-bar">
            <span @click="addDictData">+</span>
            <span>-</span>
          </p>
        </div>
        <div class="dialog-form-body">
          <div v-if="dictData.length>0" v-for="item in dictData" class="dict-value-box" :style="{'--config-color':item.color}">
            <div class="left">
              <p>
                <el-input class="border-input" placeholder="" v-model="item.label">
                  <template #prepend>键</template>
                </el-input>
              </p>
              <p>
                <el-input class="border-input" placeholder="" v-model="item.value">
                  <template #prepend>值</template>
                </el-input>
              </p>
            </div>
            <div class="right">
              <button class="tool-btn" title="选中">选中</button>
              <button class="tool-btn">删除</button>
              <button class="tool-btn color-btn">配色</button>
              <button class="tool-btn">默认</button>
            </div>
          </div>
          <div v-else class="blank-box">
            一条数据都没有...
          </div>
        </div>
      </div>
    </el-form>
    <template #footer>
      <div class="foot-btn-box">
        <button class="dialog-foot-btn submit" @click="submit">确 定 ✔️</button>
        <button class="dialog-foot-btn cancel" @click="close">取 消 ❌</button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.dict-value-box{
  display: flex;
  border:1px solid $b-3;
  padding:0.5rem 0rem;
  background: rgb(from var(--config-color) r g b / 2%);
  &:not(:last-child){
    margin-bottom:0.5rem;
  }
  box-shadow:
    0px 0px 5px rgb(from $b-3 r g b / 20%),
    0px 0px 10px rgb(from $b-3 r g b / 10%),
    0px 0px 20px rgb(from $b-3 r g b / 5%);
  .left{
    flex:1;
    padding:0rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      &:not(:last-child){
        margin-bottom:0.3rem;
      }
      &:not(:first-child){
        margin-top:0.3rem;
      }
    }
  }
  .right{
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    .tool-btn{
      height:1.7rem;
      height:1.7rem;
      width:2.5rem;
      display: grid;
      place-items: center;
      color:$b-10;
      --color:#{$b-2};
      font-weight: bold;
      background: var(--color);
      box-shadow:
          0px 0px 20px rgb(from var(--color) r g b / 40%),
          0px 0px 10px rgb(from var(--color) r g b / 20%),
          0px 0px 5px rgb(from var(--color) r g b / 10%);
      &:nth-child(2n){--color:#{$pp-7}}
      &:not(:last-child){margin-bottom:0.3rem;}
      &.color-btn{
        --color:var(--config-color);
      }
    }
  }
}
.blank-box{
  display: flex;
  border:1px solid $b-3;
  height:5rem;
  display: grid;
  place-items: center;
  font-weight: bold;
  color:rgb(from $b-1 r g b /25%);
  box-shadow:
      0px 0px 5px rgb(from $b-3 r g b / 20%),
      0px 0px 10px rgb(from $b-3 r g b / 10%),
      0px 0px 20px rgb(from $b-3 r g b / 5%);
}
</style>
