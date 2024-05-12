// let nome = ("Gustavo");
// console.log(nome[1])

const alunos = ['arquivo1', 'arquivo2', 'arquivo3'];

console.log(typeof alunos); // objeto 
console.log(alunos instanceof Array);



console.log(alunos.slice(0, 0)); fatiamento


console.log(alunos[45]); // value undefined

delete alunos[1]; // espaço vazio; permanece o indice

 let comeco = alunos.shift(); // remove do começo;
 console.log(comeco);

 let removido = alunos.pop(); // remove o ultimo elemento
 console.log(removido);




 alunos.unshift('arquivo 0'); // add primeiro indice

// alunos.push('arquivo 4'); // add in array

// alunos[0] = 'Arquivo s';
// alunos[alunos.length] = 'arquivo x';
// alunos[alunos.length] = 'arquivo 4';
// console.log(alunos.length); // tamanho
// console.log(alunos);
