import { createRouter, createWebHistory } from 'vue-router';

import TableView from '@/views/TableView.vue';

const routes = [
  {
    path: '/element-vue-table/',
    name: 'Default',
    component: TableView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
