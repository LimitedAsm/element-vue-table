const initialState = {
  project: '2cf3c7c7-3a3e-4be2-80df-2e7d400ee34d',
  default_engine: 'gd',
  search_engines: {
    gd: 'Google | Desktop',
    gm: 'Google | Mobile',
    yd: 'Yandex | Desktop',
    ym: 'Yandex | Mobile',
  },
  url_groups: {
    'cf92b43b-5e8a-48ca-917f-07cad2f97cdf': 'up',
    '4cebe695-7b4b-44f3-83b6-0a190d10e625': 'down',
    '47a00e16-36d1-458c-80b0-315c1b4c595d': 'new',
  },
  start_date: '2022-11-27',
  end_date: '2022-11-27',
  show: '100&500&1000',
  count_pages: 10,
  token: '55a00e16-36d1-458c-80b0-315c1b4c5978',
};

export default function getInit() {
  return initialState;
}
