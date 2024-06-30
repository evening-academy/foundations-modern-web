// 1. Приветствие по имени
// Дана строка name, например, "Bob". Вернуть приветствие в виде "Hello Bob!".

let str01 = "Bob";
let str1 = "Alice";
let str2 = "X";

function  helloName(name){
    return `Hello ${name}!`;
}

console.log(helloName(str01));
console.log(helloName(str1));
console.log(helloName(str2));
console.log("_____________________")


// 2. Дана строка длиной 4, такая как "<<>>", и слово. Вернуть новую строку, где слово вставлено в середину исходной строки.
// Примечание: используйте str.substring(i, j), чтобы извлечь строку, начиная с индекса i и до, но не включая, индекса j.
// Примеры:
// makeOutWord("<<>>", "Yay") → "<<Yay>>"
// makeOutWord("[[]]", "word") → "[[word]]"

let container1 = "<<>>";
let container2 = "[[]]";
let word1= "Yay";
let word2= "word";


function makeOutWord(container, word) {
    const firstPart = container.substring(0, 2);
    const secondPart = container.substring(2);
    return firstPart + word + secondPart;
}

console.log(makeOutWord(container1, word1));
console.log(makeOutWord(container2, word2));
console.log("_____________________")


// 3. Первая половина строки. Дана строка четной длины, вернуть её первую половину. Например, строка "WooHoo" должна вернуть "Woo".
// Примеры:
// firstHalf("WooHoo") → "Woo"
// firstHalf("HelloThere") → "Hello"
// firstHalf("abcdef") → "abc"

let str3 = "WooHoo";
let str4 = "HelloThere";
let str5 = "abcdef";

function firstHalf(str){
    return str.slice(0, str.length/2);
}

console.log(firstHalf(str3));
console.log(firstHalf(str4));
console.log(firstHalf(str5));
console.log("_____________________")


// 4. Конкатенация без первого символа. Даны две строки, вернуть их конкатенацию, исключая первый символ из каждой строки. Предполагается, что строки имеют длину хотя бы 1.
// Примеры:
// nonStart("Hello", "There") → "ellohere"
// nonStart("java", "code") → "avaode"
// nonStart("shotl", "java") → "hotlava"

let str6 = "Hello"
let str7 = "There"

function nonStart(part1, part2){
    return part1.slice(1) + part2.slice(1)
}

console.log(nonStart(str6, str7));
console.log("_____________________")



// 5. Выбор символа из начала или конца строки. Дана строка, вернуть символ длины 1 с её начала, если front равен true, иначе вернуть символ с её конца. Строка не будет пустой.
// Примеры:
// theEnd("Hello", true) → "H"
// theEnd("Hello", false) → "o"
// theEnd("oh", true) → "o"

function  theEnd(str, front) {
    if (front) {
        return str.charAt(0);
    } else {
        return str.charAt(str.length-1);
    }
}

console.log(theEnd("Hello", true));  // "H"
console.log(theEnd("Hello", false)); // "o"
console.log(theEnd("oh", true));    // "a"
console.log("_____________________")


// 6. Проверка окончания строки на "ly". Дана строка, вернуть true, если она оканчивается на "ly".
// Примеры:
// endsLy("oddly") → true
// endsLy("y") → false
// endsLy("oddy") → false

function endsLy(str){
    return str.endsWith("ly");
}

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));
console.log("_____________________")


// 7. Средние три символа строки нечетной длины. Дана строка нечетной длины, вернуть три символа из её середины.
// middleThree("Candy") → "and"
// middleThree("and") → "and"
// middleThree("solving") → "lvi"

function middleThree(str){
    let midIndex = Math.floor(str.length / 2);
    return str.slice(midIndex - 1, midIndex + 2);
}

console.log(middleThree("Candy"));
console.log(middleThree("and"));
console.log(middleThree("solving"));
console.log("_____________________")


// 8. Символы с начала и конца двух строк. Даны две строки a и b, вернуть новую строку, состоящую из первого символа строки a и последнего символа строки b. Если любая из строк имеет длину 0, используйте символ '@'.
// lastChars("last", "chars") → "ls"
// lastChars("yo", "java") → "ya"
// lastChars("hi", "") → "h@"

function lastChars(str1 , str2) {
    let firstChar = str1.length > 0 ? str1.charAt(0) : "@";
    let lastChar = str2.length > 0 ? str2.charAt(str2.length - 1) : "@";
    return firstChar + lastChar;
}
console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));
console.log("_____________________")


// 9. Определение цвета. Дана строка, вернуть цвет "red" или "blue", если строка начинается с соответствующего цвета. В противном случае вернуть пустую строку.
// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColor("blueTimes") → "blue"

