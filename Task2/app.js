function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let _str = prompt(`Enter string `);

let temp = capitalizeFirstLetter(_str);

alert(temp);
