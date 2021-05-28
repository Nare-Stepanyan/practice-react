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

export const minusCount = (count, val) => {
  let num;
  if (count === 0) {
    num = val;
  } else num = +count - +val;
  return {
    type: "MINUS_COUNT",
    count: num,
  };
};

export const multCount = (count, val) => {
  let num;
  if (count === 0) {
    num = 0;
  } else num = +count * +val;
  return {
    type: "MULT_COUNT",
    count: num,
  };
};

export const subtrCount = (count, val) => {
  let num;
  if (count === 0) {
    num = 0;
  } else if (count > val) {
    num = +count / +val;
  } else num = +val / +count;
  return {
    type: "SUBTR_COUNT",
    count: Math.floor(num),
  };
};
