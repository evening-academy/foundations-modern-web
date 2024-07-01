function ice(perm1) {
  if (perm1 === true) return true;
  if (perm1 === false) return false;
}

function ice2(perm1) {
  if (perm1 === true) return true;
  else return false;
}

function ice3(perm1) {
  if (perm1 === true) {
    // ещё
    return true;
  } else {
    return false;
  }
}

function ice4(perm1) {
  if (perm1 === true) {
    // ещё
    return true
  }
  return false;
}
function ice5(perm1) {
  if (perm1) return true
  else return false;
}

function icePermission(perm1) {
  return perm1;
}

let papaPermission = true;
let mamaPermission = false;
console.log(icePermission(mamaPermission));
console.log(icePermission(papaPermission));