function CheckSpam(str = "") {
  let flag = false;
  let lower = str.toLowerCase();

  if (
    lower.includes("100% бесплатно") ||
    lower.includes("увеличение продаж") ||
    lower.includes("только сегодня") ||
    lower.includes("не удаляйте") ||
    lower.includes("ххх")
  ) {
    return true;
  } else {
    return false;
  }
}

let _str = prompt(`Введіть рядок`);
console.log(CheckSpam(_str));
