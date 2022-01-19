function Truncate(str, num) {
  return str.length > num ? str.slice(0, num - 1) + "..." : str;
}

let _str = Truncate("Hello, World!", 8);

alert(_str);
