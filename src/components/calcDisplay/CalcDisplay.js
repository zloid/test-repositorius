import { store } from '../../app/store'

const tstFun = str => {
    // return str + 'dsa'
    let middleStr
    middleStr = str
    //begin > 00 > 0
    middleStr = middleStr.replace(/^0+/, '0')
    //begin > 02 > 0
    middleStr = middleStr.replace(/^0(\d|[(])/, '$1')
    //begin > 012 > 12; + 02 > + 2
    middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')
    //++ -- ÷÷ *** +-÷  > + - * ÷
    middleStr = middleStr.replace(/(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g, ' $1 ')
    //.... > . > (( > ( > )) > )
    middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1')
    //begin > ) > (
    middleStr = middleStr.replace(/^0\)/, '(')
    //() > ' '
    // middleStr = middleStr.replace(/\(\)/, ' ');
    //431.55.66 + 1.2.3 > 431.5566 + 1.23
    middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1')
    //.7 > 0.7
    middleStr = middleStr.replace(/[^\d]\./, ' 0.')
    middleStr = middleStr.replace(/^\./, '0.')
    //7. + > 7 +
    middleStr = middleStr.replace(/([\d])\.\s/g, ' $1 ')
    // '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
    middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ')
    return middleStr
}

const CalcDisplay = () => `<div class="clcdspl">
    <button>
        CalcDisplay67808
    </button>

    <hr />

    ${store
        .getState()
        .modernReducer.defaultArray.map(elem => `<li>${elem}</li>`)
        .join('')}
        
        ${store
            .getState()
            .modernReducer.defaultArray.map(elem => `<li>${elem}</li>`)
            .join('')}

    <hr />
    ${store
        .getState()
        .buttonToDisplay.displayData.split('')
        .join('---')}

    <hr />
    ${store
        .getState()
        .buttonToDisplay.displayData.length}
    <hr />
    <u>foo (store
        .getState()
        .modernReducer.foo):</u>
    ${store.getState().modernReducer.foo}
    <hr />

    <div
        class="badge badge-success"
        role="calcMainScreen"
        onclick="window.myLib.iRnd()"
    >
        <h2>
            <p>calcScreen_74568</p>
            ${store.getState().buttonToDisplay.displayData}
            
        </h2>
    </div>

</div>`

export default CalcDisplay
