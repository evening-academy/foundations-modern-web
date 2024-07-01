function goInPark(season, sonne) {
  return season && sonne;
}

let season2024 = false;
let sonne2024 = false;

// console.log(goInPark(season2024, sonne2024));


function icePermission(perm1, perm2) {
  return perm1 || perm2;
}

// console.log(icePermission(false, false));
function icePermissionAfterOneMonth(perm1, perm2) {
  return perm1 && perm2;
}
console.log(icePermissionAfterOneMonth(true, true));


