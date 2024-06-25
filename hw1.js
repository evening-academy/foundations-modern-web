// 1.Площадь квадрата
function calcSquareArea(side) {
    return side ** 2;
}
const side = 10;
const areaSq = calcSquareArea(side);
console.log("Площадь квадрата: ", areaSq);

//2.Периметр квадрата
function calcSquarePerimeter(side) {
    return 4 * side;
}
const perimeter = calcSquarePerimeter(side);
console.log("Периметр квадрата: ", perimeter);


//3.Площадь прямоугольника
function calcRectangleArea(length, width) {
    return length * width;
}
const length = 20;
const width = 30;
const areaRect = calcRectangleArea(length, width);
console.log("Площадь прямоугольника: ", areaRect);


//4.Периметр прямоугольника
function calcRectanglePerimeter(length, width) {
    return 2 * (length + width);
}
const perimeterRect = calcRectanglePerimeter(length, width);
console.log("Периметр прямоугольника: ", perimeterRect);


//5.Площадь куба
function calcCubeArea(edgeCube) {
    return (edgeCube **2)*6;
}
const edge = 3;
const areaCube = calcCubeArea(edge);
console.log("Площадь куба: ", areaCube);


//6.Периметр куба
function calcCubePerimeter (edgeCube) {
    return edgeCube*12;
}
const edgePer = 5;
const perimeterCube = calcCubePerimeter(edgePer);
console.log("Периметр куба: ",perimeterCube);


//7.Площадь круга
function calcCircleArea(radius) {
    return Math.PI * (radius * radius);
}

const radius = 4;
const areaCircle = calcCircleArea(radius);
console.log("Площадь круга: ", areaCircle );

//8.Длина окружности
function calcCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}
const circumference = calcCircleCircumference(radius);
console.log("Длина окружности: ", circumference);


//9.Квадратный корень
function calculateSquareRoot(number) {
    return Math.sqrt(number);
}
const number = 9;
const squareRoot = calculateSquareRoot(number);
console.log("Квадратный корень числа 9 :", squareRoot );


//10.Миним. и максим.числа списка
function findMinMaxOfList(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return {min, max};

    // let min = numbers[0];
    // let max = numbers[0];
    //
    // for (let i = 1; i < numbers.length; i++) {
    //     if (numbers[i] < min) {
    //         min = numbers[i];
    //     }
    //     if (numbers[i] > max) {
    //         max = numbers[i];
    //     }
    // }
    // return { min, max };
}
const numbers = [12,5,-20,99,45,11,2,0,-7];
const result = findMinMaxOfList(numbers);
console.log("Минимальное число:",result.min);
console.log("Максимальное число:",result.max);


// 11.Рандом.число в интервале [min, max]
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const min = 1;
const max = 10;
const randomNumber = generateRandomNumber(min, max);
console.log("Случайное число в диапазоне от 1 до 10 :", randomNumber);


//12.Прогрессия зернышек на шахм.доске = 2 в степени(n−1)
function countChessboardGrains(cells) {
    return Math.pow(2,cells-1)
}

const cells = 64;
const summGrains = countChessboardGrains(cells);
console.log("Сумма зерен на шахматной доске: ", summGrains);