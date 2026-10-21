/*
Calculadora de Partidas Rankeadas - Entendendo o Desafio

Instruções para entrega

2️⃣ Calculadora de partidas Rankeadas
O Que deve ser utilizado

Variáveis
Operadores
Laços de repetição
Estruturas de decisões
Funções
Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}"
*/

console.log("DESAFIO - Calculadora de Partidas Rankeadas");

function calcularPartidas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  const faixas = [
    { limite: 10, nivel: "Ferro" },
    { limite: 20, nivel: "Bronze" },
    { limite: 50, nivel: "Prata" },
    { limite: 80, nivel: "Ouro" },
    { limite: 90, nivel: "Diamante" },
    { limite: 100, nivel: "Lendário" },
  ];

  for (const faixa of faixas) {
    if (saldoVitorias <= faixa.limite) {
      return { saldoVitorias, nivel: faixa.nivel };
    }
  }

  return { saldoVitorias, nivel: "Imortal" };
}

const resultado = calcularPartidas(65, 20);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);