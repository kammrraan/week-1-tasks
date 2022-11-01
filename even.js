//Given Arrray
const nums = [12, 345, 27, 66, 7896];

let even = 0; //number of even digits

nums.map((num) => {
  if (Math.ceil(Math.log(num + 1) / Math.LN10) % 2 === 0) {
    even = even + 1;
    //console.log("run");
  }
});

console.log(even);
