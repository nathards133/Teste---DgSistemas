const fs = require('fs');
const Papa = require('papaparse');

let jsonData = [];

// Função para ler o arquivo CSV e convertê-lo em um objeto JSON

// function readCSV() {
// 	const fs = require('fs');
// 	const csv = fs.readFileSync('data-teste.csv', 'utf-8');
// 	const jsonData = Papa.parse(csv, {header: true}).data;
// 	console.log(jsonData);
//   return jsonData;
// }

// let data = readCSV();
function lerCSV() {
	const fs = require('fs');
	const csv = fs.readFileSync('data-teste.csv', 'utf-8');
	const dadosJson = Papa.parse(csv, {header: true}).data;
	console.log(dadosJson);
	return dadosJson;
}

let dados = lerCSV();

 
// Função para filtrar os dados pelo valor da cidade
function filterByCity(dados, city) {
	const filteredData = dados.filter(item => item.cidade === city);
	console.log(filteredData);
	
}
filterByCity(dados,'Blumenau');

 
// // Função para ordenar os dados pelo valor da coluna e sentido desejado
function sortByColunas(data,column, order) {
	const sortedData = data.sort((a, b) => {
		 if (order === 'asc') {
		 return a[column] > b[column] ? 1 : -1;
		 } else {
		 return a[column] < b[column] ? 1 : -1;
		 }
	});
	console.log(sortedData);
}
sortByColunas(dados,"idade", "ASC");


    // Função para gerar um array com 100 números aleatórios e filtrar os números ímpares
function randomArray() {
        let randomNumbers = [];
      
        for (let i = 0; i < 100; i++) {
          randomNumbers.push(Math.floor(Math.random() * 100));
        }
      
        const filteredNumbers = randomNumbers.filter((number, index) => index % 2 !== 0);
        console.log(filteredNumbers);
}
	randomArray();

//     // Função para calcular o valor total de uma compra com base no valor de cada produto e na quantidade de cada um
function simularFinanciamento(emprestimoTotal, parcelaMensal, juros) {
	let debito = emprestimoTotal;
	let valorTotalPago = 0;
	let meses = 0;
	while (debito > 0) {
		 debito += debito * (juros / 100);
		 debito -= parcelaMensal;
		 valorTotalPago += parcelaMensal;
		 meses++;
	}
	console.log(`Faltam ${meses} meses para terminar suas parcelas, continue pagando mensalmente, atualmente seu debito total é de: R$ ${valorTotalPago}`);
}
simularFinanciamento(20000, 1000, 2);

      