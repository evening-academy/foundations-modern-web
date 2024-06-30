// 1 Приветствие по имени
function helloName(name) {
 return `Hello ${name}`; 
}
console.log(helloName("Mariia"));
console.log(helloName("Anna"));
console.log(helloName("Den"));

// 2 Вставка слова в строку
function makeOutWord(srt, word) {
  let newStr = srt.substring(0, 2) + word + srt.substring(2);
  console.log(newStr);
}
makeOutWord("<<>>", "Hi!");
makeOutWord("{{}}", "Hello!");
makeOutWord("[[]]", "Привет!");

// 3 Первая половина строки
function firstHalf(str) {
  let newStr = str.substring(0, str.length / 2);
  console.log(newStr);
}
firstHalf("Presentation");

// 4 Конкатенация без первого символа
function nonStart(str1, str2) {
  let newStr = str1.substring(1) + str2.substring(1);
  console.log(newStr);
}
nonStart("Stop", "Sping");

// 5 Выбор символа из начала или конца строки
function theEnd(str, front) {
  if (front) {
    return str[0];
  } else {
    return str[str.length - 1];
  }
}
console.log(theEnd("Welcome", true));
console.log(theEnd("Welcome", false));

// 6 Проверка окончания строки на "ly"
function endsLy(str) {
  let res = str.substring(str.length - 2) === "ly";
  console.log(res);
}
endsLy("Dolly");
endsLy("Tony");

// 7 Средние три символа строки нечетной длины
function middleThree(str) {
  let midIndex = (str.length - 1) / 2;
  let res = str.substring(midIndex - 1, midIndex + 2);
  console.log(res);
}
middleThree("Douglas");

// 8 Символы с начала и конца двух строк
function lastChars(a, b) {
  let res = "";
  if (a) {
    res += a[0];
  } else {
    res += "@";
  }
  if (b) {
    res += b[b.length - 1];
  } else {
    res += "@";
  }
  console.log(res);
}
lastChars("res", "tab");
lastChars("", "tab");

