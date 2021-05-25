export const incrementCount = (count) => {
  const num = count + 1;
  return {
    type: "INCREMENT_COUNT",
    count: num,
  };
};

export const decrementCount = (count) => {
  const num = count - 1;
  return {
    type: "DECREMENT_COUNT",
    count: num,
  };
};

export const resetCount = () => {
  const num = 0;
  return {
    type: "RESET_COUNT",
    count: num,
  };
};

export const addCount = (count, val) => {
  let num;
  if (count === 0) {
    num = val;
  } else num = +count + +val;
  return {
    type: "ADD_COUNT",
    count: num,
  };
};
