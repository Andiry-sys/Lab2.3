let _str1 = prompt(`Enter string`);
let _str2 = prompt(`Enter string`);

function Compare(str1, str2) {
  if (str1.length > str2.length) {
    alert(1);
  } else if (str1.length < str2.length) {
    alert(-1);
  } else if (str1.length === str2.length) {
    alert(0);
  }
}

Compare(_str1, _str2);
