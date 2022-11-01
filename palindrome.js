let x = 4334;
var reversed = (x) => {
  return x.toString().split("").reverse().join("");
};

var isPalindrome = (x) => {
  if (x == reversed(x)) {
    return true;
  } else return false;
};

reversed(x);
console.log(isPalindrome(x));
