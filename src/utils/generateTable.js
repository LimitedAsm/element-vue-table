const generateColumns = (table) => {
  if (table[0]) {
    const columns = Object.keys(table[0]);
    return columns.map((name) => ({
      key: name,
      dataKey: name,
      title: name,
      width: 150,
    }));
  }
};
const generateData = (table) =>
  table.map((row, rowIndex) => {
    const newRow = {
      id: `row-${rowIndex}`,
      parentId: null,
    };
    return { ...newRow, ...row };
  });

export { generateColumns, generateData };
