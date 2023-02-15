import httpLoad from '@/utils/httpLoad';

const states = ['Alabama', 'Alaska'];

const list = states.map((item) => {
  return { value: item, label: item };
});

export default function getSearchResult(query) {
  if (query !== '') {
    const filter = () =>
      list.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });

    return httpLoad(filter);
  } else {
    return [];
  }
}
