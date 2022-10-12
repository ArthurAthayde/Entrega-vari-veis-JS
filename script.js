// Exercício 1: Combustível

let valorDaCompra = parseFloat(prompt("Quantos reais deseja abastecer?"));
let litro = parseFloat(valorDaCompra / 6.80);
alert(`O cliente abasteceu ${litro.toFixed(2)} litros de combustível.`);

// Exercício 2: °C to °F

let celcius = parseFloat(prompt("Qual o valor de temperatura em graus Celsius?"));
let fahrenheit = parseFloat((9*celcius+160)/5)
alert(`O valor de ${celcius}°C em graus Fahrenheit é de ${fahrenheit.toFixed(1)}°F.`);

// Exercício 3: °F to °C

let fahrenheit2 = parseFloat(prompt("Qual o valor de temperatura em graus Fahrenheit?"));
let celcius2 = (((fahrenheit2 - 32)*5)/9);
alert(`O valor de ${fahrenheit2}°F em graus Celsius é de ${celcius2.toFixed(1)}°C.`);

// Exercício 4: Volume da caixa

let comprimento = parseFloat(prompt("Insira o valor em metros do comprimento."));
let largura = parseFloat(prompt("Insira o valor em metros da largura."));
let altura = parseFloat(prompt("Insira o valor em metros da altura."));
let volume = (comprimento * largura * altura);
alert(`O volume da caixa é de: ${volume.toFixed(2)}m³.`);

// Exercício 5: Valor inteiro ao quadrado

let valor = parseInt(prompt("Insira um valor numérico inteiro (sem casas decimais)."));
let quadrado = (valor*valor);
alert(`O valor de ${valor} ao quadrado é ${quadrado}.`);

// Exercício 6: Média simples

let nota1 = parseFloat(prompt("Insira o valor da 1ª nota."));
let nota2 = parseFloat(prompt("Insira o valor da 2ª nota."));
let nota3 = parseFloat(prompt("Insira o valor da 3ª nota."));
let nota4 = parseFloat(prompt("Insira o valor da 4ª nota."));
let nota5 = parseFloat(prompt("Insira o valor da 5ª nota."));
let soma = (nota1 + nota2 + nota3 + nota4 + nota5);
let media = (soma/5);
alert(`A soma dos valores informados foi de: ${soma.toFixed(1)} e a média das notas é: ${media.toFixed(1)}.`);

// Exercício 7: Resto 

let valor1 = parseInt(prompt("Insira um valor numérico inteiro (sem casas decimais)."));
let valor2 = parseInt(prompt("Insira outro valor numérico inteiro."));
let resto = (valor1 % valor2);
alert(`O resto da divisão de ${valor1} por ${valor2} é: ${resto}.`)

// Exercício 8: Contador de caracteres 

let texto = prompt("Escreva uma palavra ou frase.");
let tamanho = texto.length;
alert(`Este texto possui ${texto.length} caracteres.`);


// Exercício 9: Primeira e última letra 

let texto2 = prompt("Escreva uma palavra ou frase.");
let primeira = texto2[0];
let ultima = texto2[-1];
alert(`A primeira letra deste texto é ${primeira} e última é ${ultima}.`);

