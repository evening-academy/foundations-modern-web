let bool = false;
let nix = null;
let unnix = undefined;
let num = 0;
let str = '';
let numnan = NaN;

function falsyValuesProof(values) {
  if (values) {
    console.log('Вроде как не фальшивое значение');
  } else {
    console.log('вроде теперь фальшивое');
  }
}

// falsyValuesProof(bool);
// falsyValuesProof(nix);
// falsyValuesProof(unnix);
// falsyValuesProof(num);
// falsyValuesProof(str);
// falsyValuesProof(numnan);
// falsyValuesProof(true);

function falsyValuesProof2(values) {
  return !!values;
}

console.log(falsyValuesProof2(undefined));

