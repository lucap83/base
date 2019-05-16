//costrutti di Promise e async/wait
async function testAsync() {
    let tick = 1;
    let int = setInterval(() => {
            console.log('tick', tick++)
    }, 1000)   


    //promise 1
    let promise_first = new Promise(resolve => {
        setTimeout(() => resolve('first promise done!'), 1500)
    });

    //promise 2
    let promise_second = new Promise(resolve => {
        setTimeout(() =>
            resolve('second promise done!'), 3000)

    });

    let f = await promise_first;
    console.log(f)

    let s =await   promise_second;
    clearInterval(int)

    console.log(s)   

}


testAsync()