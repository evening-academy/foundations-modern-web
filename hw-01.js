// Функция для вычисления площади квадрата
function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

// Функция для вычисления периметра квадрата
function calculateSquarePerimeter(sideLength) {
  return sideLength * 4;
}

// Функция для вычисления площади прямоугольника
function calculateRectangleArea(sideLength, sideWidth) {
  return sideLength * sideWidth;
}

// Функция для вычисления периметра прямоугольника
function calculateRectanglePerimeter(sideLength, sideWidth) {
  return sideLength * 2 + sideWidth * 2;
}

// Функция для вычисления площади куба.
function calculateCubeArea(edgeLength) {
  return 6 * edgeLength ** 2;
}

// Функция для вычисления периметра куба
function calculateCubePerimeter(edgeLength) {
  return 12 * edgeLength;
}

// Функция для вычисления площади круга.
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// Функция для вычисления длинны окружности.
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// Функция для вычисления квадратного корня
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}

// Функция которая возвращает минимальное и максимальное число из списка.
function findMinMax(numbers) {
  if (numbers.length === 0) {
    return `Массив не содержит елементов`;
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}
// Функция которая возвращает случайное число диапазона.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функция для вычисления общего количества зёрен на шахматной доске
function countGrainsAnChessboard(numOfSquares) {
  if (numOfSquares <= 0) {
    return 0;
  }
  let totalGrains = 0;
  let grainsOnCurrentSquare = 1;
  for (let i = 1; i <= numOfSquares; i++) {
    totalGrains += grainsOnCurrentSquare;
    grainsOnCurrentSquare *= 2; // Удвоение зёрен на следующей клетке
  }
  return totalGrains;
}

const sideLength = 5;
const sideWidth = 6;
const edgeLength = 4;
const radius = 5;
const number = 9;
const numbers = [13, 11, -7, 9, 64, 602];
const min = 1;
const max = 100;
const numOfSquares = 24; // количество клеток на шахматной доске

const squareArea = calculateSquareArea(sideLength);
console.log(`Площадь квадрата со стороной ${sideLength} равна ${squareArea}`);

const squarePerimeter = calculateSquarePerimeter(sideLength);
console.log(
  `Периметр квадрата со стороной ${sideLength} равен ${squarePerimeter}`
);

const rectangleArea = calculateRectangleArea(sideLength, sideWidth);
console.log(
  `Площадь квадрата со сторонами ${sideLength} и ${sideWidth}  равна ${rectangleArea}`
);

const rectanglePerimeter = calculateRectanglePerimeter(sideLength, sideWidth);
console.log(
  `Периметр квадрата со сторонами ${sideLength} и ${sideWidth}  равна ${rectanglePerimeter}`
);

const cubeArea = calculateCubeArea(edgeLength);
console.log(
  `Площадь поверхности куба с длиной ребра ${edgeLength} равна ${cubeArea}`
);

const cubePerimeter = calculateCubePerimeter(edgeLength);
console.log(
  `Сумма длин всех ребер куба с длиной ребра ${edgeLength} равна ${cubePerimeter}`
);

const circleArea = calculateCircleArea(radius);
console.log(
  `Площадь круга с радиусом ${radius} равна ${circleArea.toFixed(2)}`
);

const circumference = calculateCircumference(radius);
console.log(
  `Длина окружности круга с радиусом ${radius} равна ${circumference.toFixed(
    2
  )}`
);

const squareRoot = calculateSquareRoot(number);
console.log(`Квадратный корень из числа ${number} равен ${squareRoot}`);

const result = findMinMax(numbers);
console.log(result);

const randomNum = getRandomNumber(min, max);
console.log(`Рандомное число: ${randomNum}`);

const totalGrains = countGrainsAnChessboard(numOfSquares);
console.log(
  `Общее количество зёрен на ${numOfSquares} клетках: ${totalGrains}`
);
