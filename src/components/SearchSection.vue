<template>
  <div class="search-section">
    <div class="search-section-row">
      <search-engine />
      <url-groups />
    </div>
    <div class="search-section-row">
      <main-search />
      <search-calendar />
    </div>
  </div>
</template>

<script setup>
import SearchEngine from "@/components/search/SearchEngine.vue";
import UrlGroups from "@/components/search/SearchUrlGroups.vue";
import MainSearch from "@/components/search/MainSearch.vue";
import SearchCalendar from "@/components/search/SearchCalendar.vue";
</script>

<style scoped>
.search-section-row{
  display: flex;
  flex-direction: row;
}
.search-section{
  height: 110px;
}
@media (max-width: 1100px){
  .search-section-row:last-child{
    flex-direction: column;
  }
  .search-section{
    height: 150px;
  }
}

</style>
