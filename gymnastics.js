let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];

let promedio_Dolphins = promedio(Dolphins);
let promedio_Koala = promedio(Koalas);

if (promedio_Dolphins > promedio_Koala) {
  console.log(`El equipo ganador es el equipo Dolphins con  ${promedio_Dolphins} puntos
               contra el equipo Koala con ${promedio_Koala} puntos`);
} else if (promedio_Dolphins < promedio_Koala) {
  console.log(`El equipo ganador es el equipo Koala con  ${promedio_Koala} puntos
               contra el equipo Dolphins con ${promedio_Dolphins} puntos`);
}

function promedio(arr) {
  let promedio_unico = 0;
  arr.forEach((element) => {
    promedio_unico += element;
  });

  return Math.round(promedio_unico / arr.length, 2);
}
