async function testAsync() {
    let tick = 1;
    let int = setInterval(() => {
            console.log('tick', tick++)
    }, 1000)
    setTimeout(() => {
        clearInterval(int)
    }, 5000)



    //promise 1
    let promise_first = new Promise(resolve => {
        setTimeout(() => resolve('first done!'), 1500)
    });

    //promise 2
    let promise_second = new Promise(resolve => {
        setTimeout(() =>
            resolve('second done!'), 3500)

    });

    let f = await promise_first;
    let s = await promise_second;

    console.log(f,s)

    //esercizio: provare a stoppare il timer usando il costrutto di await

}


testAsync()