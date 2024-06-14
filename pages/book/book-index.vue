<script setup >

const workList = ref([
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {name:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
])
</script>

<template>
  <div>
    <NuxtLayout>
      <HeadNav/>
      <ContentBody>
        <div class="content-box">
          <div class="search-box">
            <div class="search-box-item">
              <collapse-box :title="'筛选：作品 📖'">
                <el-form inline class="filter-form">
                  <el-form-item label="作品名称">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="艺术类型">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="内容类型">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="作品年代">
                    <el-input></el-input>
                  </el-form-item>
                </el-form>
              </collapse-box>
            </div>
            <div class="search-box-item">
              <collapse-box :title="'筛选：创作者 ✍️'">
                <el-form inline class="filter-form">
                  <el-form-item label="创作者">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="国籍">
                    <el-input></el-input>
                  </el-form-item>
                </el-form>
              </collapse-box>
            </div>
          </div>
<!--          搜索结果-->
          <div class="search-result">
            <work-list :data="workList"></work-list>
          </div>
        </div>
      </ContentBody>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
ul{
  background: #6d5583;
}
.search-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .search-box-item{
    min-width:250px;
    flex:1;
    box-sizing: border-box;
    padding:0.5rem;

  }
}
</style>
