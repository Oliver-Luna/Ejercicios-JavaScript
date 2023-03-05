let entrada = "Hola mi nombre es Oliver nombre Oliver";
let cadena = entrada.split(" ");
let count = 0;

for (let i = 0; i < cadena.length; i++) {
  for (let j = 0; j < cadena.length; j++) {
    cadena[i] === cadena[j] ? count++ : "";
  }
  console.log(`${cadena[i]} = ${count}`);
  count = 0;
}
