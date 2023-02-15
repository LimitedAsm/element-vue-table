<template>
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
        v-model:sort-state="sortState"
        :columns="columns"
        :data="data"
        :estimated-row-height="50"
        :expand-column-key="columns[0].key"
        :width="width"
        :height="height"
        @column-sort="onSort"
      >
        <template #row="props">
          <Row v-bind="props" />
        </template>
        <template v-if="isLoading" #overlay>
          <div
            class="el-loading-mask"
            style="display: flex; align-items: center; justify-content: center"
          >
            <el-icon class="is-loading" color="var(--el-color-primary)" :size="26">
              <loading-icon />
            </el-icon>
          </div>
        </template>
      </el-table-v2>
      </template>
    </el-auto-resizer>
</template>

<script lang="jsx" setup>
import {onMounted, ref} from 'vue';
import { TableV2SortOrder } from 'element-plus'
import { Loading as LoadingIcon } from '@element-plus/icons-vue'

import SubTable from '@/components/table/SubTable.vue';
import {generateColumns, generateData} from "@/utils/generateTable"

import {useInitStore} from "@/stores/init";
import getTablePage from "@/api/getTablePage";

const initStore = useInitStore()
const token = initStore.token;

let page = [];

let columns = [{}];
let data = [];
let isLoading = ref(true)

const sortState = ref({
  'avg_pos': TableV2SortOrder.DESC,
  'clicks': TableV2SortOrder.ASC,
})

let onSort = ({ key, order }) => {
  sortState.value[key] = order
  data.value = data.value.reverse()
}

const Row = ({cells, rowData}) => {
  const url = rowData.subTableUrl;
  if (url) return <SubTable url={url}/>;
  return cells;
};
Row.inheritAttrs = false;

let init = () => {
  page = getTablePage(token)
  columns = generateColumns(page)
  data = generateData(page)
  data = data.map((data) => {
    data.children = [
      {
        id: `${data.id}-detail-content`,
        subTableUrl: data.url,
      },
    ];
    return data;
  })
  data = ref(data);

  columns[0].sortable = true
  columns[1].sortable = true

  isLoading.value = false
}

onMounted(() => {
  init()
})

</script>

<style>
.el-table-v2__row-depth-0 {
  height: 50px;
}

.el-table-v2__cell-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.example-showcase .el-table-v2__overlay {
  z-index: 9;
}
</style>
