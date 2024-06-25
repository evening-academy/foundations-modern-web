function squareArea(site) {
    // return site * site;
    return site ** 3;
}

console.log(squareArea(5));
console.log("test");

function testFunction(){
    squareArea(10);
    squareArea();
    exampleFunc();
}

testFunction();
function exampleFunc(){
    console.log("print из exampleFunc")
}