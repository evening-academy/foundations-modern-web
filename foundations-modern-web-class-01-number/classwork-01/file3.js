const val1 = 255;
const str = "Пример строки";
// console.log(typeof val1);
// console.log(typeof str);
let val2 = 255.0;

// console.log(val1 === val2);
let val3 = .5;
let val4 = 94_823_047_230_432;
let val5 = 345_29; // €

// -2^-53 do 2^53

// BigInt

const bigIntExample = 5746238749234912649238n;
console.log(typeof bigIntExample)

/*
блочный комментарий
*/

const bigintSecondExample = BigInt(5435436546546546546);
const bigintThirdExample = BigInt("5435436546546546546");
console.log(typeof bigintSecondExample)
console.log(typeof bigintThirdExample)