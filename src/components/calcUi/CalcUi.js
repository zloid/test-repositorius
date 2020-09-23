import CalcDisplay from '../calcDisplay/CalcDisplay'
import CalcButtons from '../calcButtons/CalcButtons'
import FeaturesArea from '../featuresArea/FeaturesArea'

const CalcUi = () => `<div class="container">

    ${CalcDisplay()}

    <hr />  

    ${CalcButtons()}         

    ${FeaturesArea()}
               
</div>`

export default CalcUi
