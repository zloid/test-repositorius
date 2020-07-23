import Reef from 'reefjs'
// own
import myLib from './myLib'
import iCreateElement from '../utils/iCreateElement'
import MyComponent from '../components/myComponent/MyComponent'


/* 
iCreateElement({ id: 'd_213', cut: 'all' })
iCreateElement({
    id: 'd_2132',
    inner: `<b>hhh</b>
    <br />
        <i>w</i>`,
    parentId: '#d_213',
})
 */
const App = new Reef('#root', {
    template: () => `

    ${MyComponent}
        <div onclick="msg()" class="badge badge-primary">Hello, world!</div>
     ${MyComponent}
        <div id="d_897123">d_897123</div>
          <br />
        <button id="d_213342">btn</button>
        <br />
        <button id="elem2">Autoclick 111</button>
 
    `,
})

iCreateElement({id: 'elemm', tag: 'button', inner: 'elemm'})
let event = new Event('ccc')
document.addEventListener('ccc', () => alert('is ccc'))

document.getElementById('elemm').addEventListener('click', ev => {
    document.dispatchEvent(event)
})


console.log(23333)
Reef.emit(document.getElementById('elem'), 'click', {
    click: () => console.log(`It's party time!`),
})


/* 
const TestComponent = new Reef('#d_897123', {
    data: {
        rnd: () => Math.random(),
        click: () => console.log('i click 2341 TestComponent')
    },
    template: ({ rnd }) => `
        <i onClick="click()">hello ${rnd()}
            <br />         
        ddd555555555555 - ${rnd()}</i>
            <br />
        <strong>321 strng</strong>          
    `,
    attachTo: App,
})
  */

// console.log('App: ', App.attached)
// console.log('TestComponent: ', TestComponent)
// console.log('MyComponent ', MyComponent)

export default App
