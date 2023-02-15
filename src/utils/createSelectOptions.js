export default function createSelectOptions(array) {
  let options = [];

  for (let item in array) {
    options.push({ value: item, label: array[item] });
  }
  return options;
}
