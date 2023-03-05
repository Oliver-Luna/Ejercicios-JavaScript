let mass_mark = 78;
let hight_mark = 1.69;
let mass_john = 92;
let hight_john = 1.95;
let markHigherBMI;

let mark = mass_mark / Math.round(Math.pow(hight_mark, 2), 4);
let john = mass_john / Math.round(Math.pow(hight_john, 2), 4);

if (mark > john) {
  console.log(`Mark's IBM ${mark} es mas alto que el IBM de John ${john}`);
} else if (mark < john) {
  console.log(`Jonh's IBM ${john} es mas alto que el IBM de Mark ${mark}`);
} else {
  console.log(`Los IBM de John y Mark son iguales`);
}
