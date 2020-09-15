import CalcDisplay from '../calcDisplay/CalcDisplay'
import CalcButtons from '../calcButtons/CalcButtons'

const CalcUi = () => `<div>

    ${CalcDisplay()}

    <hr />  

    ${CalcButtons()}
               
</div>`

export default CalcUi
