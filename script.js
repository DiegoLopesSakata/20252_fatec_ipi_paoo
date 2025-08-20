//inferno de callbacks
//callback hell
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
  const exibirConteudo = function(erro, conteudo){
    if(erro){
      console.log(`Deu erro: ${erro}`)
    }
    else{
      console.log(`Conteúdo: ${conteudo}`)
      const dobro = Number(conteudo.toString()) * 2
      const finalizar = function(erro){
        if(erro){
          console.log(`Deu erro escrevendo o dobro: ${erro}`)
        }
        else{
          console.log('A escrita do dobro deu certo')
        }
      }
      fs.writeFile('dobro.txt', dobro.toString(), finalizar)
      console.log('Fim de exibirConteudo...')
    }
  }
  fs.readFile(nomeArquivo, exibirConteudo)
  console.log('Fim da abrirArquivo...')
}

//chamar a função daqui a pouco
abrirArquivo("Arquivo.txt")

// function demorada(tempo){
//   const atualMaisTempo = new Date().getTime() + tempo
//   while(new Date().getTime() <= atualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// const a = 2 + 6
// const b = 5 + 9
// setTimeout(() => {
//   const tempo = 2000
//   const d = demorada(tempo)
//   console.log(`d(${tempo}): ${d}`)  
// }, 0)
// setTimeout(() => {
//   const tempo = 1000
//   const d = demorada(tempo)
//   console.log(`d(${tempo}): ${d}`)  
// }, 0)
// const e = 2 + a + b

