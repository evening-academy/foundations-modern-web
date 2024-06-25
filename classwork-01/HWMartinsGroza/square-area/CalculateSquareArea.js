function calculateSquareArea(sideLenght) {
    return sideLenght * sideLenght;
}

const side = 5;
const area = calculateSquareArea(side);
console.log(`Square Area with side ${side} is ${area}`);