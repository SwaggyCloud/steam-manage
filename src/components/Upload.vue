<template>
  <div class="outter">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :limit="1"
      ref="pictureUpload"
      :before-upload="onCheck"
      :on-change="onUpload"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
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
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      pic: "",
    };
  },
  methods: {
    handleRemove(file) {
      this.$refs.pictureUpload.handleRemove(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    onUpload(file, fileList) {
      console.log(file.url);
      this.$store.commit("upload", file.url.slice(5));
      console.log(fileList);
    },
    onCheck(file) {
      console.log(file.type);
    },
  },
  store,
};
</script>
