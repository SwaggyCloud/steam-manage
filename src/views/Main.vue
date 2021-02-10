<template>
  <div class="container">
    <!-- <el-page-header title="游戏列表"> </el-page-header> -->
    <div class="bread">
      <el-breadcrumb>
        <el-breadcrumb-item>游戏列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <div>Welcome to Steamify</div> -->
    <div class="card" style="width: 90%">
      <el-card class="box-card">
        <Card />
      </el-card>
    </div>
  </div>
</template>

<script>
import Card from "../components/DisplayCard";
export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {
    handleSearch() {
      console.log(this.input);
    },
  },
};
</script>

<style>
.search {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 30%;
}
.bread {
  margin-bottom: 20px;
}
.card {
  margin-top: 50px;
}

#searchText {
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
  /* padding-right: 10px; */
  width: 60px;
  /* font-size: 10px; */
}
</style>