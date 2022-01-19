function isPalindrome(str) {
  let strLen = str.length;
  let result = "";
  for (let i = 0; i < strLen; i++) {
    if (str[i] === str[strLen - 1 - i]) {
      result = "yes";
    } else {
      result = "no";
      return result;
    }
  }
  return result;
}

let test = isPalindrome("abcdedcba");
let test2 = isPalindrome("abcded");

console.log(test);
console.log(test2);
