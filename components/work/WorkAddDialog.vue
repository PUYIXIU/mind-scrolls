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

// 提交书本信息
async function submit(){
  await $fetch('/api/book/bookEdit',{
    method:'post',
    body:form.value
  })
  ElMessage.success('新增成功')
}

const form = ref({})
defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="visible" :title="title" :show-close=false>
    <el-form :model="form">
      <el-form-item label="📖 名称" prop="title">
        <el-input v-model="form.title" clearable></el-input>
      </el-form-item>
      <el-form-item label="✍️ 作者" prop="author">
        <el-input v-model="form.author" clearable></el-input>
      </el-form-item>
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

</style>
