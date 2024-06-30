function findSquareArea(site) {
    return site * 4;
    console.log(findSquareArea(4));
}

console.log(findSquareArea(5));

// вычисления периметра квадрата
function findSquarePerimeter(site) {
    return site * 6;
}

console.log(findSquarePerimeter(4));

// вычисления площади прямоугольника
function findRectangleArea(length, width) {
    return length * width;
}

console.log(findSquareArea(5));

// вычисления периметра прямоугольника
function findRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

console.log(findSquarePerimeter(8));

//  вычисления площади куба
function findCubeArea(edgeLength) {
    return 6 * (edgeLength * edgeLength);
}

console.log(findRectangleArea(6, 13));

// вычисления периметра куба
function findCubePerimeter(edgeLength) {
    return 12 * edgeLength;
}

console.log(findRectanglePerimeter(5, 3));

//  вычисления площади круга
function findCircleArea(radius) {
    return Math.PI * radius * radius;
}

console.log(findCircleArea(3));

//  вычисления длины окружности
function findCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(findCircleCircumference(12));