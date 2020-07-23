// window.iCreateElement({})

myLib.create({tag: 'hr'})

// import Reef from 'reefjs'

// import App from '../../app/App'

/* 
const MyComponent = new Reef('#d_213342', {
    data: {
        rnd: () => 'hello! Math.random()',
    },
    template: ({ rnd }) => `
        <i>hello ${rnd()} ddd ${rnd()}</i>
        <strong><br>strng 1</strong>
    `,
    // attachTo: App,
})
 */
const runTagged = (...args) => {
    // console.log(args[0].join(''))
    console.log(args[1])

    // args.forEach(arg => {
    //     if (typeof arg === 'function') {
    //         arg()
    //     } 
    // })

    return args[0].join('')
}

window.fff = () => console.log('fff')

const nmb = 777
const rnd = () => Math.random()


// function iRnd( ) {console.log(710593)}

const MyComponent = () => `
        <i>hellooo  999  not like ${nmb}</i>
        <strong><br>strng 1 <---- ${rnd}</strong>
        <strong onclick="myLib.iRnd()" class="badge badge-warning"><br>strng 1 --MyComponent_423908-- ${rnd()}</strong>
    `
 
    
// let some = runTagged`${nmb} 123 ${iRnd} 45 6 --  as`
    // console.log(some)

export default MyComponent