function seeColor(str) {
    if (str.startsWith("red")) {
        return "red";
    } else if (str.startsWith("blue")) {
        return "blue";
    }
    return "";
}

console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
console.log("_____________________")


// 10. Три копии первых двух символов строки. Дана строка, вернуть новую строку из трех копий первых двух символов исходной строки. Если символов меньше двух, использовать то, что есть.
// Примеры:
// extraFront("Hello") → "HeHeHe"
// extraFront("ab") → "ababab"
// extraFront("H") → "HHH"


// 11. Сравнение слова с началом строки. Даны строка и вторая строка "word". Строка соответствует началу первой строки, за исключением первого символа, если это возможно. При совпадении вернуть начало строки, иначе вернуть пустую строку.
// Примеры:
// startWord("hippo", "hi") → "hi"
// startWord("hippo", "xip") → "hip"
// startWord("hippo", "i") → "h"


// Составление строки abba. Даны две строки a и b, вернуть результат их конкатенации в порядке "abba". Например, для строк "Hi" и "Bye" вернуть "HiByeByeHi".
// Примеры:
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"


// Три копии последних двух символов строки.
// Дана строка, вернуть новую строку из трех копий последних двух символов исходной строки. Длина строки будет хотя бы 2.
// Примеры:
// extraEnd("Hello") → "lololo"
// extraEnd("ab") → "ababab"
// extraEnd("Hi") → "HiHiHi"


