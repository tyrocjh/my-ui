<template>
  <div class="d-upload-container">
    <el-upload
      class="d-upload"
      ref="dUpload"
      :limit="limit"
      :accept="accept"
      :multiple="multiple"
      :file-list="defaultFileList"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      :action="action"
      :list-type="listType"
      :drag="drag"
      :on-preview="handlePreview"
    >
      <el-button
        v-if="listType === 'text'"
        type="primary"
        icon="el-icon-upload"
      >
        点击上传
      </el-button>
      <el-button
        v-if="listType === 'picture'"
        type="primary"
        icon="el-icon-upload"
      >
        点击上传
      </el-button>
      <div v-else class="d-icon-center">
        <div v-if="!drag">
          <i v-if="listType !== 'text'" class="el-icon-plus"></i>
        </div>
        <div v-else>
          <i class="el-icon-upload"></i>
          <div
            class="el-upload__text"
            style="position: relative; top: -120px; font-size: 12px"
          >
            拖拽上传，或<em>点击上传</em>
          </div>
        </div>
      </div>
      <template #tip>
        <div class="el-upload__tip">{{ tips }}</div>
      </template>
    </el-upload>
    
    <!-- 预览 -->
    <el-dialog :visible.sync="dialogVisible">
      <img w-full :src="dialogImageUrl" />
    </el-dialog>
  </div>
</template>

<script>
import { Message } from 'element-ui'

let UploadObject = {}

export default {
  name: 'DUpload',
  props: {
    tips: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: '',
    },
    limit: {
      type: Number,
      default: 5,
    },
    accept: {
      type: String,
      default: '',
    },
    fileList: {
      type: Array,
      default: null,
    },
    listType: {
      type: String,
      default: 'picture-card',
    },
    drag: {
      type: Boolean,
      default: false,
    },
    fileType: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {
      defaultFileList: [],
      multiple: false,
      dialogVisible: false,
      dialogImageUrl: '',
    }
  },
  mounted() {
    this.defaultFileList = this.fileList
    this.setFileList()
    if (this.limit > 1) {
      this.multiple = true
    }
  },
  methods: {
    handleSuccess(response, file) {
      const uid = file.uid,
        objKeyArr = Object.keys(UploadObject)

      if (!response.flag) {
        return this.$message.error(
          response.retMsg || '请求失败,请重新上传文件!'
        )
      }
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (UploadObject[objKeyArr[i]].uid === uid) {
          UploadObject[objKeyArr[i]].url = response.datas.url //附件
          UploadObject[objKeyArr[i]].hasSuccess = true
        }
      }
      setTimeout(() => {
        this.$emit('success-callback', UploadObject)
      }, 0)
    },
    handleRemove(file) {
      const url = file.url,
        objKeyArr = Object.keys(UploadObject)

      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (UploadObject[objKeyArr[i]].url === url) {
          delete UploadObject[objKeyArr[i]]
          break
        }
      }
      this.$emit('remove-callback', UploadObject)
    },
    async beforeUpload(file) {
      // 过滤黑名单格式的文件
      const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1),
        blackList = ['exe']

      if (blackList.indexOf(fileSuffix) > -1) {
        Message.warning({
          message: '不能上传此种格式的文件',
          type: 'warning',
        })
        throw new Error('不能上传此种格式的文件')
      }
      if (this.fileType === 'all') {
        if (file.size > 1048576 * 50) {
          this.$message.error('单个文件不能超过50mb')
          throw new Error('单个文件不能超过50mb')
        }
      } else if (this.fileType === 'pic') {
        if (file.size > 1048576 * 2) {
          this.$message.error('单个图片不能超过2mb')
          throw new Error('单个图片不能超过2mb')
        }
      }
      const fileName = file.uid
      let a = document.createElement('a')

      a.href = window.URL.createObjectURL(file)
      UploadObject[fileName] = {
        hasSuccess: false,
        uid: file.uid,
        name: file.name,
      }
    },
    handleSubmit() {
      const arr = Object.keys(UploadObject).map(v => UploadObject[v])

      if (!this.checkAllSuccess()) {
        this.$message.warning(
          '请等待所有文件上传成功。如果文件上传失败，请手动删除错误文件后，重新上传!'
        )
        return
      }
      this.$emit('success-callback', arr)
    },
    handleExceed(files) {
      this.$message.warning(
        `当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，上传失败，请重新选择`
      )
    },
    setFileList() {
      if (this.defaultFileList.length == 0) {
        return false
      }
      this.defaultFileList.forEach((item, index) => {
        item.uid = index
        UploadObject[index] = item
      })
    },
    checkAllSuccess() {
      return Object.keys(UploadObject).every(
        item => UploadObject[item].hasSuccess
      )
    },
    handlePreview(file) {
      this.dialogVisible = true
      this.dialogImageUrl = file.url
    },
  },
}
</script>

<style lang="scss">
.d-upload-container {
  width: 500px;
  .d-upload .el-upload {
    text-align: left;
  }
  .d-upload .el-upload-dragger {
    width: 100%;
    height: auto;
    background-color: #fbfdff;
    border: none;
    border-radius: 6px;
  }
  .d-icon-center {
    text-align: center;
  }
}
</style>
