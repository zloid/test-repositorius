import Reef from 'reefjs'
// own
import myLib from './myLib'
import iCreateElement from '../utils/iCreateElement'
import MyComponent from '../components/myComponent/MyComponent'

const App = new Reef('#root', {
    template: () => `
        ${MyComponent({ foo: 'fofofo', color: 'success' })}
        <div onclick="msg()" class="badge badge-primary">
            Hello, world!
        </div>
        ${MyComponent({ bar: 'brbrbr' })}
        <div id="d_897123">
            d_897123
        </div>
        ${MyComponent({ bar: 'brbrbr' })}
        ${MyComponent({ bar: 'brbrbr', color: 'danger' })}
        ${MyComponent({ bar: 'brbrbr' })}
        <br />
        <button id="d_213342">
            btn 645123
        </button>
        <br />
        <button
            id="elem2"
            class="btn btn-info"
        >
            Autoclick 111
            ${MyComponent({ bar: 'brbrbr' })}
        </button>
    `,
})

// creating customEvent - 'cccp'
iCreateElement({ id: 'elemm', tag: 'button', inner: 'elemm' })
let event = new Event('cccp')
document.addEventListener('cccp', () => alert('is cccp'))

document.getElementById('elemm').addEventListener('click', (ev) => {
    document.dispatchEvent(event)
})

export default App
