export const transform = (obj = {}) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    obj[key].forEach((value) => {
      result[value.toLowerCase()] = +key;
    });
  });
  return result;
};
