
const nome = "Gustavo";
const sobrenome = "Barros";
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // indice de massa corporal
let nascimento;
nascimento = 2024 - 30;


imc = peso / (altura * altura);
console.log("Meu imc eh:", imc.toFixed(2));

console.log(`
${nome} ${sobrenome} tem ${idade} anos, pesa
${peso}, tem ${altura.toFixed(2)} de altura e seu IMC é de ${imc}
${nome} nasceu em ${nascimento}
`);
