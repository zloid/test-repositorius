import store from '../../app/store'

export const CalcDisplay = () => /* html */ `<div class="row">
    <div
        class="col calcScreen"
        onclick="window.connectDispatch.buttonToDisplay.doEqual()"
        role="calcMainScreen"
    >${store.getState().buttonToDisplay.displayData}</div>
</div>`
