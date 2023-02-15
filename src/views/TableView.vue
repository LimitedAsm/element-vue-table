<template>
  <div class="table-view-content">
    <search-section />
    <table-section />
  </div>
</template>

<script setup>
import SearchSection from "@/components/SearchSection.vue";
import TableSection from "@/components/TableSection.vue";
</script>

<style>
.table-view-content{
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
}
</style>
