function calculateCubeArea(edgeLenght) {
    return edgeLenght * (edgeLenght * edgeLenght);
}

const edge = 4;
const surfaceArea = calculateCubeArea(edge);
console.log(`Cube surface area with edge lenght ${edge} is ${surfaceArea}`);