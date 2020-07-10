export const sliceArrayToColumn = (data, columns) => {
  let result = [];
  let size = Math.ceil(data.length / columns);
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
