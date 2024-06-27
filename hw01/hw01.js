
// Найти площадь и длину окружности круга с заданным радиусом.
const radius = 9;
// площадь круга
const area = Math.PI * Math.pow(radius, 2);
// длина окружности
const circumference = 2 * Math.PI * radius;
console.log(`For a circle with a radius of ${radius}:
Area: ${area}
Circumference: ${circumference}`);

// Найти минимальное и максимальное значение из списка чисел.
const num = 9;
const squareRoot = Math.sqrt(num);
console.log(`The square root of ${num} is ${squareRoot}`);


// Получить случайное число в заданном диапазоне.
const min = -50;
const max = 10;
const randomNumber = Math.random() * (max - min) + min;
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

// Напишите функцию findSquareArea, которая принимает длину стороны квадрата в качестве аргумента и возвращает его площадь.
function findSquareArea(sideLength) {
    return sideLength * sideLength;
}

// Напишите функцию findSquarePerimeter, которая принимает длину стороны квадрата в качестве аргумента и возвращает его периметр.
function findSquarePerimeter(sideLength) {
    return 4 * sideLength;
}

// Напишите функцию findRectangleArea, которая принимает длину и ширину прямоугольника в качестве аргументов и возвращает его площадь.
function findRectangleArea(length, width) {
    return length * width;
}

// Напишите функцию findRectanglePerimeter, которая принимает длину и ширину прямоугольника в качестве аргументов и возвращает его периметр.
function findRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Напишите функцию findCubeArea, которая принимает длину ребра куба в качестве аргумента и возвращает его площадь.
function findCubeArea(length) {
    return 6 * length * length;
}

// Напишите функцию findCubePerimeter, которая принимает длину ребра куба в качестве аргумента и возвращает его периметр.
function findCubePerimeter(length) {
    return 12 * length;
}

// Напишите функцию findCircleArea, которая принимает радиус круга в качестве аргумента и возвращает его площадь.
function findCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Напишите функцию findCircleCircumference, которая принимает радиус круга в качестве аргумента и возвращает длину его окружности.
function findCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Напишите функцию calculateSquareRoot, которая принимает число в качестве аргумента и возвращает его квадратный корень.
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

// Напишите функцию findMinMax, которая принимает список чисел в качестве аргумента и возвращает минимальное и максимальное число из этого списка.
function findMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return { min, max };
}

// Напишите функцию getRandomNumber, которая принимает два числа в качестве аргументов (минимальное и максимальное значение) и возвращает случайное число в этом диапазоне.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Напишите функцию countChessboardGrains, которая принимает количество клеток шахматной доски в качестве аргумента и возвращает общее количество зёрен, если на первую клетку положить одно зёрнышко, на вторую клетку два зёрнышка, на третью в два раза больше, чем на предыдущей, то есть четыре и так далее.
function countChessboardGrains(numCells) {
    let totalGrains = 0;
    let grainsOnCurrentCell = 1;

    for (let i = 1; i <= 64; i++) {
        totalGrains += grainsOnCurrentCell;
        grainsOnCurrentCell *= 2;
    }
    return  totalGrains;
}

