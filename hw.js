function helloName(name) {
    return "Hello " + name + "!";
}

let name = "Bob";
console.log(helloName(name));

function makeOutWord(template, word) {
    // Извлекаем первую часть строки
    let firstPart = template.substring(0, 2);
    // Извлекаем вторую часть строки
    let secondPart = template.substring(2);
    // Вставляем слово между первой и второй частями
    return firstPart + word + secondPart;
}

let template = "<<>>";
let word = "hello";
console.log(makeOutWord(template, word));

function firstHalf(str) {
    // Находим половину длины строки
    let halfLength = str.length / 2;
    // Извлекаем первую половину строки
    return str.substring(0, halfLength);
}

let inputStr = "DcjhFgdluGhjku";
console.log(firstHalf(inputStr));

function nonStart(str1, str2) {
    // Извлекаем подстроки без первого символа
    let newStr1 = str1.substring(1);
    let newStr2 = str2.substring(1);
    // Конкатенируем подстроки
    return newStr1 + newStr2;
}

let str1 = "This";
let str2 = "Is";
console.log(nonStart(str1, str2));

function theEnd(str, front) {
    // Если front равен true, вернуть первый символ строки
    // Иначе вернуть последний символ строки
    return front ? str.charAt(0) : str.charAt(str.length - 1);
}

console.log(theEnd("nonStart", true));
console.log(theEnd("nonStart", false));

function endsLy(str, front) {
    if (front) {
        // Если front равен true, вернуть первый символ строки
        return str[0];
    } else {
        // Иначе вернуть последний символ строки
        return str[str.length - 1];
    }
}

console.log(endsLy("Star", true));
console.log(endsLy("Startly", false));
