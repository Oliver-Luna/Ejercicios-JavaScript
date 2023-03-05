let bill_value = 430;
let tip;

tip =
  bill_value < 50
    ? 0
    : bill_value >= 50 && bill_value <= 300
    ? bill_value * 0.15
    : bill_value * 0.2;

console.log(`The bill was ${bill_value}, the tip was ${tip}, and the total value 
${bill_value + tip}`);
