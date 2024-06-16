<template>
    <el-table
      ref="table"
      class="base-table-box"
      :data="tableData"
      :max-height="maxHeight"
      :attrs="$attrs"
      :listeners="$listeners"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
  
      <el-table-column
        v-for="(item, index) in tableColumnData"
        :key="index"
        :scopedSlots="{
          header: ({ column, $index }) => {
            return [
              $scopedSlots.tableColumnHeader
                ? $scopedSlots.tableColumnHeader({ data: { column, $index } })
                : h('span', [column.label])
            ];
          },
          default: ({ row, $index }) => {
            return [
              $scopedSlots.tableColumn
                ? $scopedSlots.tableColumn({ data: { item, row, index: $index } })
                : item.formatTime
                ? h('span', [_vm.formatTime(row[item.prop])])
                : h('span', [row[item.prop]])
            ];
          }
        }"
      ></el-table-column>
    </el-table>
  </template>
  
  <script>
  import { h } from 'vue';
  
  export default {
    props: {
      tableData: Array, // 表格数据
      tableColumnData: Array, // 表格列数据
      maxHeight: Number, // 最大高度
    },
    methods: {
      formatTime(time) {
        // 假设这里是时间格式化的逻辑，比如将时间戳转换成具体格式的时间字符串
        const formattedTime = new Date(time).toLocaleString();
        return formattedTime;
      },
    },
    computed: {
      // 计算属性，用于动态计算表格的高度
      tableHeight() {
        return this.maxHeight ? `${this.maxHeight}px` : 'auto';
      },
    },
    render() {
      return h(
        'el-table',
        {
          ref: 'table',
          class: 'base-table-box',
          data: this.tableData,
          height: this.tableHeight,
          attrs: this.$attrs,
          listeners: this.$listeners,
          scopedSlots: {
            empty: () => {
              return h('el-empty', { description: '暂无数据' });
            },
          },
        },
        this.tableColumnData.map((item, index) => {
          return h('el-table-column', {
            key: index,
            label: item.label,
            prop: item.prop,
            width: item.width,
            fixed: item.fixed,
            align: item.align,
            sortable: item.sortable,
            scopedSlots: {
              default: ({ row }) => {
                return h('span', {}, this.formatTime(row[item.prop]));
              },
            },
          });
        })
      );
    },
  };
  </script>
  
  <style scoped>
  .base-table-box {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
  }
  
  .base-table-box table {
    width: 100%;
  }
  
  .base-table-box th,
  .base-table-box td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
  
  .base-table-box th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
  
  .base-table-box .el-empty {
    text-align: center;
    padding: 20px;
    color: #999;
  }
  </style>
  