let str = "Let's take LeetCode contest";
let arr = str.split(" ");
console.log(arr);

var reversed = (x) => {
  return x.toString().split("").reverse().join("");
};
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(reversed(arr[i]));
}
console.log(newArr.join(" "));
