//1. dimostrazione duck typing

let a = 1

let b = ' - number one'

let c  = a + b

console.log(c)

//2. dimostrazione ==, ===, != e !==
let d = '2'
if (a == d) {
    console.log('are the same')
} else {
    console.log('are different')
}


//3. definizione di funzione

function test(a, b, c) {
    let d = b - c
    return a + d
}


let k = test(1,2,3)
console.log('function def', k)

//4. definizione di oggetto

let objectFunction = function() {
    this.id = 1
    this.value = 'primo valore'

    this.stampaId = function() {
        console.log('my function object id is', this.id)
    }

    return this;

}
let of = new objectFunction
console.log('object function', of)
of.stampaId()


let object =  {
    id: 1,
    value: 'primo valore',
    stampaId: function () {
        console.log('my id is', this.id)
    }
}
console.log('object', object)
object.stampaId()


//funzione anonime
let o = (input) => {
    return input + 2
}

console.log('contract function', o(10))



//5. funzione come argomento di funzione

function first(f) {
    return f(1);
}

let res = first(o);
console.log('argument function', res)

//6. setInterval e setTimeout


let timer =  setInterval(() => {
    console.log('set interval')
}, 1000)

 setTimeout(() => {
    clearInterval(timer)
}, 5000)

//7. vettori

let v = [ 1, 2 ,3 ]
v.push(4)
let lastElement = v.pop()
console.log('lastElement', lastElement)

let v2  = [ 1, 'ciao', { a: 1 ,  b: 'test'} ]



for (let i=0;i<v2.length;i++) {
    console.log(v2[i])
}

v2.forEach(el => {
    console.log(el)
})




//es. creare un oggetto auto, che contenga 4 oggetti ruote e un contakm. Ciascuna ruota ha un usura % di partenza (diversa
//per ciascuna ruota) che cala del 5% ad ogni km effettuato.
// l'oggetto auto ha un metodo start  che quando invocato deve far sì che ogni 2 secondi
// aumenti di 1 il contakm. Quando la prima delle 4 ruote ha un'usura pari a 0, l'auto invoca un metodo di stop che comunica quale delle
//ruote ha ceduto e dopo quanti km

let carTimer
let car = {
    tyres: [
        {
            id: 1,
            usury: 90
        },
        {
            id: 2,
            usury: 85
        },
        {
            id: 3,
            usury: 100
        },
        {
            id: 4,
            usury: 70
        }
    ],
    odometer: 0,
    start: function () {
        carTimer =  setInterval(() => {
            console.log('odometer', this.odometer++)
            this.tyres.forEach(t => {
                t.usury -= 5
                if (this.isUsuryOverloaded(t)) {
                    this.stop(t);
                }
            })

        }, 2000)
    },
    stop: function( tyre) {
        clearInterval(carTimer)
        console.log('car stop after', this.odometer, ' km - tyre ', tyre.id)
    },
    isUsuryOverloaded: function(tyre) {
        return tyre.usury === 0;
    }
}
car.start()