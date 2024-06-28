let str = 'Привет мир!';
console.log(str);
console.error(str);

let str1 = 'hello';
let str2 = 'world';
let result = str1 + ' ' + str2;
let test = 'test';
// let test = "двойные кавычки ничем не отличаются от одинарных"

let intresting = 'a wot tak: \'a\'';
console.log(result);
console.log(intresting);

let templateQuotes = `test
sdlkahsfdldhf
fgfdghgfhjgfhjgf
${str1}
`;
console.log(templateQuotes);

console.log(typeof templateQuotes);

console.log(str1.length);
console.log(str1.indexOf("lo"));

console.log(str1.startsWith("a"));
console.log(str1.startsWith("h"));

//     - `startsWith` и `endsWith` — проверяют, начинается или заканчивается ли строка определённой подстрокой:

console.log(str1.concat(str2));
console.log(str1 + str2);

let userInput = "12345";
let strToNumber = parseInt(userInput, 10)
console.log(strToNumber);
console.log(typeof  userInput);
console.log(typeof strToNumber);

let userInput2 = "weqwe12345"
let test2 = parseInt(userInput2)
console.log(test2);
console.log(typeof test2);