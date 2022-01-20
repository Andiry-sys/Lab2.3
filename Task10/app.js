function FindChar(str = "", char = "") {
  let index = parseInt(str.indexOf(char)) + 1;
  console.log("Symbol index: " + index);

  console.log(
    `This symbol "${char}" meets in string: ${str.split(char).length - 1}`
  );
}

FindChar("Hell, Word", "H");
