<script setup>

const queryForm = ref({
  name:'123',
  author:'456',
})

// 执行查询
function onSubmit(){
  getList()
}

const listData = ref([])
async function getList(){
  let {data} = await $fetch('/api/book/book-list',{
    method:'get',
    query:queryForm.value,
  })
  listData.value = data
}
async function routeCatch(){
  await $fetch('/api/book/xxxx/hahaha')
}

onMounted(()=>{
  getList()
  routeCatch()
})

// 获取书籍详情
async function getBookById(row){
  let {data} = await $fetch(`/api/book/${row.id}`)
}


async function deleteById(row){
  await $fetch(`/api/book/delete`,{
    method:'post',
    body:{id:row.id},
    headers:{
      Authorization: `token 1234567`,
    }
  })
}


</script>

<template>
  <div>
    <!--  要使用transition效果，必须要有根组件 -->
    <NuxtLayout>
      <div class="search-head">
        <el-form :model="queryForm" inline>
          <el-form-item label="类型" prop="workType">
            <!--          <el-select >-->
            <!--            <el-option></el-option>-->
            <!--          </el-select>-->
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="queryForm.name" style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item label="创作者" prop="author">
            <el-input v-model="queryForm.author" style="width: 130px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="list-body">
        <el-table :data="listData">
          <el-table-column type="index" label="No" align="center" />
          <el-table-column prop="name" label="Name" align="center" />
          <el-table-column prop="author" label="Author" align="center" />
          <el-table-column label="Options" align="center" >
            <template #default="{row}">
              <el-button link type="primary" >
                <a :href="`/book/book-info?id=${row.id}`" target="_blank">详情</a>
              </el-button>
              <el-button link type="danger" @click="deleteById(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div>
        <h1>Test</h1>
        <h1>{{name}}</h1>
        <p>{{date}}</p>
        <label for="locale-chooser">预览语言环境： </label>
        <select id="local-chooser" v-model="locale">
          <option v-for="locale of locales" :key="locale" :value="locale">
            {{locale}}
          </option>
        </select>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.search-head{
  height:5rem;
}
</style>
