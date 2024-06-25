function calculateSquarePerimetr(sideLenght) {
    return sideLenght * 4;
}

const side = 5;
const perimetr = calculateSquarePerimetr(side)
console.log(`perimetr with side ${side} is ${perimetr}`)