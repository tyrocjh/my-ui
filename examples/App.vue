<template>
  <div id="app">
    <d-pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.pageIndex"
      :limit.sync="listQuery.pageSize"
    />

    <el-button type="primary" @click="handleAdd">打开对话框</el-button>

    <br /><br />

    <el-form>
      <el-form-item>
        <div>少于十个的</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
        />
      </el-form-item>
      <el-form-item>
        <div>可清空功能（只支持单选）</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :clearable="true"
        />
      </el-form-item>
      <el-form-item>
        <div>可搜索功能</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :filterable="true"
        />
      </el-form-item>
      <el-form-item>
        <div>分页功能</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :filterable="true"
          :total="total"
          :hideOnSinglePage="false"
          :page.sync="listQuery.pageIndex"
          :limit.sync="listQuery.pageSize"
          @pagination="getHotelList"
        />
      </el-form-item>
      <el-form-item>
        <div>多选一行展示功能</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :multiple="true"
          :collapseTags="true"
        />
      </el-form-item>
      <el-form-item>
        <div>多选多行展示功能</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :multiple="true"
        />
      </el-form-item>
      <el-form-item>
        <div>不可编辑</div>
        <d-select
          :propsType="propsType"
          :selectValue="selectValue"
          :options="options"
          :multiple="true"
          :disabled="true"
        />
      </el-form-item>
      <el-form-item>
        <div>带禁用项</div>
        <d-select
          :propsType="propsType1"
          :selectValue="selectValue"
          :options="options1"
        />
      </el-form-item>
      <el-form-item>
        <div>带分组类别</div>
        <d-select
          :isGroup="false"
          :propsGroupType="propsGroupType"
          :propsType="propsGroupChildType"
          :selectValue="selectValue"
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
          label: '热门城市',
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
          label: '城市名',
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
      selectValue: '',
      propsType: {
        key: 'value',
        label: 'label',
      },
      propsType1: {
        key: 'name',
        label: 'id',
      },
      propsGroupType: {
        name: 'label',
        arr: 'options',
      },
      propsGroupChildType: {
        key: 'name',
        label: 'id',
      },
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
      this.total = 11
    },
  },
}
</script>
