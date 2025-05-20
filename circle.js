const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Yarıçapı girin: ", function(input) {
  const r = Number(input); 

  if (isNaN(r)) {
    console.log("Geçerli bir sayı girin!");
  } else {
    const alan = Math.PI * r * r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan.toFixed(2)}`);
  }

  rl.close();
});
