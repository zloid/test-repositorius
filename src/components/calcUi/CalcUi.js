// import { store } from '../../store'
import { store } from '../../app/store'

import CalcDisplay from '../calcDisplay/CalcDisplay'

import CalcButtons from '../calcButtons/CalcButtons'

import { addButtonValueToScreen } from '../../features/buttonToDisplay/buttonToDisplaySlice'

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

// store.data.todos.push('Take a nap... CalcUi.js')
// store.data.todos.push('a')

// todo

// console.log('store.state~>: CalcUi.js >>', store.getState())

/*
    <h2>${new Date().toLocaleTimeString()}</h2>


<!--
 ${CalcButton({
     role: 'butnZero',
     data: '0',
     className: 'btn',
     click: 'window.myLib.iRnd()',
 })} 
    ${CalcButton({
        role: 'butnEight',
        data: '8',
        className: 'btn',
        click: 'window.myLib.iRnd()',
})} 
    --> 

`

<hr />
            <Container>
                <Row>
                    <Col>
                                                    <CalcScreen clickOnCalcScreen={this.getAnswerSlim} resultOnScreen={this.state.screenResult} />
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">7</Button>

                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">8</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">9</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">÷</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">4</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">5</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">6</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">1</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">2</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">3</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">0</Button>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.clearScreen} block variant="outline-secondary">C</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.getAnswerSlim} block variant="outline-secondary">=</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">.</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">+</Button>
                    </Col>
                </Row>
            </Container>

`
 
*/
