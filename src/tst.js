export const foo = () => {
    'bar from test.js <~~~> ' + Math.random()

    document.body.innerHTML = 'hello webpack!'

    setTimeout(function () {
        document.body.innerHTML = `foo()`
        console.log(`foo()`)
    }, 999)

    document.body.style.background = '#ddd'
    setTimeout(() => {
        //   document.body.style.background = '#f4ecd7'
        //  document.body.style.background = 'papayawhip'
        document.body.style.background = 'tomato'
    }, 2000)

    setTimeout(() => {
        console.log(...[`777 hello ${Math.random()} and some`])
    }, 3000)

    const a = 'foo'
    console.log(a)
}
