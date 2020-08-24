// import { store } from '../../store'
// import { store } from '../../app/store'

import CalcDisplay from '../calcDisplay/CalcDisplay'

import CalcButtons from '../calcButtons/CalcButtons'

// import { addButtonValueToScreen } from '../../features/buttonToDisplay/buttonToDisplaySlice'

// store.dispatch({ type: 'ADD_TODO', text: 'mmm987654321' })
// store.dispatch(addButtonValueToScreen(951))

const CalcUi = () => `<div>

    ${CalcDisplay()}

     ${CalcButtons()}
        
<!--
    <textarea onclick="window.myLib.btnToDspl(this.value)">
            >>>>>>>>>>>>
    </textarea>  

            <input
                value="7"
                onclick="window.myLib.doRdx(this.value)"
            />
                999999977
-->      

    
    <p>
        CalcUi_9832
    </p>
        
    <div class="row">
    
        <div class="col">
        
        </div>    
    </div>
         
        
</div>`

export default CalcUi
