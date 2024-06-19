<script setup >
const router = useRouter()
const toolBtns = [
  {id:0, title:'🔙 返回',handle:()=>gotoPage(router, '/setting/setting-index')},
  {id:1, title:'➕ 新建字典',handle:()=>gotoPage(router, '/setting/setting-index')},
]

const data = ref([
  {
    _id:0,key:'work_type',name:'表现类型',
    children:[
      {label:'书籍',value:0,default:true},
      {label:'游戏',value:1},
      {label:'影视',value:2},
    ]
  },
  {
    _id:1,key:'content_type',name:'内容类型',
    children:[
      {label:'经典',value:0,default:true},
      {label:'犯罪',value:1},
      {label:'心理',value:2},
    ]
  },
])
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentBody title="📘 字典管理">
        <el-table :data="data">
          <el-table-column type="selection" />
          <el-table-column prop="name" label="字典名" />
          <el-table-column prop="key" label="字典键" />
          <el-table-column label="字典值">
            <template #default="{row}">
              <div class="tag-box">
                <p v-for="tag in row.children">
                  {{tag.label}}
                </p>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </ContentBody>
      <FootNav :btn-list="toolBtns" />

    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">

</style>
