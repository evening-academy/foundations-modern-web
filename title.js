function myTitle (title){
  return title || "Захардкоженное название сайта";
}
/*
console.log(myTitle("Рецепт драников"));
console.log(myTitle(null));*/

function greatUser(username){
  return username || "Anonymous";
}

let userInput = "             ";

console.log(greatUser(userInput.trim()));