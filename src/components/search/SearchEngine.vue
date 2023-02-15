<template>
  <div class="search-box search-engine-box">
    <p class="search-label">Search Engine:</p>
    <el-select-v2
      v-model="engine"
      class="search"
      :options="options"
      placeholder="Select engine"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useInitStore} from "@/stores/init";
import createSelectOptions from "@/utils/createSelectOptions";
const init = useInitStore()

const defaultEngine = init.default_engine
const searchEngines = init.search_engines

let engine = ref(defaultEngine);
const options = createSelectOptions(searchEngines)

</script>

<style scoped>
.search-engine-box{
  width: calc(30% - 15px);
  padding-right: 20px;
}
@media (max-width: 1100px){
  .search-engine-box{
    width: 50%;
  }
}
</style>
