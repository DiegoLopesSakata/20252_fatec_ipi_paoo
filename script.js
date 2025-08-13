function saudacoesFactory(saudacao, nome){
    let a
    return function(){
        console.log(`${saudacao}, ${nome}`)
    }
}

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