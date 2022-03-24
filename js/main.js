const returning = (from, to) => {
  if (from>=0 && to>=0 && from<to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  return -1;
};
returning(10,12);

const check = (str, lngt) => {
  if (str.length>lngt) {
    return false;
  }
  return true;
};
check('dasfsa',10);

