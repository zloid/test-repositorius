const rnd = () => Math.random()

const MyComponent = ({ foo = 'nope1', bar = 'nope2', color = 'warning' }) => `
    ${myLib.create({ tag: 'button', inner: 'MyComponent: myLib.create' })}
        <i>
            hellooo 999 not like
        </i>
        <strong>
            <br />
            <p>strng 1 <----DEFINE ${rnd}</p>
        </strong>
        <strong
            onclick="myLib.iRnd()" 
            class="badge badge-${color}"
        >
            <br />
            strng 1 --MyComponent_423908--CALL--> ${rnd()}
            foooo is: ${foo}
            <br />
            barrrrrrr is: ${bar} 
        </strong>
    `

export default MyComponent
