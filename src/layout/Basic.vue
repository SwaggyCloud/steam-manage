<template>
  <el-container style="height: 100%">
    <el-container>
      <el-aside :width="isCollapse ? '50px' : '200px'">
        <div>
          <el-menu
            :router="true"
            text-color="black"
            :collapse="isCollapse"
            :collapse-transition="false"
          >
            <div class="avatar" @click="handleToggle">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
            <el-menu-item index="main">
              <i class="el-icon-menu"></i>
              <span>游戏列表</span>
            </el-menu-item>
            <!-- <el-menu-item index="edit">
              <i class="el-icon-odometer"></i>
              <span slot="title">管理</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="user">
              <i class="el-icon-user-solid"></i>
              <span slot="title">信息</span>
            </el-menu-item> -->
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleToggle() {
      console.log("should change the status", this.isCollapse);
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
.el-main {
  background-color: #ffffff;
}
.el-aside {
  background-color: #ffffff;
}
.el-footer {
  background-color: #ffffff;
}
.avatar {
  cursor: pointer;
  margin-left: 10px;
}
</style>