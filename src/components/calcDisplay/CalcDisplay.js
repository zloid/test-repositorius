import store from '../../app/store'

const CalcDisplay = () => `<div class="clcdspl">
        CalcDisplay_67808


<!--
    ${store
        .getState()
        .modernReducer.defaultArray.map((elem) => `<li>${elem}</li>`)
        .join('')}
-->           


<!--
    <u>foo (store
        .getState()
        .modernReducer.foo):</u>
    ${store.getState().modernReducer.foo}
-->

<p>calcScreen_74568</p>

    <div
        class="badge badge-success"
        role="calcMainScreen"
        onclick="window.myLib.iRnd()"
    >
    
        <h3>
        
            ${store.getState().buttonToDisplay.displayData}
            
        </h3>

    </div>

    <hr />

    length_arr_nmbr_784562513: 
    ${store.getState().buttonToDisplay.displayData.length}

    <hr />

</div>`

export default CalcDisplay
