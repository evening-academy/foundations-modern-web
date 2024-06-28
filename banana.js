console.log(
  ("b" + "a" + +"a" + "a").toLocaleLowerCase()
);

// ba
// +"a"   = NaN
// banan
// banana

// если хотя бы один из ДВУХ операндов стринг, то у нас конкатенация.

console.log(2+2+2);
console.log(3+"3"+3);
console.log(3 + 3  +"3");
console.log("3" + 3  +3);
