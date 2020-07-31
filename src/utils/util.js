import moment from "moment";

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

export const formatDuration = (diff) => {
  return [`${diff.hours()}h`, `${diff.minutes()}m`]
    .filter((item) => !item.match(/^0\D/))
    .join(` `);
};

export const formatTime = (totalSeconds) => {
  return moment(totalSeconds * 1000).format(`hh:mm:ss`);
};
