import { defineStore } from 'pinia';
import getInit from '@/api/getInit';

export const useInitStore = defineStore('init', {
  state: () => {
    return { ...getInit() };
  },
});
