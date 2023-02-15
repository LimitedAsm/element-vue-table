<template>
  <div style="width: 100%">
    <el-auto-resizer >
      <template #default="{ width }">
        <el-table-v2
          v-model:sort-state="sortState"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          @column-sort="onSort"
        >
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
  </div>

</template>

<script setup>
import {ref, toRefs} from 'vue'
import { TableV2SortOrder } from 'element-plus'
import { Loading as LoadingIcon } from '@element-plus/icons-vue'

import getSubTable from "@/api/getSubTable";
import {generateColumns, generateData} from "@/utils/generateTable"

import {useInitStore} from "@/stores/init";
const initStore = useInitStore()
const token = initStore.token;

let isLoading = ref(false)
let height = ref(50)

const props = defineProps({
  url: {type: String, required: true}
})
const {url} = toRefs(props)

const table = getSubTable(url, token)

const columns = generateColumns(table)
const data = ref(generateData(table))
console.log(data)
height.value = Math.min(data.value.length * 50 + 50, 400)

columns[0].sortable = true
columns[1].sortable = true

const sortState = ref({
  'avg_pos': TableV2SortOrder.DESC,
  'clicks': TableV2SortOrder.ASC,
})

const onSort = ({ key, order }) => {
  sortState.value[key] = order
  data.value = data.value.reverse()
}

isLoading.value = false

</script>

<style scoped>

</style>
