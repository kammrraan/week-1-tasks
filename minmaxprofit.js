let prices = [2, 4, 1];
var maxProfit = function (prices) {
  let min = Math.min(...prices);

  let sell = [];

  const minIndex = prices.indexOf(min);

  if (minIndex == prices.length - 1) {
    return 0;
  } else {
    sell = prices.slice(minIndex, prices.length);
    let max = Math.max(...sell);
    console.log("maximum " + max);

    const profit = max - min;
    return profit;
  }
};

console.log(maxProfit(prices));
