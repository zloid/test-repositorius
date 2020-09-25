import store from '../../app/store'

const CalcDisplay = () => /* html */ `<div>
    <div
        class="row"
        role="calcMainScreen"
        onclick="window.myLib.buttonToDisplay.doEqual()"
    >
        <div class="col calcScreen">
            ${store.getState().buttonToDisplay.displayData}
        </div>
    </div>
</div>`

export default CalcDisplay
