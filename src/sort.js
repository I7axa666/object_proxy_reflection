export default function orderByProps(array, sortList) {
  const result = [];
  const sortedArray = Object.keys(array).sort().reduce((obj, key) => {
    const res = { ...obj };
    res[key] = array[key];
    return res;
  }, {});

  /* eslint-disable-next-line */
  for (const key of sortList) {
    result.push({ key, value: sortedArray[key] });
    delete sortedArray[key];
  }

  Object.keys(sortedArray).forEach((key) => {
    result.push({ key, value: sortedArray[key] });
  });

  return result;
}
