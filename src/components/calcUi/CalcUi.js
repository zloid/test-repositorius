import CalcDisplay from '../calcDisplay/CalcDisplay'
import CalcButtons from '../calcButtons/CalcButtons'
//import CalcFeatures from '../CalcFeatures/CalcFeatures'

import FeaturesArea from '../featuresArea/FeaturesArea'

const CalcUi = () => `<div>

    ${CalcDisplay()}

    <hr />  

    ${CalcButtons()}         

    ${FeaturesArea()}
               
</div>`

export default CalcUi
