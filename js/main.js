const returning = function (from, to) {
  if (to<from) {
    return(false);
  }
  if (from>=0 && to>=0 && from<to) {
    return(Math.floor(Math.random() * (to - from + 1) + from));
  } else if (from === to){
    return(false);
  }
};

returning(5,10);

const check = function (str, lngt) {
  if (str.length>lngt) {
    return(false);
  } else if (str.length<=lngt) {
    return(true);
  }
};

check('dsafds',10);
