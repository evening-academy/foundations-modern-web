function calculate(num1, num2) {
    return num1 + num2;
}

document.getElementById("button").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const result = calculate(num1, num2);

    console.log("Какая то странная консоль: ", result)

    document.getElementById('result').innerHTML = 'Result: ' + result;
});
