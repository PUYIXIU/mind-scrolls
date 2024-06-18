<script setup >

const workList = ref([
  {title:'《罪与罚》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {title:'《ABC》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {title:'《ABC》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {title:'《ABC》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {title:'《ABC》',author:"陀思妥耶夫斯基",nation:"俄国",},
  {title:'《ABC》',author:"陀思妥耶夫斯基",nation:"俄国",},
])

// 点击用的按钮
import WorkList from "../../components/work/WorkList.vue";

const toolBtns = [
  {id:0, title:'➕ 新增', handle:openAddDialog},
  {id:1, title:'❌ 删除'},
]

const workAddDialogRef = ref()
// // 新增弹窗
function openAddDialog(){
  workAddDialogRef.value.open()
}
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
            <div class="result-content">
              <div class="result-head">
                筛选结果
              </div>
              <div class="result-body">
                <work-list :data="workList" />
              </div>
            </div>
          </div>
        </div>
      </ContentBody>
      <FootNav :btn-list="toolBtns" />
      <work-add-dialog ref="workAddDialogRef" />
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
ul{
  background: $main-middle-light-color;
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
.search-result{
  padding:0.5rem;
  .result-content{
    padding-bottom:0.3rem;
    border-radius: 0.3rem;
    background: $main-middle-color;
  }
  .result-head{
    border-radius: 0.3rem;
    color:$second-light-color;
    padding-left:0.3rem;
    padding:0.3rem;
  }
  .result-body{
    max-height:80vh;
    background: $main-dark-color;
    margin-left:0.3rem;
    margin-right:0.3rem;
    padding:0.5rem;
    overflow-y: scroll;
  }
}
</style>
