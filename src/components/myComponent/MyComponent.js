const MyComponent = ({
    foo = 'nope1987',
    bar = 'nope2',
    color = 'warning',
}) => `
    <p>
        ${foo}, ${foo}, ${foo + ' ; ' + foo}
        <br />
        <i>
            MyCmpnnt test_87456213 
        </i>    
    </p>       
    <button onclick="window.myLib.iRnd()">
        ${bar}
    </button>
`

export default MyComponent

/* 
const rnd = () => Math.random()
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
*/
