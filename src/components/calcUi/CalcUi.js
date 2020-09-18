import CalcDisplay from '../calcDisplay/CalcDisplay'
import CalcButtons from '../calcButtons/CalcButtons'
// import CalcFeatures from '../CalcFeatures/CalcFeatures'

const CalcUi = () => `<div>

    ${CalcDisplay()}

    <hr />  

    ${CalcButtons()}
    
               
</div>`

export default CalcUi