// console.log(`e: ${e}`)

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre a última :(')

//uma concessionária com CNPJ e endereço, com logradouro, numero e bairro (pensar na estrutura que um bairro pode ter). Ela tem um estoque de veiculos. Cada um tem marca, modelo e ano de fabricação. Precisa pensar que o número de veículos que a concessionária tem pode variar ao longo do tempo, ele pode estar vazio, pode ter 15 veiculos, pode ter 502 e assim por diante.

// let calculadora = {
//   soma: (a, b) => a + b,
//   subtracao: function(a, b){
//     return a - b
//   },
//   multiplicacao: (a, b) => a * b
// }

// //dados esses dsi valores, aplicar todas as operações da calculadora sobre eles
// let x = 2
// let y = 3
// for(let funcao of Object.values(calculadora)){
//   //antes de mostrar o resultado, mostrar o nome
//   console.log(`${funcao.name}: ${funcao(x, y)}`)
// }

//GSON
// let concessionaria = {
//   CNPJ: '00011122210001-45',
//   endereco: {
//     logradouro: 'Rua A',
//     numero: 120,
//     bairro: {
//       nome: 'Vila J',
//       regiao: 'zona norte'
//     }
//   },
//   estoque: []
// }

// function adicionarCarro(marca, modelo, anoFabricação){
//   let veiculos = {
//   marca: marca,
//   modelo: modelo,
//   anoFabricação: anoFabricação
// }

//   concessionaria.estoque.push(veiculos)
// }

// adicionarCarro('Toyota', 'Hibrido', 1885)
// adicionarCarro('Hyundai', 'Gasolina', 2005)

// console.log(concessionaria.estoque)

//Professor:

// let concessionaria = {
//   CNPJ: '00011122210001-45',
//   endereco: {
//     logradouro: 'Rua A',
//     numero: 120,
//     bairro: {
//       nome: 'Vila J',
//       regiao: 'zona norte'
//     }
//   },
//   veiculos: {
//     'Ford': [
//       {
//         modelo: 'Ka',
//         anoFabricacao: 2015
//       },
//       {
//         modelo: 'EcoSport',
//         anoFabricacao: 2018
//       }
//     ],
//     'Chevrolet': [
//       {
//         modelo: 'Onix',
//         anoFabricacao: 2025
//       }
//     ]
//   }

//   // veiculos: [
//   //   {
//   //     marca: 'Ford',
//   //     modelo: 'Ka',
//   //     anoFabricacao: 2015
//   //   },
//   //   {
//   //     marca: 'Chevrolet',
//   //     modelo: 'Onix',
//   //     anoFabricacao: 2025
//   //   }
//   // ]
// }

// //escrever um for que, internamente, itera sobre cada possível marca, para cada marca, mostrar somente o modelo do veículo
// //dica: pesquise  sobre 'Keys' em javascript

// // for(let veiculoFord of concessionaria.veiculos.Ford){
// //   console.log('Marca:', veiculoFord.modelo)
// // }

// // for(let veiculoChevrolet of concessionaria.veiculos.Chevrolet){
// //   console.log('Marca:', veiculoChevrolet.modelo)
// // }

// //professor:

// for(let marca of Object.keys(concessionaria.veiculos)){
//   console.log(marca)
//   const veiculosDaMarca = concessionaria.veiculos[marca]

//   for(let veiculo of veiculosDaMarca){
//     console.log(veiculo.modelo)
//   }
// }

//objeto Javascript não é sinônimo de Objeto JSON (Javascript Object Notation), mas são parecidos
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 121
// let pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 121
//   }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa['endereco'].logradouro)

//uma pessoa se chama João e tem 17 anos
// let pessoa = {
//   nome: 'João',
//   idade: 17
// }

// console.log('Me chamo ' + pessoa.nome)
// console.log('Minha idade é ' + pessoa['idade'])

// function saudacoesFactory(saudacao, nome){
//     let a
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacaoFactory('Ola', 'Joao')
// let tchauJoao = saudacoesFactory('Tchau', 'Joao')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola()
// olaResult()

//closures
// let umaFuncao = function (){
//     console.log('Fui armazenada em  uma variavel')
// }
// // umaFuncao()

// function f(funcao){
//     funcao()
// }
// // f(umaFuncao)

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return  outraFuncao
// }

// f(g())
// g()()
// const gResult = g()

//vetores, parte 2
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const todosComecamComA = nomes.some(n => n.startsWith('A'))
// console.log(todosComecamComA)
// const peloMenosUmComecaComA = nomes.every(n => n.startsWith('A'))
// console.log(peloMenosUmComecaComA)

//dada a coleção a seguir, produzir outra coleção contendo o quadrado de cada número
//usando arrow functions e digitando a menor quantidade de caracteres possivel
// const numeros = [1, 2, 3]
// const quadrado = numeros.map(valor => valor * valor)
// console.log(quadrado)

// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)

// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)

//arrow function
//tem exatamento um parametro: parenteses podem ser omitidos:
// const dobro = n => 2 * n
// console.log(dobro(2))

//tem somente uma linha que produz um valor a ser devolvido:
// const dobro = (n) => {
//     console.log('Calculando o dobro...')
//     return 2 * n
// }

// const dobro = (n) => 2 * n
// console.log(dobro(5))

// //tem somente uma linha: as chaves podem ser omitidas
// const hello = () => console.log('Hello')
// const hello = () => {
//     console.log('Hello')
// }
// hello()

// const triplo = function (n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(6))

// function hello(){
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('Hello, ' + nome)
// }
// hello('Ana')

// //vetores
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[7] = "abc"
// console.log(v1.length)
// // console.log(v1)

// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }

// declaração de variáveis
// const, let e var

//comparação
//operadores == e ===

//hoist, içar
// var idade = 18
// console.log("oi, " + nome)
// if(idade >= 18){
//     var nome = 'João'
//     console.log("Sim, " + nome + ". Você pode dirigir.")
// }
// console.log(`Até mais, ${nome}`) // precisa estar entre cráse ``

// var linguagem = 'Javascript'
// console.log("Aprendendo " + linguagem)
// var linguagem = 'Java'
// console.log("Aprendendo " + linguagem)

// let a = 2
// let nome = 'José'
// console.log(a)
// console.log(nome)
// nome = 'José da Silva'
// console.log(nome)

// String nome = 'José'
// const nome = 'José'
// console.log(nome)
// nome = 'José da Silva'