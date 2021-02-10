<template>
  <div class="container">
    <!-- <el-page-header title="游戏列表"> </el-page-header> -->
    <div class="bread">
      <el-breadcrumb>
        <el-breadcrumb-item>游戏详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="form">
      <el-form
        :disabled="!isEditable"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="名称">
          <div class="name">
            <el-input v-model="form.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="简介">
          <div class="desc">
            <el-input
              type="textarea"
              v-model="form.desc"
              maxlength="200"
              :rows="6"
              :cols="20"
              resize="none"
              show-word-limit
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="头图">
          <div class="pic">
            <el-upload
              action=""
              list-type="picture-card"
              :auto-upload="false"
              :limit="1"
              ref="pictureUpload"
              :before-upload="onCheck"
              :on-change="onUpload"
              accept=".jpg,.png"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <img :src="file.url" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </el-form-item>

        <el-form-item label="限级">
          <div class="level">
            <el-select v-model="form.level">
              <el-option
                v-for="item in this.levels"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>
        </el-form-item>

        <el-form-item label="类型">
          <div class="type">
            <el-radio-group v-model="form.type">
              <el-radio
                v-for="item in this.types"
                :key="item"
                :label="item"
                :value="item"
              ></el-radio>
            </el-radio-group>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
          <el-button @click="onCancel">取消修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  store,
  data() {
    return {
      levels: this.$store.state.levels,
      types: this.$store.state.types,
      os: this.$store.state.os,
      form: {
        ...this.$store.state.game,
      },
      isEditable: this.$store.state.isEditable,
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      pic: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.isEditable) {
        this.$store.commit("submit", this.form);
      }
      this.$router.push("/main");
    },
    onCancel() {
      this.$router.push("/main");
    },
    handleRemove(file) {
      this.$refs.pictureUpload.handleRemove(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      //   console.log(this.dialogImageUrl);
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    onUpload(file) {
      this.form.pic = file.url;
    },
    onCheck(file) {
      console.log(file.type);
    },
  },
  components: {},
};
</script>

<style>
.bread {
  padding-bottom: 40px;
}

.name {
  width: 300px;
  margin-bottom: 20px;
}
.desc {
  width: 400px;
  margin-bottom: 20px;
}

.type {
  margin-bottom: 20px;
}
</style>
