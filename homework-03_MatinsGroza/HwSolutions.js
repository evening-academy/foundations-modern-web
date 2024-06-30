console.log("1. **Приветствие по имени**");

const name = "Jimmy";
console.log("Hello" + " " + name);

console.log("2. **Вставка слова в строку**");

const out = "<<>>";
const word = "Mike";

const firstPart = out.substring(0, 2);
const secondPart = out.substring(2, 4);

const result = firstPart + word + secondPart;
console.log(result);

console.log("3. **Первая половина строки**");

const fullWord = "BatMan";
const halfWord = fullWord.substring(0, 3);

console.log(halfWord);

console.log("4. **Конкатенация без первого символа**");

const firstWord = "Bat";
const secondWord = "Man";

const firstWordResult = firstWord.substring(1);
const secondWordResult = secondWord.substring(1);

console.log(firstWordResult + secondWordResult);

console.log("5. **Выбор символа из начала или конца строки**");

const str = "Hello";
const front = true;

const final = front ? str.charAt(0) : str.charAt(str.length - 1);

console.log(final);

console.log("6. **Проверка окончания строки на 'fu'**");

function endsFu(str) {
    return str.endsWith("fu");
}

console.log(endsFu("kung-fu"));
console.log(endsFu("kung-fa"));

console.log("7. **Средние три символа строки нечетной длины**");

function middleThree(str) {

    let middleIndex = Math.floor(str.length / 2);
    return str.substring(middleIndex - 1, middleIndex + 2);
}

console.log(middleThree("BigBens"));    // "and"
console.log(middleThree("Louis"));      // "and"
console.log(middleThree("solving"));  // "lvi"

console.log("8. **Символы с начала и конца двух строк**");

const strA = "Spider";
const strB = "Pig";

const firstLetterFromWord = strA.substring(0, 1);
const lastLetterFromWord = strB.substring(2);

console.log(firstLetterFromWord + lastLetterFromWord);

console.log("9. **Определение цвета**");

function seeColor(str) {
    if (str.startsWith('red')) {
        return "red";
    } else if (str.startsWith('blue')) {
        return "blue";
    } else {
        return "";
    }
}
console.log(seeColor("redVine"));
console.log(seeColor("blueTimes"));
console.log(seeColor("vineRed"));

console.log("10. **Три копии первых двух символов строки**");

const testWord = "halloween";
const testResult = testWord.substring(0, 2);

console.log(testResult + testResult + testResult);