const fixCurry = (fn, totalArgs) => {
  totalArgs = totalArgs || fn.length
  return function recursor () {
    return arguments.length < totalArgs ? recursor.bind(this, ...arguments): fn.call(this, ...arguments);
  };
};

const add = fixCurry((a, b ,c) => a + b + c);

export { add };
