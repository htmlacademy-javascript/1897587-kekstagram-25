const returning = function (from, to) {
  if (to<from) {
    console.log('Диапазон от',from,'до',to,'указан неверно');
  }
  if (from>=0 && to>=0 && from<to) {
    return(Math.floor(Math.random() * (to - from + 1) + from));
  } else if (from === to){
    console.log('Данные числа не являются диапазоном, это одно число',from);
  }
};

console.log(returning(5,10));

const check = function (str, lngt) {
  if (str.length>lngt) {
    console.log('Длина введённого комментария не может быть больше', lngt, 'символов');
  } else if (str.length<=lngt) {
    console.log('Комментарий успешно введён');
  }
};

console.log(check('dsadsadasddsdsa',10));
