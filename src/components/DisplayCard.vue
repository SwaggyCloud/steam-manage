<template>
  <div class="outter">
    <div class="search">
      <div id="searchText">搜索</div>
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @change="handleSearch"
        clearable
      ></el-input>
    </div>
    <div class="selector">
      <div class="text">类型</div>
      <el-select v-model="typeSelected" clearable placeholder="请选择类型">
        <el-option
          v-for="item in this.types"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>

      <div class="text">系统</div>
      <el-select v-model="osSelected" placeholder="请选择" clearable>
        <el-option
          v-for="item in this.os"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>

      <div class="text">级别</div>
      <el-select v-model="levelSelected" placeholder="请选择" clearable>
        <el-option
          v-for="item in this.levels"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>

    <div>
      <el-table
        :data="
          table.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
      >
        <el-table-column prop="pic" label="头图" min-width="40%">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt="" min-width="70" height="70" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="游戏名称"></el-table-column>
        <el-table-column prop="desc" label="简介"> </el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="level" label="限级"></el-table-column>
        <el-table-column prop="os" label="系统"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="margin-top: 15px">
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="table.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  store,
  computed: {
    table: function () {
      let res = this.tableData;
      if (this.search) {
        res = res.filter((item) => item.name === this.search);
      }
      if (this.typeSelected) {
        res = res.filter((item) => item.type === this.typeSelected);
      }
      if (this.osSelected) {
        res = res.filter((item) => item.os === this.osSelected);
      }
      // console.log(this.osSelected);
      if (this.levelSelected) {
        res = res.filter((item) => item.level === this.levelSelected);
      }
      return res;
    },
  },
  methods: {
    handleSearch(input) {
      console.log(input);
      this.search = input;
    },
    handleClick(row) {
      console.log("Here is out of the store", row);
      console.log(row.pic);
      this.$store.commit("view", row);
      this.$router.push("/editGame");
    },
    handleEdit(row) {
      this.$store.commit("edit", row);
      this.$router.push("/editGame");
    },
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  data() {
    return {
      typeSelected: "",
      osSelected: "",
      levelSelected: "",
      input: "",
      search: "",
      levels: this.$store.state.levels,
      types: this.$store.state.types,
      os: this.$store.state.os,
      tableData: this.$store.state.data,
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 1, // 每页的数据条数
    };
  },
};
</script>

<style>
.selector {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 30px;
}

.text {
  display: inline;
  text-align: center;
  padding: 15px;
}
</style>