function wordInfo(str) {
  var reg = /[а-яё]+/gi,
    info = {
      count: 0,
      min: Infinity,
      max: 0,
    },
    sum = 0,
    word,
    len;
  while ((word = reg.exec(str))) {
    info.count++;
    len = word[0].length;
    sum += len;
    if (len < info.min) info.min = len;
    if (len > info.max) info.max = len;
  }
  info.average = Math.floor(sum / info.count);
  return info;
}

alert(
  JSON.stringify(
    wordInfo(
      "Здравствуйте! Подскажите как реализировать вот такую задачку: Подсчитать количество слов во введенном строке, найти длину максимального слова, минимального слова и среднюю длину слов. Предусмотреть возможность присутствия в тексте нескольких пробелов и знаков препинания.\n\
  \n\
  Заранее спасибо!"
    )
  )
);
