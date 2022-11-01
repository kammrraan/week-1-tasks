let x = [1, 4, 6, 9];
let y = [1, 3, 4, 8];

const mergeTwoLists = (x, y) => {
  let mergedArray = [];

  let len = x.length + y.length;

  let i = 0;
  let j = 0;
  let k = 0;

  while (k < len) {
    if (x[i] <= y[j]) {
      mergedArray.push(x[i]);
      i++;
    } else if (x[i] > y[j]) {
      mergedArray.push(y[j]);
      j++;
    }
    k++;
  }

  while (i < x.length) {
    mergedArray.push(x[i]);
    i++;
  }

  while (j < y.length) {
    mergedArray.push(y[j]);
    j++;
  }
  return mergedArray;
};
console.log(mergeTwoLists(x, y));
