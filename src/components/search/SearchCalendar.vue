<template>
  <div class="search-box search-calendar-box">
    <el-date-picker
      v-model="currentDate"
      class="search search-calendar"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-value="defaultDate"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import {useInitStore} from "@/stores/init";
import formatDate from "@/utils/formatDate";
const init = useInitStore()

let dateNow = formatDate(new Date());


const defaultDate = [dateNow, dateNow]
const currentDate = ref('')

const startDate = init.start_date
const endDate = init.end_date

currentDate.value = [
  startDate ?? dateNow,
  endDate ?? dateNow
];

watch(currentDate, (newDate) => {
  init.start_date = formatDate(newDate[0]);
  init.end_date = formatDate(newDate[1]);
})

</script>

<style>
.search-calendar-box{
  width: calc(40% - 20px);
}

.search-calendar.el-range-editor.el-input__wrapper{
  width: calc(100% - 20px);
}
@media (max-width: 1100px){
  .search-calendar-box{
    width: 100%;

  }
}
</style>
