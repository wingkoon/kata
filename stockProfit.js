const stockProfit = function(array) {
  let result = ["", -1];
  let peak = 0;
  let profit = 0;
  for (let i = 0; i < array.length - 2; i ++) {
    peak = Math.max(...array.slice(i+1, array.length - 1))
    if (array[i] <= peak) {
      profit = peak - array[i];
      if (profit > result[1]) {
        result[0] = array[i] + " -> " + peak;
        result[1] = profit;
      }
    }
  }
  if (result[1] === -1) {
    return -1;
  }
  return result;
};

console.log(stockProfit([45, 24, 35, 31, 40, 38, 11]));














