let dateParts = [{ year: 'numeric' }, { month: 'numeric' }, { day: 'numeric' }];

let separator = '-';

export default function formatDate(date) {
  function format(datePart) {
    let intlFormat = new Intl.DateTimeFormat('en', datePart);
    return intlFormat.format(date);
  }
  return dateParts.map(format).join(separator);
}
