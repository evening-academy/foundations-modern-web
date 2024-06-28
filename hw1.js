function findSquareArea(sideLength) {
    return sideLength * sideLength;
}

const side1 = 5;
const area = findSquareArea(side1);
console.log(`Площадь квадрата со стороной ${side1} равна ${area}`);


function findSquarePerimeter(sideLength) {
    return 4 * sideLength;
}

const side2 = 5;
const perimeter = findSquarePerimeter(side2);
console.log(`Периметр квадрата со стороной ${side2} равен ${perimeter}`);


function findRectangleArea(length, width) {
    return length * width;
}

const length = 10;
const width = 5;
const area1 = findRectangleArea(length, width);
console.log(`Площадь прямоугольника с длиной ${length} и шириной ${width} равна ${area1}`);


function findRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

const length1 = 10;
const width1 = 5;
const perimeter2 = findRectanglePerimeter(length1, width1);
console.log(`Периметр прямоугольника с длиной ${length1} и шириной ${width1} равен ${perimeter2}`);


function findCubeArea(edgeLength) {
    // Площадь куба = 6 * (длина ребра)^2
    return 6 * (edgeLength * edgeLength);
}

const edge = 5;
const area2 = findCubeArea(edge);
console.log(`Площадь куба с длиной ребра ${edge} равна ${area2}`);


function findCubeEdgeSum(edgeLength) {
    // Сумма длин всех ребер куба = 12 * длина ребра
    return 12 * edgeLength;
}

const edge1 = 5;
const edgeSum = findCubeEdgeSum(edge1);
console.log(`Сумма длин всех ребер куба с длиной ребра ${edge1} равна ${edgeSum}`);


function findCircleArea(radius) {
    // Площадь круга = π * (радиус)^2
    return Math.PI * (radius * radius);
}

const radius = 5;
const area3 = findCircleArea(radius);
console.log(`Площадь круга с радиусом ${radius} равна ${area3}`);


function findCircleCircumference(radius) {
    // Длина окружности = 2 * π * радиус
    return 2 * Math.PI * radius;
}

const radius1 = 5;
const circumference = findCircleCircumference(radius1);
console.log(`Длина окружности с радиусом ${radius1} равна ${circumference}`);


function calculateSquareRoot(number) {
    // Квадратный корень числа
    return Math.sqrt(number);
}

const number = 16;
const squareRoot = calculateSquareRoot(number);
console.log(`Квадратный корень числа ${number} равен ${squareRoot}`);


function findMinMax(numbers) {
    // Находим минимальное и максимальное числа с использованием Math.min и Math.max
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    // Возвращаем объект с минимальным и максимальным числом
    return {min, max};
}

const numbers = [3, -5, 7, 2, 8, -1, 4];
const result = findMinMax(numbers);
console.log(`Минимальное число: ${result.min}, Максимальное число: ${result.max}`);


function getRandomNumber(min, max) {
    // Генерируем случайное число в диапазоне [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(`Случайное число в диапазоне от ${min} до ${max}: ${randomNumber}`);


function countChessboardGrains(numCells) {
    let totalGrains = 0;
    for (let i = 1; i <= numCells; i++) {
        // Количество зёрен на текущей клетке
        let grainsOnCurrentCell = Math.pow(2, i - 1);
        // Добавляем зёрна на текущей клетке к общему количеству
        totalGrains += grainsOnCurrentCell;
    }
    return totalGrains;
}

const numCells = 64; // Всего 64 клетки на шахматной доске
const totalGrains = countChessboardGrains(numCells);
console.log(`Общее количество зёрен на шахматной доске из ${numCells} клеток: ${totalGrains}`);
git