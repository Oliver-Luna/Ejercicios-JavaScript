let n = 5;

let root = Math.sqrt(5) + 3;
let result = Math.pow(root, n);
result = result.toString();
console.log(result);
let cadena = result.split(".");
cadena = cadena[0];
let final = [];
let ended = "";

for (let index = cadena.length; index >= cadena.length - 3; index--) {
  if (cadena[index] !== undefined) {
    final[index] = cadena[index];
    ended = final.join("");
    if (final.length === 2) {
      ended = "0" + ended;
    } else if (final.length === 1) {
      ended = "00" + ended;
    }
  }
}

console.log(ended);
/*
let index = 3;
while (cadena.length <= index) {
  console.log("hola");
  if (cadena[index] !== undefined) {
    final[index] = cadena[index];

    if (final.length === 2) {
      final = final.unshift("0");
    } else if (final.length === 1) {
      final = final.unshift("00");
    }
  }

  index--;
}
*/
