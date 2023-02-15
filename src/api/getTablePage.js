const page = [
  {
    avg_pos: 26,
    clicks: 2,
    ctr: -1,
    impressions: 28,
    keys: 5,
    ur: 0,
    url: 'https://test.ru/app-reviews/review-betano-app-como-fazer-o-download-para-android/',
    volume: 0,
  },
  {
    avg_pos: 21,
    clicks: 0,
    ctr: -1,
    impressions: 28,
    keys: 5,
    ur: 0,
    url: 'https://test.ru/app-reviews/review-betano-app-como-fazer-o-download-para-android/',
    volume: 0,
  },
];

export default function getTablePage(token) {
  if (token) {
    return page;
  }
}
