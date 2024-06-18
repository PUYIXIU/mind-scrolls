<script setup>

const title = ref('➕ 新 增')
const visible = ref(false)

function open(){
  visible.value = true
}
function close(){
  visible.value = false
  setTimeout(()=>{
    form.value = {}
  },200)
}
const form = ref({
  name:'',
  author:''
})
defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="visible" :title="title" :show-close=false>
    <el-form :model="form">
      <el-form-item label="📖 名称" prop="name">
        <el-input v-model="form.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="✍️ 作者" prop="author">
        <el-input v-model="form.author" clearable></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="foot-btn-box">
        <button class="dialog-foot-btn submit">确 定 ✔️</button>
        <button class="dialog-foot-btn cancel" @click="close">取 消 ❌</button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>
