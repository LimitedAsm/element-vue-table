<template>
  <div class="search-box search-url-groups-box">
    <p class="search-label">Url groups:</p>
    <el-select-v2
      v-model="value"
      class="search "
      :options="options"
      placeholder="Please select"
      multiple
    />
  </div>

</template>

<script setup>
import {ref} from "vue";
import {useInitStore} from "@/stores/init";
import createSelectOptions from "@/utils/createSelectOptions";
const init = useInitStore()
const urlGroups = init.url_groups

let value = ref();
const options = createSelectOptions(urlGroups);
</script>

<style scoped>
.search-url-groups-box{
  width: calc(30% - 15px);
}
@media (max-width: 1100px){
  .search-url-groups-box{
    width: 50%;

  }
}
</style>
