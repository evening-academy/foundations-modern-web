function randomNumber(minNum, maxNum) {
    const random = Math.random();
    const difference = max - min;
    const randomNumber = min + random * difference;
    return randomNumber;
}

const min = 1;
const max = 15;
const randomNum = randomNumber(min, max);
console.log(`Random number in range [${min}, ${max}] is ${randomNum}`);