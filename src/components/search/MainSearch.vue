<template>
  <div class="search-box search-by-occurrence-box">
    <el-select-v2
      v-model="value"
      class="search"
      multiple
      filterable
      remote
      placeholder="Search"
      clearable
      :options="options"
      :remote-method="remoteMethod"
      :loading="isLoading"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import getSearchResult from "@/api/getSearchResult";

const value = ref([])
const options = ref([])
const isLoading = ref(false)

const remoteMethod = async (query) => {
  isLoading.value = true
  options.value = await getSearchResult(query);
  isLoading.value = false;
}

</script>

<style scoped>
.search-by-occurrence-box{
  width: max(calc(60% + 20px - 30px), 320px);
  padding-right: 20px;
}
@media (max-width: 1100px){
  .search-by-occurrence-box{
    width: 100%;
    padding-right: 0;
  }
}
</style>
