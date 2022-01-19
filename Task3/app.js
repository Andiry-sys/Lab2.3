function words(f) {
  let k = 0;
  const stringsearch = ["а", "о", "и", "і", "е", "у", "ю", "я"];

  for (var i = 0; i < f.length; i++)
    for (var j = 0; j < stringsearch.length; j++)
      if (f[i] === stringsearch[j]) {
        k++;
        break;
      }
  return k ? k : "Net sovpadenyi";
}

let _str = prompt(`Введіть рядок`);
console.log(words(_str));
