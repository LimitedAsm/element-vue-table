const timeout = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

export default async function httpLoad(func) {
  await timeout();
  return func();
}
