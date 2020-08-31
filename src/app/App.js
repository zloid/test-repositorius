import Reef from 'reefjs'
// import store  from '../app/store'
// own
import CalcUi from '../components/calcUi/CalcUi'

const App = new Reef('#root', {
    template: (props) => `<div class="container">

        ${CalcUi()}    
                  
        <button
            onClick="window.myLib.strTest()"
            class="btn btn-primary"
        >
            ibtn_hello_0
        </button>

        <button
            onClick="myLib.create({tag: 'button', inner: 'blah'})"
            class="btn btn-warning"
        >
        ibtn_hello_1
        </button>

        
        
    </div>`,
})

export default App
