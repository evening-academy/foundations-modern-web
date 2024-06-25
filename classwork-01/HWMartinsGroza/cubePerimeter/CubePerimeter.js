function calculateCubePerimeter(edgeLength) {
    return edgeLength * 12;
}

const edge = 5;
const perimeter = calculateCubePerimeter(edge);
console.log(`Cube perimeter is ${perimeter}`);