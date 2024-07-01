function cigarParty(cigars, weekend) {
  // return (cigars >= 40 && cigars <= 60) || weekend;
  // return cigars >= 40 && ( weekend || cigars <= 60)
  return cigars >= 40 && weekend || (cigars >= 40 && cigars <= 60)
}



console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));