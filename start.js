function addAll() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAll(1));
console.log(addAll(1, 4));
console.log(addAll(1, 4, 9));