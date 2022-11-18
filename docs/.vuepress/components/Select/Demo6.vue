<template>
  <div class="demo-box">
    <d-select
      v-model="value"
      :options="options"
      :option-props="optionProps"
      filterable
      remote
      :remote-method="remoteMethod"
      clearable
      show-pagination
      :total="listTotal"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.rows"
      @pagination="getList"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      list: [],
      options: [],
      optionProps: {
        label: 'name',
        value: 'id',
      },
      listTotal: 0,
      listQuery: {
        page: 1,
        rows: 5,
        keyword: '',
      },
      states: [
        "Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"
      ]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { id: item, name: item }
    })
  },
  methods: {
    getList() {
      setTimeout(() => {
        this.options = []
        this.listTotal = 0

        let opts = []
        opts = this.list.filter(item => {
          return item.name.toLowerCase()
            .indexOf(this.listQuery.keyword.toLowerCase()) > -1
        })

        if (!opts.length) return

        this.listTotal = opts.length

        const start = (this.listQuery.page - 1) * this.listQuery.rows
        const end = (this.listTotal > start + 5) ? start + 5 : this.listTotal
        for (let i=start; i<end; i++) {
          this.options.push(opts[i])
        }
      }, 200)
    },
    remoteMethod(query) {
      this.listQuery.page = 1
      this.listQuery.keyword = query
      this.getList(query)
    },
  }
}
</script>
