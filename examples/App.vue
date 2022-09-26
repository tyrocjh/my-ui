<template>
  <div id="app">
    <d-pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.pageIndex"
      :limit.sync="listQuery.pageSize"
    />

    <br /><br />

    <d-table
      :tableList="tableList"
      rowKey="id"
      :tableHeader="tableHeader"
      :stripe="true"
    >
      <template slot="a" slot-scope="{ scope }">
        {{ scope.row.a ? "通过" : "不通过" }}
      </template>
      <template slot="operates">
        <span>操作按钮</span>
      </template>
    </d-table>

    <br /><br />

    <el-button type="primary" @click="handleAdd">打开对话框</el-button>

    <br /><br />

    <div class="components-title">1.默认样式：</div>
    <d-upload
      ref="upload"
      :fileList="uploadFileBeans"
      @success-callback="fileChange"
      @remove-callback="fileChange"
    />

    <div class="components-title">2.按钮形式：</div>
    <d-upload
      ref="upload"
      :limit="6"
      :fileType="'pic'"
      :fileList="uploadFileBeans"
      @success-callback="fileChange"
      @remove-callback="fileChange"
      :listType="'text'"
    />

    <div class="components-title">3.文字提示：</div>
    <d-upload
      ref="upload"
      :limit="6"
      :fileType="'pic'"
      :fileList="uploadFileBeans"
      @success-callback="fileChange"
      @remove-callback="fileChange"
      :tips="'支持上传不大于2MB的图片格式文件'"
    />

    <div class="components-title">4.可拖拽：</div>
    <d-upload
      ref="upload"
      :fileList="uploadFileBeans"
      @success-callback="fileChange"
      @remove-callback="fileChange"
      :drag="true"
    />

    <div class="components-title">5.缩略图模式：</div>
    <d-upload
      ref="upload"
      :fileList="uploadFileBeans"
      @success-callback="fileChange"
      @remove-callback="fileChange"
      :listType="'picture'"
    />

    <br /><br />

    <el-form>
      <el-form-item>
        <div>少于十个的</div>
        <d-select
          v-model="selectValue1"
          :options="options"
        >
          <template v-slot:option="scope">
            <span>{{ scope.row.label }}</span>
            <span>（{{ scope.row.value }}）</span>
          </template>
        </d-select>
      </el-form-item>
      <el-form-item>
        <div>可清空功能（只支持单选）</div>
        <d-select
          v-model="selectValue2"
          :options="options"
          :clearable="true"
        />
      </el-form-item>
      <el-form-item>
        <div>可搜索功能</div>
        <d-select
          v-model="selectValue3"
          :options="options"
          :filterable="true"
        />
      </el-form-item>
      <el-form-item>
        <div>分页功能</div>
        <d-select
          v-model="selectValue4"
          :options="options"
          :filterable="true"
          :showPagination="true"
          :total="total"
          :page="listQuery.pageIndex"
          :limit="listQuery.pageSize"
          @pagination="getHotelList"
        />
      </el-form-item>
      <el-form-item>
        <div>多选一行展示功能</div>
        <d-select
          v-model="selectValue5"
          :options="options"
          multiple
          collapse-tags
        />
      </el-form-item>
      <el-form-item>
        <div>多选多行展示功能</div>
        <d-select
          v-model="selectValue6"
          :options="options"
          multiple
        />
      </el-form-item>
      <el-form-item>
        <div>不可编辑</div>
        <d-select
          v-model="selectValue7"
          :options="options"
          disabled
        />
      </el-form-item>
      <el-form-item>
        <div>带禁用项</div>
        <d-select
          v-model="selectValue8"
          :option-props="propsType"
          :options="options1"
        />
      </el-form-item>
      <el-form-item>
        <div>带分组类别</div>
        <d-select
          v-model="selectValue9"
          :is-option-group="true"
          :option-group-props="propsGroupType"
          :option-props="propsGroupChildType"
          :options="options2"
        />
      </el-form-item>
    </el-form>

    <br /><br />

    <d-progress :percentage="50" />

    <br /><br />

    <d-steps :time-line-data-list="timeLineDataList" />

    <d-steps :time-line-data-list="timeLineDataList" :direction="direction" />

    <br /><br />

    <d-svg-icon icon-class="eye" />

    <br /><br />

    <d-input-password
      v-model="password"
      style="width: 300px"
      @update:clear="password = $event"
      @update:verify="verifyRes = $event"
      @change="changeFn1"
    >
    </d-input-password>

    <!-- 对话框 -->
    <d-dialog :show.sync="roomDlgShow" title="对话框" width="680px">
      内容
    </d-dialog>

    <d-backtop></d-backtop>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      listQuery: {
        pagination: true,
        pageIndex: 1,
        pageSize: 15,
      },
      total: 20,
      roomDlgShow: false,
      password: '',
      verifyRes: false,
      timeLineDataList: [
        { time: '2021-04-01', color: 'A', label: '发起申请', info: '张三' },
        { time: '2021-05-01', color: 'B', label: '直接上级审批', info: '李四' },
        { time: '2021-06-01', color: 'D', label: '分管中心审批', info: '王五' },
        { time: '2021-07-01', color: 'A', label: '完成' },
      ],
      direction: 'vertical',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      options1: [
        {
          name: '选项1',
          id: '黄金糕',
          disabled: true,
        },
        {
          name: '选项2',
          id: '双皮奶',
          disabled: true,
        },
        {
          name: '选项3',
          id: '蚵仔煎',
        },
        {
          name: '选项4',
          id: '龙须面',
        },
        {
          name: '选项5',
          id: '北京烤鸭',
        },
      ],
      options2: [
        {
          label1: '热门城市',
          options: [
            {
              id: 'Shanghai',
              name: '上海',
            },
            {
              id: 'Beijing',
              name: '北京',
            },
          ],
        },
        {
          label1: '城市名',
          options: [
            {
              id: 'Chengdu',
              name: '成都',
            },
            {
              id: 'Shenzhen',
              name: '深圳',
            },
            {
              id: 'Guangzhou',
              name: '广州',
            },
            {
              id: 'Dalian',
              name: '大连',
            },
          ],
        },
      ],
      selectValue1: '',
      selectValue2: '',
      selectValue3: '',
      selectValue4: '',
      selectValue5: '',
      selectValue6: '',
      selectValue7: '',
      selectValue8: '',
      selectValue9: '',
      propsType: {
        key: 'id',
        label: 'name',
        value: 'id'
      },
      propsGroupType: {
        label: 'label1',
      },
      propsGroupChildType: {
        label: 'name',
        value: 'id'
      },
      tableList: [
        { 'id': 1, age: 16, name: '11', $selectable: false, children: [{ 'id': 13, age: 16, name: '11' }], a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 2, age: 16, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 3, age: 16, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 4, age: 16, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 5, age: 16, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 6, age: 12, name: '11', a: 0, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 7, age: 16, name: '11', a: 0, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 8, age: 14, name: '11', a: 0, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 9, age: 11, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 11, age: 13, name: 'Hello, worldHello, worldHello, world', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 }
      ],
      tableHeader: [
        { type: 'selection', fixed: 'left', reserveSelection: true },
        { type: 'index' },
        { prop: 'age', label: '年龄', sortable: true, width: '200px' },
        { prop: 'name', label: '姓名', width: '100px' },
        { slot: 'a', label: 'a', width: '200px' },
        { prop: 'b', label: 'b', width: '200px' },
        { prop: 'c', label: 'c', width: '200px' },
        { prop: 'd', label: 'd', width: '200px' },
        { prop: 'e', label: 'e', width: '200px' },
        { prop: 'f', label: 'f', width: '200px' },
        { prop: 'g', label: 'g', width: '200px' },
        {
          label: '操作',
          slot: 'operates',
          width: '200px'
        }
      ],
      uploadFileBeans: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    handleAdd() {
      this.roomDlgShow = true
    },
    changeFn1() {
      console.log(this.password, this.verifyRes)
    },
    getHotelList() {
      this.list = this.options
      this.total = 20
    },
    fileChange(UploadObject) {
      const fileList = Object.values(UploadObject);

      this.uploadFileBeans.value = fileList;
    },
  },
}
</script>
