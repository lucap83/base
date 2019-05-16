//1. dimostrazione duck typing

// let a = 1

// let b = ' - number one'

// let c  = a + b

// console.log('c', c)

// // //2. dimostrazione ==, ===, != e !==
// let a = 2
// let d = '2'
// if (a !== d) {
//     console.log('are the same')
// } else {
//     console.log('are different')
// }


// // //3. definizione di funzione

// function test(a, b, c) {
//     let d = b - c
//     return a + d
// }

// let k = test('ciao','ab','b')

// console.log('function def', k)

// //4. definizione di oggetto

// let objectFunction = function() {
//     this.id = 1
//     this.value = 'primo valore'

//     this.stampaId = function() {
//         console.log('my function object id is', this.id)
//     }

//     return this;

// }
// let of = new objectFunction
// console.log('object function', of)
// of.stampaId()


// let object =  {
//     id: 1,
//     value: 'primo valore',
//     stampaId: function () {
//         console.log('my id is', this.id)
//     },
//     stampaIdAnonima: () => {
//         console.log('my id is', this.id)
//     }
// }
// console.log('object', object)
// object.stampaId()
// object.stampaIdAnonima()




// // let o = function(input) {
// //     return input+2
// // }

//  console.log('contract function', o(10))



// //5. funzione come argomento di funzione

// //funzione anonime
// let o = (input) => {
//     return input + 2
// }

// function first(f) {
//     return f(1);
// }

// let res = first(o);
// console.log('argument function', res)

// //6. setInterval e setTimeout


// let timer =  setInterval(() => {
//     console.log('set interval 1')
// }, 1000)

// let timer2 =  setInterval(() => {
//     console.log('set interval 2')
// }, 1500)

//  setTimeout(() => {
//      console.log('stop 1')
//     clearInterval(timer)
// }, 10000)

// setTimeout(() => {
//     console.log('stop 2')
//    clearInterval(timer2)
// }, 15000)


// //7. vettori

// let v = [ 1, 2 ,3 ]
// v.push(4)
// let lastElement = v.pop()
// console.log('lastElement', lastElement)

// let v2  = [ 
//     {
//         orderId: 1,
//         qty: 10,
//         total: 100
//     },
//     {
//         orderId: 2,
//         qty: 10
//     },
//     {
//         orderId: 3,
//         qty: 10
//     }
// ]

// for (let i=0;i<v2.length;i++) {
//     console.log(v2[i])
// }


// let found = v2.filter(el => el.orderId == 3)

// console.log(found[0])
// found[0].total = 500
// console.log(found[0])

// for (let i=0;i<v2.length;i++) {
//     console.log(v2[i])
// }



// for (let i=0;i<v2.length;i++) {
//     console.log(v2[i])
// }

// v2.forEach(el => {
//     console.log(el)
// })

// let v = [
//     {
//         id: 1,
//         total: 100
//     },
//     {
//         id: 2,
//         total: 50
//     },
//     {
//         id: 3,
//         total: 50
//     }
// ]

// let timer = setInterval(() => {
//     v.forEach( el => console.log('v', el))
// }, 1000)

// let idx = 4
// let adder = setInterval(() => {    
//     v.push({
//         id: idx++,
//         total: 100
//     })
//     v.push({
//         id: idx++,
//         total: 300
//     })

    
// }, 2000)

// let remover = setInterval(() => {
//     let rem = v.pop()
//     console.log('removed', rem)
// }, 3000)

// setTimeout(() => {
//     clearInterval(timer)
//     clearInterval(adder)
//     clearInterval(remover)
// }, 15000)

// let o1 = {}
// let o2 = new Object()

// let a1 = []
// let a2 = new Array()



// console.log('sums', sum2(sum1))













// //es. creare un oggetto auto, che contenga 4 oggetti ruote e un contakm.
// Ciascuna ruota ha un usura % di partenza (diversa
// per ciascuna ruota) che cala del 5% ad ogni km effettuato.
// l'oggetto auto ha un metodo start  che quando invocato deve far sì che 
// ogni 2 secondi aumenti di 1 il contakm. 
// Quando la prima delle 4 ruote ha un'usura pari a 0, 
// l'auto invoca un metodo di stop che comunica quale delle
// ruote ha ceduto e dopo quanti km

// let car = {
//     carTimer: null,
//     tyres: [
//         {
//             id: 1,
//             usury: 90
//         },
//         {
//             id: 2,
//             usury: 85
//         },
//         {
//             id: 3,
//             usury: 100
//         },
//         {
//             id: 4,
//             usury: 60
//         }
//     ],
//     odometer: 0,
//     start: function () {
//         this.carTimer =  setInterval(() => {
//             console.log('odometer', this.odometer++)
//             this.tyres.forEach(t => {
//                 t.usury -= 5
//                 if (this.isUsuryOverloaded(t)) {
//                     this.stop(t);
//                 }
//             })

//         }, 2000)
//     },
//     stop: function( tyre) {
//         clearInterval(this.carTimer)
//         console.log('car stop after', this.odometer, ' km - tyre ', tyre.id)
//     },
//     isUsuryOverloaded: function(tyre) {
//         return tyre.usury === 0;
//     }
// }
// car.start()

// let sum1 = function(a,b) {
//     return a + b
// }

// let sum2 = function(sum) {
//     return sum1(1, sum1(2, sum1(3,4)))
// }

