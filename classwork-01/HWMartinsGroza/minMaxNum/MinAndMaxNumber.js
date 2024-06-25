function findMinAndMaxNumber(numbers) {
    if (numbers.length === 0) {
        return "List is empty!";
    }
    const minNumber = Math.min(...numbers);
    const maxNumber = Math.max(...numbers);

    return {
        min: minNumber,
        max: maxNumber
    };
}

const numbers = [1, 8, 2, 9, 11, 85, 45, 0]
const result = findMinAndMaxNumber(numbers);
console.log(result);