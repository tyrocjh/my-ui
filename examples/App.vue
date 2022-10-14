<template>
  <div id="app">
    <d-pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.pageIndex"
      :limit.sync="listQuery.pageSize"
    />

    <br /><br />

    <d-input-password
      v-model="password"
      :status.sync="passwordStatus"
      @change="handleChange"
      @handle-clean="handleClean"
    >
    </d-input-password>

    <br /><br />

    <d-table
      :header-list="tableHeader"
      :table-list="tableList"
      row-key="id"
      placeholder=""
      @selection-change="selectionChange"
      @select-all="selectAll"
    >
      <el-table-column slot="a" label="a" prop="a" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.a ? "通过" : "不通过" }}
        </template>
      </el-table-column>
      <el-table-column slot="operates" label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)">查看</el-button>
        </template>
      </el-table-column>
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
          :page.sync="listQuery.pageIndex"
          :limit.sync="listQuery.pageSize"
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

    <d-steps :data-list="timeLineDataList" :active="1" :step-props="stepProps" />

    <br /><br />

    <d-steps :data-list="timeLineDataList" :active="1" :step-props="stepProps" direction="vertical" :space="80" />

    <br /><br />

    <d-svg-icon icon-class="eye" />

    <br /><br />

    <d-dialog :visible.sync="roomDlgShow" title="对话框" width="680px">
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
      passwordStatus: false,
      timeLineDataList: [
        { time: '2021-04-01', title: '发起申请', info: '张三' },
        { time: '2021-05-01', title: '直接上级审批', info: '李四' },
        { time: '2021-06-01', title: '分管中心审批', info: '王五' },
        { time: '2021-07-01', title: '完成' },
      ],
      stepProps: {
        title: 'title',
        descript: 'info',
        time: 'time',
      },
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
        { 'id': 1, age: 16, name: 'undefined', $selectable: false, children: [{ 'id': 13, age: 16, name: '11' }], a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 2, age: 16, name: '0', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 3, age: 16, name: 0, a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 4, age: 16, name: '11', a: 123, b: 5555, c: '', d: 89, e: 89, f: 89, g: 89 },
        { 'id': 5, age: 16, name: undefined, a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 6, age: 12, name: null, a: 0, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 7, age: 16, name: '', a: 0, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 8, age: 14, name: '11', a: 0, b: '', c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 9, age: 11, name: '11', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 },
        { 'id': 11, age: 13, name: 'Hello, worldHello, worldHello, world', a: 123, b: 5555, c: 89, d: 89, e: 89, f: 89, g: 89 }
      ],
      tableHeader: [
        { type: 'selection', fixed: 'left', reserveSelection: true },
        { type: 'index' },
        { prop: 'age', label: '年龄', sortable: true },
        { prop: 'name', label: '姓名' },
        { slot: 'a' },
        { prop: 'b', label: 'b' },
        { prop: 'c', label: 'c' },
        { prop: 'd', label: 'd' },
        { prop: 'e', label: 'e' },
        { prop: 'f', label: 'f' },
        { prop: 'g', label: 'g' },
        { slot: 'operates' }
      ],
      uploadFileBeans: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ]
    }
  },
  methods: {
    handleAdd() {
      this.roomDlgShow = true
    },
    getHotelList() {
      this.list = this.options
      this.total = 20
    },
    fileChange(UploadObject) {
      const fileList = Object.values(UploadObject);

      this.uploadFileBeans.value = fileList;
    },
    selectionChange(selection) {
      console.log('selectionChange: ', selection)
    },
    selectAll(selection) {
      console.log('selectAll: ', selection)
    },
    handleClick(row) {
      console.log(row)
    },
    handleChange() {
      console.log(this.password, this.passwordStatus)
    },
    handleClean() {
      console.log('clean...')
    }
  },
}
</script>