// Строка без первого и последнего символов. Дана строка, вернуть версию без первого и последнего символов, при этом длина строки будет хотя бы 2.
// Примеры:
// withoutEnd("Hello") → "ell"
// withoutEnd("java") → "av"
// withoutEnd("coding") → "odin"
// Циклический сдвиг влево на 2
//
// Условие:
// Дана строка, вернуть версию с циклическим сдвигом влево на 2 символа.
//
// Примеры:
//
// left2("Hello") → "lloHe"
// left2("java") → "vaja"
// left2("Hi") → "Hi"
// Строка без первого и последнего символов, любой длины
//
// Условие:
// Дана строка, вернуть версию без первого и последнего символов. Строка может иметь любую длину, включая 0.
//
// Примеры:
//
// withoutEnd2("Hello") → "ell"
// `withoutEnd2("abc") →
// "b"`
//
// withoutEnd2("ab") → ""
// Первые и последние n символов строки
//
// Условие:
// Дана строка и число n, вернуть строку, состоящую из первых и последних n символов исходной строки. Длина строки будет хотя бы n.
//
// Примеры:
//
// nTwice("Hello", 2) → "Helo"
// nTwice("Chocolate", 3) → "Choate"
// nTwice("Chocolate", 1) → "Ce"
// Поиск подстроки "bad"
//
// Условие:
// Дана строка, вернуть true, если подстрока "bad" начинается с индекса 0 или 1 в строке, иначе вернуть false.
//
// Примеры:
//
// hasBad("badxx") → true
// hasBad("xbadxx") → true
// hasBad("xxbadxx") → false
// Конкатенация строк с удалением двойных символов
//
// Условие:
// Даны две строки, вернуть их конкатенацию. Если результат создает двойные символы, удалите один из них.
//
// Примеры:
//
// conCat("abc", "cat") → "abcat"
// conCat("dog", "cat") → "dogcat"
// conCat("abc", "") → "abc"
// Проверка на наличие одинаковых первых и последних символов
//
// Условие:
// Дана строка, вернуть true, если первые 2 символа строки такие же, как и последние 2.
//
// Примеры:
//
// frontAgain("edited") → true
// frontAgain("edit") → false
// frontAgain("ed") → true
// Удаление подстроки в начале строки
//
// Условие:
// Дана строка, вернуть строку без подстроки "HelloHe", если она начинается с неё. В противном случае вернуть исходную строку.
//
// Примеры:
//
// without2("HelloHe") → "lloHe"
// without2("HelloHi") → "HelloHi"
// without2("Hi") → ""
// Удаление символов 'x' в начале и конце строки
//
// Условие:
// Дана строка, вернуть строку без символов 'x' в начале и конце строки.
//
// Примеры:
//
// withoutX("xHix") → "Hi"
// withoutX("xHi") → "Hi"
// withoutX("Hxix") → "Hxi"
// Создание HTML-тега
//
// Условие:
// Даны строка tag и word. Создать HTML-строку с тегами вокруг слова, например, для tag="i" и word="Yay" вернуть <i>Yay</i>.
//
// Примеры:
//
// makeTags("i", "Yay") → "<i>Yay</i>"
// makeTags("i", "Hello") → "<i>Hello</i>"
// makeTags("cite", "Yay") → "<cite>Yay</cite>"
// Первые два символа строки
//
// Условие:
// Дана строка, вернуть первые два символа. Если длина строки меньше 2, вернуть всю строку или пустую строку.
//
// Примеры:
//
// firstTwo("Hello") → "He"
// firstTwo("abcdefg") → "ab"
// firstTwo("ab") → "ab"
// Комбинация строк
//
// Условие:
// Даны две строки a и b, вернуть новую строку в форме short+long+short, где короткая строка находится снаружи, а длинная внутри. Строки не будут иметь одинаковую длину, но могут быть пустыми (длины 0).
//
// Примеры:
//
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"
// Циклический сдвиг вправо на 2
//
// Условие:
// Дана строка, вернуть версию с циклическим сдвигом вправо на 2 символа.
//
// Примеры:
//
// right2("Hello") → "loHel"
// right2("java") → "vaja"
// right2("Hi") → "Hi"
// Середина двух символов строки четной длины
//
// Условие:
// Дана строка четной длины, вернуть строку, состоящую из двух символов, находящихся в середине.
//
// Примеры:
//
// middleTwo("string") → "ri"
// middleTwo("code") → "od"
// middleTwo("Practice") → "ct"
// Два символа строки, начиная с заданного индекса
//
// Условие:
// Дана строка и индекс, вернуть строку длиной 2, начиная с данного индекса. Если индекс слишком большой или слишком маленький для определения такой строки длины 2, использовать первые два символа.
//
// Примеры:
//
// twoChar("java", 0) → "ja"
// twoChar("java", 2) → "va"
// twoChar("java", 3) → "ja"
// Первые два символа строки
//
// Условие:
// Дана строка любой длины, вернуть новую строку из её первых двух символов. Если длина строки меньше 2, использовать символ '@' для недостающих символов.
//
// Примеры:
//
// atFirst("hello") → "he"
// atFirst("hi") → "hi"
// atFirst("h") → "h@"
// Первый и последний символы строки
//
// Условие:
// Дана строка, вернуть новую строку, где последние два символа, если они присутствуют, поменяны местами.
//
// Примеры:
//
// lastTwo("coding") → "codign"
// lastTwo("cat") → "cta"
// lastTwo("ab") → "ba"
// Конкатенация строк с одинаковой длиной
//
// Условие:
// Даны две строки, вернуть их конкатенацию. Если строки имеют разную длину, удалите символы из более длинной строки, чтобы она стала такой же длины, как и более короткая.
//
// Примеры:
//
// minCat("Hello", "Hi") → "loHi"
// minCat("Hello", "java") → "ellojava"
// minCat("java", "Hello") → "javaello"
// Удаление первых двух символов, сохранение 'a' и 'b'
//
// Условие:
// Дана строка, вернуть версию без первых двух символов, но сохранить первый символ, если он равен 'a', и второй символ, если он равен 'b'. Строка может быть любой длины.
//
// Примеры:
//
// deFront("Hello") → "llo"
// deFront("java") → "va"
// deFront("away") → "aay"
// Получение трёх копий подстроки между символами '(' и ')'
//
// Условие:
// Дана строка, вернуть новую строку из трёх копий подстроки, которая находится между символами '(' и ')'. Если символов '(' и ')' меньше или больше одного, вернуть пустую строку.
//
// Примеры:
//
// extraParen("((abc))") → "abcabcabc"
// extraParen("((x))") → "xxx"
// extraParen("()") → ""
// Проверка на наличие подстроки 'java' в начале или после одного пробела
//
// Условие:
// Дана строка, вернуть true, если она содержит подстроку 'java' в начале или после одного пробела. Иначе вернуть false.
//
// Примеры:
//
// javaAtFirst("java") → true
// javaAtFirst("hi java") → true
// javaAtFirst("hi jack") → false
// Удаление каждого третьего символа
//
// Условие:
// Дана строка, удалите каждый третий символ, начиная с первого, до тех пор, пока длина строки не станет меньше 2.
//
// Примеры:
//
// everyNth("Miracle") → "Mrce"
// everyNth("abcdefg") → "abfg"
// everyNth("abcdef") → "abce"
// Проверка на совпадение символов в первом и последнем положении
//
// Условие:
// Дана строка, вернуть true, если первый и последний символы строки совпадают. Регистр не имеет значения.
//
// Примеры:
//
// sameFirstLast("abca") → true
// sameFirstLast("abcab") → false
// sameFirstLast("ab") → true
// Удаление символов 'x' в строке
//
// Условие:
// Дана строка, вернуть версию без встреченных символов 'x', исключая первый и последний символ. 'x' не будет находиться в начале и конце строки.
//
// Примеры:
//
// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"
// Создание новой строки из двух дублирующихся символов
//
// Условие:
// Дана строка, вернуть новую строку из двух дублирующихся символов, расположенных между строками исходной строки.
//
// Примеры:
//
// repeatEnd("Hello", 3) → "llollollo"
// repeatEnd("Hello", 2) → "lolo"
// repeatEnd("Hello", 1) → "o"
// Удаление повторяющихся символов в строке
//
// Условие:
// Дана строка, вернуть версию, где каждый символ не повторяется. Убедитесь, что самый первый и самый последний символы не повторяются.
//
// Примеры:
//
// uniquify("hello") → "helo"
// uniquify("banana") → "ban"
// uniquify("aabcccdd") → "abcd"
// Переворот строки и замена пробелов
//
// Условие:
// Дана строка, вернуть новую строку, где все символы, кроме первого и последнего, перевёрнуты, а пробелы заменены на символ '*'.
//
// Примеры:
//
// flipEndChars("Cat, dog, and mouse.") → "C*g, dog, dna mouse."
// flipEndChars("ada") → "a*a"
// flipEndChars("Ada") → "ad*"
// Конкатенация с условием удаления последнего символа
//
// Условие:
// Даны две строки, вернуть их конкатенацию, за исключением удаления последнего символа обеих строк. Считается, что длины строк хотя бы 1.
//
// Примеры:
//
// nonEndConcat("Hello", "There") → "Hellhere"
// nonEndConcat("abc", "def") → "abcf"
// nonEndConcat("ab", "c") → "ab"
// Замена всех вхождений подстроки в строке
//
// Условие:
// Даны строки str и sub, вернуть новую строку, где все вхождения строки sub в строке str заменены на символ '*'.
//
// Примеры:
//
// everywhere("xyxyxy", "xy") → "*y*y*"
// everywhere("abc1abc1abc", "abc") → "***1***1***"
// everywhere("12345", "2") → "1*345"
// Проверка на совпадение первых двух символов строк
//
// Условие:
// Даны две строки, вернуть true, если первые два символа каждой строки идентичны.
//
// Примеры:
//
// firstTwoSame("edited", "edit") → true
// firstTwoSame("edit", "edit") → false
// firstTwoSame("edit", "ed") → true
// Конкатенация без повторения последнего символа
//
// Условие:
// Даны две строки, вернуть их конкатенацию без повторения последнего символа первой строки и первого символа второй строки.
//
// Примеры:
//
// concatEnds("Hello", "There") → "Hellhere"
// concatEnds("abc", "cat") → "abcat"
// concatEnds("Java", "Code") → "JavCode"
// Вставка подстроки в строку по индексу
//
// Условие:
// Даны строка base и строка insert, вернуть новую строку, где подстрока insert вставлена в строку base перед указанным индексом n.
//
// Примеры:
//
// insertString("Hello", "Hi", 3) → "HelHi lo"
// insertString("abc", "123", 1) → "a123bc"
// insertString("abc", "xyz", 10) → "abcxyz"
// Удаление пробелов и переворот строки
//
// Условие:
// Дана строка, удалить все пробелы и перевернуть символы строки.
//
// Примеры:
//
// noSpaceReverse("Hello World") → "dlroWolleH"
// noSpaceReverse("  I am here!  ") → "!erehma I"
// noSpaceReverse("Coding is fun!") → "!nuf si gnidoC"
// Удаление символов на позициях 0, 1, 4 и 5
//
// Условие:
// Дана строка, удалить символы на позициях 0, 1, 4 и 5 строки и вернуть оставшиеся символы.
//
// Примеры:
//
// altPairs("kitten") → "kien"
// altPairs("CodingHorror") → "Congrr"
// altPairs("Chocolate") → "Chole"
// **Конкатенация строк с пер
// еворотом второй строки**
//
// **Условие:**
// Даны две строки, вернуть их конкатенацию с переворотом второй строки.
//
// **Примеры:**
// - `reverseConcat("Hello", "There") → "HelloerehT"`
// - `reverseConcat("Hi", "There") → "HierehT"`
// - `reverseConcat("Java", "Code") → "JavaedoC"`
// Перевод строки в верхний регистр
//
// Условие:
// Дана строка, вернуть новую строку, где каждая буква переведена в верхний регистр, а каждая цифра заменена на знак '#'.
//
// Примеры:
//
// upperCaseDigits("Hello123") → "HELLO###"
// upperCaseDigits("Abc456") → "ABC###"
// upperCaseDigits("12#$%") → "###$%"
// Реверс символов в подстроке
//
// Условие:
// Даны строка base, индексы start и end. Вернуть новую строку, где символы между start и end индексами ( включительно) перевёрнуты.
//
// Примеры:
//
// reverseSection("Hello", 1, 3) → "Holel"
// reverseSection("abcdef", 0, 2) → "cbadef"
// reverseSection("CodingIsFun", 3, 9) → "CodgnIsiFun"